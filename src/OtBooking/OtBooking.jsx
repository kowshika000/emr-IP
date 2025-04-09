import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import BookingListTable from "../SurgeryBookingsList/BookingListTable";

const OtBooking = () => {
  const currentDateTime = new Date().toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <Box p={"20px"}>
      <Box display={"flex"} justifyContent={"space-between"} mb={"20px"}>
        <h6>OT Bookings List</h6>
        <p>{currentDateTime}</p>
      </Box>
      <BookingListTable />
    </Box>
  );
};

export default OtBooking;
