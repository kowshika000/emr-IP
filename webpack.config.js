const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const Dotenv = require("dotenv-webpack");

const deps = require("./package.json").dependencies;

const printCompilationMessage = require("./compilation.config.js");

module.exports = (_, argv) => {
  const isProduction = argv.mode === "production";
  const publicPath = isProduction
    ? "https://emr-ip-child2.web.app/"
    : "http://localhost:3002/";
  return {
    output: {
      publicPath: publicPath,
    },

    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: {
      port: 3002,
      historyApiFallback: true,
      watchFiles: [path.resolve(__dirname, "src")],
      hot: false, // 🔴 Disable Hot Module Replacement (HMR)
      liveReload: false, // 🔴 Prevent WebSockets from reconnecting
      client: {
        webSocketURL: "auto://0.0.0.0:0/ws", // 🔴 Prevent WebSocket issues
      },
      onListening: function (devServer) {
        const port = devServer.server.address().port;
        printCompilationMessage("compiling", port);
        devServer.compiler.hooks.done.tap("OutputMessagePlugin", (stats) => {
          setImmediate(() => {
            if (stats.hasErrors()) {
              printCompilationMessage("failure", port);
            } else {
              printCompilationMessage("success", port);
            }
          });
        });
      },
    },

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(jpg|jpeg|png|gif|svg)$/i, // Match image files
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[path][name].[ext]", // Configure output file naming
              },
            },
          ],
        },
      ],
    },

    plugins: [
      new ModuleFederationPlugin({
        name: "emr_ip",
        filename: "remoteEntry.js",
        remotes: {
          emr_ui: isProduction
            ? "emr_ui@https://emr-ui-parent-25225.web.app/remoteEntry.js"
            : "emr_ui@http://localhost:3000/remoteEntry.js",
        },
        exposes: {
          "./IpHeaderTab": "./src/Components/Header.jsx",
          "./OtBooking": "./src/OtBooking/OtBooking.jsx",
          "./ipReducer": "./src/Redux/reducer.jsx",
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps["react"],
            eager: false,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
            eager: false,
          },
          "react-router-dom": {
            singleton: true,
            requiredVersion: deps["react-router-dom"],
            eager: false,
          },
        },
      }),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
      }),
      new Dotenv(),
    ],
  };
};
