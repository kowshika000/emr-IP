import { Dialog, DialogContent } from "@mui/material";
import React from "react";
import "./Components.css";
import Button from "./Button";

const IPModal = ({ open, onClose, btnLable, showDetails }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth={"lg"} fullWidth>
      <DialogContent>
        {showDetails}
        {btnLable ? <Button btnName={btnLable} direction={"end"} /> : ""}
      </DialogContent>
    </Dialog>
  );
};

export default IPModal;
