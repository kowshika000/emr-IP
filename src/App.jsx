import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.css";
import store from "emr_ui/Store";
import { Provider } from "react-redux";

function App() {
  return <Header />;
}

const root = ReactDOM.createRoot(document.getElementById("ip-app"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

export default App;
