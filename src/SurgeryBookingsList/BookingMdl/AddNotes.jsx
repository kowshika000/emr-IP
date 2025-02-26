import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import IPModal from "../../Components/IPModal";
import Button from "../../Components/Button";
import Input from "../../Components/Input";

const ModalBodyDetails = () => {
  const Style = {
    display: "flex",
    justifyContent: "space-between",
  };
  const [showAddMdl, setShowAddMdl] = useState(false);

  return (
    <div>
      <div style={Style}>
        <div className="text-header ">Surgery Booking Status & Notes</div>
        <div>
          <Button btnName="Add" onClick={() => setShowAddMdl(true)} />
        </div>
      </div>
      <TableContainer
        sx={{ borderRadius: "4px", marginTop: "25px", marginBottom: "20px" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SI No</TableCell>
              <TableCell>Call Status</TableCell>
              <TableCell>Remarks</TableCell>
              <TableCell>Entered By</TableCell>
              <TableCell>Entered Date</TableCell>
              <TableCell>Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Cancelled</TableCell>
              <TableCell>Cancelled</TableCell>
              <TableCell>admin</TableCell>
              <TableCell>20-10-2024 01:59</TableCell>
              <TableCell>
                <Box display={"flex"} gap={"10px"}>
                  <Button btnName={"Edit"} direction={"center"} />
                  <Button btnName={"Delete"} direction={"center"} />
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={showAddMdl} onClose={() => setShowAddMdl(false)}>
        <DialogContent>
          <form>
            <div className="text-header mb-4">Add Booking Status & Note</div>

            <Input type={"text"} label={"Call Status"}/>
            <Input type={"text"} label={"Remarks"} />
            <div className="mt-4">
              <Button btnName={"Submit"} />
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const AddNotes = ({ open, onClose }) => {
  return (
    <div>
      <IPModal
        open={open}
        onClose={onClose}
        showDetails={<ModalBodyDetails />}
      />
    </div>
  );
};

export default AddNotes;
