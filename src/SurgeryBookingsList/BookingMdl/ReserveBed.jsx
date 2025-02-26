import React, { useState } from "react";
import IPModal from "../../Components/IPModal";
import Input from "../../Components/Input";
import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import { Bed } from "@mui/icons-material";
import Button from "../../Components/Button";

const ModalBodyDetails = () => {
  const [reservationDetails, setReservationDetails] = useState({
    expectedAdmitDate: "",
    expectedAdmitTime: "",
    expectedDischargeDate: "",
    expectedDischargeTime: "",
    bedType: "select",
    ward: "select",
    room: "select",
    bed: "select",
  });
  const [search, setSearch] = useState(false);
  const [showBed, setShowBed] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div>
      <div>
        <div className="text-header" style={{ marginTop: "20px" }}>
          Patient Surgery Details
        </div>
        <div className="form-group">
          <Input
            type="text"
            label="Name"
            value="AL ZAHRAA AHMED ABDULLAH AL SHIZAWI"
            readOnly
          />
          <Input type="number" label="MR No" value="JS8" readOnly />
          <Input
            type="text"
            label="Surgeon"
            value="Dr. Galileo Galilei"
            readOnly
          />
          <Input
            type="text"
            label="Surgery Date & Timing"
            value="11-05-2024 09:00:00 11:00:00"
            readOnly
          />
        </div>
      </div>
      <div>
        <div className="text-header">Bed Reservation Details</div>
        <div className="form-group">
          <Input
            type="date"
            label="Expected Admit Date"
            name="expectedAdmitDate"
            value={reservationDetails.expectedAdmitDate}
            onChange={handleInputChange}
          />
          <Input
            type="number"
            label="Expected Admit Time"
            name="expectedAdmitTime"
            value={reservationDetails.expectedAdmitTime}
            onChange={handleInputChange}
          />
          <Input
            type="date"
            label="Expected Discharge Date"
            name="expectedDischargeDate"
            value={reservationDetails.expectedDischargeDate}
            onChange={handleInputChange}
          />
          <Input
            type="number"
            label="Expected Discharge Time"
            name="expectedDischargeTime"
            value={reservationDetails.expectedDischargeTime}
            onChange={handleInputChange}
          />
          <Input
            label="Bed Type"
            type="select"
            name="bedType"
            options={[
              "select",
              "Bed Electronic",
              "Resusitation Bed",
              "Neonatal Warmer bed",
              "Bed Bassinat",
              "Bed Incubator",
              "Bed Stretcher",
              "Operating Table",
            ]}
            value={reservationDetails.bedType}
            onChange={handleInputChange}
          />
          <Input
            label="Ward"
            type="select"
            name="ward"
            options={[
              "select",
              "ER",
              "ICU",
              "IPD Ward 1",
              "IPD Ward 2",
              "LDR",
              "NLCU",
              "Operation Theatre",
              "OT Preparation",
              "OT Recovery",
              "Ventilator",
            ]}
            value={reservationDetails.ward}
            onChange={handleInputChange}
          />
          <Input
            label="Room"
            type="select"
            name="room"
            options={[
              "select",
              "Mazoon 201",
              "Standard 102",
              "Standard 103",
              "Deluxe 404",
              "Deluxe 405",
              "Well Baby",
              "Ajan Suite 1",
            ]}
            value={reservationDetails.room}
            onChange={handleInputChange}
          />
          <Input
            label="Bed"
            type="select"
            name="bed"
            options={["select", "Bed 1", "Bed 2", "Bed 3"]}
            value={reservationDetails.bed}
            onChange={handleInputChange}
          />
        </div>
        <Button
          btnName={"Search"}
          direction={"end"}
          onClick={() => setSearch(true)}
        />

        {search && (
          <Box>
            <Typography variant="body1">
              <strong>Room Number:</strong> Mazoon Suite 201
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              mt={2}
              sx={{ cursor: "pointer" }}
              onClick={() => setShowBed(true)}
            >
              <Bed color="primary" />
              <Typography variant="body1" ml={1}>
                Bed 1
              </Typography>
            </Box>
          </Box>
        )}
        <Dialog open={showBed} onClose={() => setShowBed(false)}>
          <DialogContent>
            <Box display={"flex"} justifyContent={"space-between"} gap={5}>
              <div className="text-header">Bed Management</div>
              <Button btnName={"Close"} direction={"space-between"} />
            </Box>
            <div className="form-group">
              <Input label={"Ward"} value={"IPD Ward1"} readOnly />
              <Input label={"Type"} value={"IPD"} readOnly />
              <Input label={"Room"} value={"Mazoon Suite 101"} readOnly />
              <Input label={"Bed No"} value={"BED 1"} readOnly />
              <Input label={"Remarks"} />
            </div>

            <Button btnName={"Submit"} direction={"end"} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

const ReserveBed = ({ open, onClose }) => {
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

export default ReserveBed;
