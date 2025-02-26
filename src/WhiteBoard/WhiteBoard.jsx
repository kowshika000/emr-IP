import React from "react";
import WhiteBoardSearch from "./WhiteBoardSearch";
import { Box } from "@mui/material";
import "./WhiteBoard.css";
import PatientTabs from "./PatientTabs";

const WhiteBoard = () => {
  return (
    <Box >
      <WhiteBoardSearch />
      <PatientTabs />
    </Box>
  );
};

export default WhiteBoard;
