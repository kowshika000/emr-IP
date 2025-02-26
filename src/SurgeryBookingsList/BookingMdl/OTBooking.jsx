import React, { useState } from "react";
import IPModal from "../../Components/IPModal";
import Input from "../../Components/Input";
import { Box } from "@mui/material";
import Button from "../../Components/Button";

const ModalBodyDetails = () => {
  const [formData, setFormData] = useState({
    appointmentWithDoctor: "John",
    takenBy: "Administrator 25-9-2024",
    patientType: "xxxxxxx",
    date: "yyyyyy",
    time: "mmmmmm",
    mobile: "1234567890",
    name: "xxxxxxxx",
    remarks: "",
    callStatus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [schedule, setSchedule] = useState({
    date: "",
    time: "",
    slot: "",
  });

  const handleChangeSchedule = (e) => {
    const { name, value } = e.target;
    setSchedule((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="text-header">Resource Doctors Schedule Details</div>
      <div className="form-group">
        <div className="showDetails">
          <label>Appointment with Doctor:</label>
          <div>{formData.appointmentWithDoctor}</div>
        </div>
        <div className="showDetails">
          <label>Taken By:</label>
          <div>{formData.takenBy}</div>
        </div>
        <div className="showDetails">
          <label>Patient Type:</label>
          <div>{formData.patientType}</div>
        </div>
        <div className="showDetails">
          <label>Date:</label>
          <div>{formData.date}</div>
        </div>
        <div className="showDetails">
          <label>Time:</label>
          <div>{formData.time}</div>
        </div>
        <div className="showDetails">
          <label>Mobile:</label>
          <div>{formData.mobile}</div>
        </div>
        <div className="showDetails">
          <label>Name:</label>
          <div>{formData.name}</div>
        </div>
      </div>
      <div className="form-group">
        <Input
          type="text"
          label="Remarks"
          value={formData.remarks}
          name="remarks"
          onChange={handleChange}
        />
        <Input
          type="select"
          label="Call Status"
          value={formData.callStatus}
          name="callStatus"
          onChange={handleChange}
          options={["Pending", "Completed", "Cancelled"]}
        />
        <Box marginTop={"inherit"} marginLeft={"auto"}>
          <Box display={"flex"}  gap={"16px"}>
            <Button btnName="Update" direction={"end"} />
            <Button btnName="Close" direction={"end"} />
          </Box>
        </Box>
      </div>
      {/* <Box display={"flex"} justifyContent={"end"} gap={"16px"}>
        <Button btnName="Update" direction={"end"} />
        <Button btnName="Close" direction={"end"} />
      </Box> */}
      <div className="text-header">Reschedule</div>
      <div className="form-group">
        <Input
          type="text"
          label="Date"
          value={schedule.date}
          name="date"
          onChange={handleChangeSchedule}
        />
        <Input
          type="text"
          label="Time"
          value={schedule.time}
          name="time"
          onChange={handleChangeSchedule}
        />
        <Input
          type="text"
          label="Slot"
          value={schedule.slot}
          name="slot"
          onChange={handleChangeSchedule}
        />
         <Box marginTop={"inherit"} marginLeft={"auto"}>
         <Button btnName="Reschedule" direction={"end"} />
        </Box>
      </div>

      
    </div>
  );
};

const OTBooking = ({ open, onClose }) => {
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

export default OTBooking;
