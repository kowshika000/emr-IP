import React from "react";
import IPModal from "../../Components/IPModal";
import Input from "../../Components/Input";
import { Box, Typography, Grid } from "@mui/material";

const ModalBodyDetails = () => {
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const formattedTime = `${
          hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
        }:${minute === 0 ? "00" : minute} ${hour >= 12 ? "PM" : "AM"}`;

        slots.push({
          time: formattedTime,
          isBooked: hour === 1 && minute === 0 && minute === 15,
        });
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <div>
      {/* Header */}
      <div className="text-header">Anaesthesia Schedule</div>
      <div className="text-header mt-4">Doctor Schedules</div>

      {/* Input Fields */}
      <div className="form-group">
        <Input label="Date" />
        <Input label="Office/Branch" />
        <Input label="Speciality" />
      </div>

      <Box
        sx={{
          mx: "auto",
          border: "1px solid #ddd",
          borderRadius: 2,
          height: "300px",
          overflowY: "auto",
        }}
      >
        {timeSlots.map((slot, index) => (
          <div>
            <div
              key={index}
              className="w-25 p-4 text-center"
              style={{
                borderBottom: "2px solid white ",
                backgroundColor: "#ddd",
                borderRight: "2px solid white",
              }}
            >
              {slot.time}
            </div>
            <div></div>
          </div>
          //   <Grid
          //     container
          //     key={index}
          //     sx={{
          //       borderBottom:
          //         index !== timeSlots.length - 1 ? "1px solid #ddd" : "none",
          //       alignItems: "center",
          //       height: "40px", // Adjust height as needed
          //     }}
          //   >
          //     {/* Time Label */}
          //     <Grid
          //       item
          //       xs={2}
          //       sx={{
          //         textAlign: "right",
          //         pr: 1,
          //         borderRight: "1px solid #ddd",
          //       }}
          //     >
          //       <Typography variant="body2" sx={{ fontSize: "12px" }}>
          //         {slot.time}
          //       </Typography>
          //     </Grid>

          //     {/* Content Area */}
          //     <Grid
          //       item
          //       xs={10}
          //       sx={{
          //         backgroundColor: slot.isBooked ? "#e0f7fa" : "#fff", // Booked slots get a different color
          //         "&:hover": {
          //           backgroundColor: slot.isBooked ? "#b2ebf2" : "#f0f0f0", // Hover effect
          //         },
          //       }}
          //     ></Grid>
          //   </Grid>
        ))}
      </Box>
    </div>
  );
};

const AnaesthesiaSchedule = ({ open, onClose }) => {
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

export default AnaesthesiaSchedule;
