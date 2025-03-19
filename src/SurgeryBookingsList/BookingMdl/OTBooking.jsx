import React, { useEffect, useState } from "react";
import IPModal from "../../Components/IPModal";
import Input from "../../Components/Input";
import { Box } from "@mui/material";
import Button from "../../Components/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchReschedule } from "../../Redux/slice/SurgeryList/rescheduleOtSlice";
import { fetchSurgeryBookingDetail } from "../../Redux/slice/SurgeryList/bookingDetailSlice";

const ModalBodyDetails = ({ onClose, surgeryId }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.ip?.bookingDetails);
  const bookingData = data?.[0];
  console.log(bookingData);

  const [formData, setFormData] = useState({
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
    rescheduleDate: "",
    rescheduleTime: "",
    // slot: "",
  });

  const handleChangeSchedule = (e) => {
    const { name, value } = e.target;
    setSchedule((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {
    dispatch(fetchSurgeryBookingDetail({ surgeryId }));
  }, []);
  const handleReschedule = () => {
    dispatch(fetchReschedule({ surgeryId, data: schedule }));
    onClose();
  };
  return (
    <div>
      <div className="text-header">Resource Doctors Schedule Details</div>
      <div className="form-group">
        <div className="showDetails">
          <label>Appointment with Doctor:</label>
          {/* <div>{bookingData.appointmentWithDoctor}</div> */}
        </div>
        <div className="showDetails">
          <label>Taken By:</label>
          {/* <div>{bookingData.takenBy}</div> */}
        </div>
        <div className="showDetails">
          <label>Patient Type:</label>
          {/* <div>{bookingData.patientType}</div> */}
        </div>
        <div className="showDetails">
          <label>Date:</label>
          {/* <div>{bookingData.admit_date}</div> */}
        </div>
        <div className="showDetails">
          <label>Time:</label>
          {/* <div>{bookingData.time}</div> */}
        </div>
        <div className="showDetails">
          <label>Mobile:</label>
          {/* <div>{bookingData.mobile}</div> */}
        </div>
        <div className="showDetails">
          <label>Name:</label>
          {/* <div>{bookingData.name}</div> */}
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
          <Box display={"flex"} gap={"16px"}>
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
          type="date"
          label="Date"
          value={schedule.rescheduleDate}
          name="rescheduleDate"
          onChange={handleChangeSchedule}
        />
        <Input
          type="time"
          label="Time"
          value={schedule.rescheduleTime}
          name="rescheduleTime"
          onChange={handleChangeSchedule}
        />
        <Input
          type="text"
          label="Slot"
          // value={schedule.slot}
          name="slot"
          // onChange={handleChangeSchedule}
        />
        <Box marginTop={"inherit"} marginLeft={"auto"}>
          <Button
            onClick={handleReschedule}
            btnName="Reschedule"
            direction={"end"}
          />
        </Box>
      </div>
    </div>
  );
};

const OTBooking = ({ open, onClose, surgeryId }) => {
  return (
    <div>
      <IPModal
        open={open}
        onClose={onClose}
        showDetails={
          <ModalBodyDetails surgeryId={surgeryId} onClose={onClose} />
        }
      />
    </div>
  );
};

export default OTBooking;
