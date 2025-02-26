import { Box } from "@mui/material";
import React, { useState } from "react";
import IPTable from "../Components/IPTable";
import DateRangeIcon from "@mui/icons-material/DateRange";
import EditIcon from "@mui/icons-material/Edit";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import BedIcon from "@mui/icons-material/Bed";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ReplayIcon from "@mui/icons-material/Replay";
import CancelIcon from "@mui/icons-material/Cancel";
import AddNotes from "./BookingMdl/AddNotes";
import OTBooking from "./BookingMdl/OTBooking";
import OTCancel from "./BookingMdl/OTCancel";
import ReserveBed from "./BookingMdl/ReserveBed";
import AnaesthesiaSchedule from "./BookingMdl/AnaesthesiaSchedule";
import CancelSurgery from "./BookingMdl/CancelSurgery";

const BookingListTable = () => {
  const columns = [
    { id: "si_no", label: "S No" },
    { id: "mr_no", label: "MR No" },
    { id: "patient", label: "Patient" },
    { id: "admit_date", label: "Admit Date" },
    { id: "mobile", label: "Mobile" },
    { id: "exp_discharge_date", label: "Surgery Booked Date & By" },
    { id: "ward", label: "Approval Status" },
    { id: "doctor", label: "Theater" },
    { id: "surgeon", label: "Surgeon" },
    { id: "anaesthesia_schedule_status", label: "Anaesthesia Schedule Status" },
    {
      id: "anaesthesia_schedule_datetime",
      label: "Anaesthesia Schedule Date & Time",
    },
    { id: "ot_schedule_status", label: "OT Schedule Status" },
    { id: "surgery_datetime", label: "Surgery Date & Time" },
    { id: "options", label: "Options" },
  ];
  const rows = [
    {
      si_no: 1,
      mr_no: "MR123",
      patient: "John Doe",
      admit_date: "2024-11-01",
      mobile: "9876543210",
      exp_discharge_date: "2024-11-10",
      ward: "ICU",
      doctor: "Dr. Smith",
      surgeon: "Dr. Brown",
      anaesthesia_schedule_status: "Scheduled",
      anaesthesia_schedule_datetime: "2024-11-10 09:00 AM",
      ot_schedule_status: "Confirmed",
      surgery_datetime: "2024-11-10 10:00 AM",
    },
    {
      si_no: 2,
      mr_no: "MR124",
      patient: "Jane Roe",
      admit_date: "2024-11-02",
      mobile: "9123456789",
      exp_discharge_date: "2024-11-12",
      ward: "General",
      doctor: "Dr. Green",
      surgeon: "Dr. White",
      anaesthesia_schedule_status: "Pending",
      anaesthesia_schedule_datetime: "2024-11-12 09:30 AM",
      ot_schedule_status: "Not Confirmed",
      surgery_datetime: "2024-11-12 11:00 AM",
    },
  ];
  const menuOptions = [
    {
      label: "Add Notes",
      icon: <DateRangeIcon sx={{ color: "white" }} />,
    },
    {
      label: "Reschedule OT Booking",
      icon: <EditIcon sx={{ color: "white" }} />,
    },
    {
      label: "Cancel OT Schedule",
      icon: <LocalPharmacyIcon sx={{ color: "white" }} />,
    },
    {
      label: "Anaesthesia Schedule",
      icon: <AccessibilityIcon sx={{ color: "white" }} />,
    },
    {
      label: "Reserve bed",
      icon: <BedIcon sx={{ color: "white" }} />,
    },
    {
      label: "Admit Patient",
      icon: <PersonAddIcon sx={{ color: "white" }} />,
    },
    {
      label: "Revisit Patient (Day Surgery)",
      icon: <ReplayIcon sx={{ color: "white" }} />,
    },
    {
      label: "Revisit Patient (Pre-Admission)",
      icon: <ReplayIcon sx={{ color: "white" }} />,
    },
    {
      label: "Cancel Surgery Order",
      icon: <CancelIcon sx={{ color: "white" }} />,
    },
  ];

  const [modalStates, setModalStates] = useState({
    "Add Notes": false,
    "Reschedule OT Booking": false,
    "Cancel OT Schedule": false,
    "Anaesthesia Schedule": false,
    "Reserve bed": false,
    "Admit Patient": false,
    "Revisit Patient (Day Surgery)": false,
    "Revisit Patient (Pre-Admission)": false,
    "Cancel Surgery Order": false,
  });

  const handleOpenModal = (option) => {
    console.log("Option selected:", option.label);
    setModalStates((prevState) => ({
      ...prevState,
      [option.label]: true,
    }));
  };
  return (
    <Box>
      <IPTable
        rows={rows}
        columns={columns}
        menuOptions={menuOptions}
        onOptionSelect={handleOpenModal}
      />
      <AddNotes
        open={modalStates["Add Notes"]}
        onClose={() =>
          setModalStates((prevState) => ({ ...prevState, "Add Notes": false }))
        }
      />
      <OTBooking
        open={modalStates["Reschedule OT Booking"]}
        onClose={() =>
          setModalStates((prevState) => ({
            ...prevState,
            "Reschedule OT Booking": false,
          }))
        }
      />
      <OTCancel
        open={modalStates["Cancel OT Schedule"]}
        onClose={() =>
          setModalStates((prevState) => ({
            ...prevState,
            "Cancel OT Schedule": false,
          }))
        }
      />
      <ReserveBed
        open={modalStates["Reserve bed"]}
        onClose={() =>
          setModalStates((prevState) => ({
            ...prevState,
            "Reserve bed": false,
          }))
        }
      />
      <AnaesthesiaSchedule
        open={modalStates["Anaesthesia Schedule"]}
        onClose={() =>
          setModalStates((prevState) => ({
            ...prevState,
            "Anaesthesia Schedule": false,
          }))
        }
      />
      <CancelSurgery open={modalStates["Cancel Surgery Order"]}
       onClose={() =>
        setModalStates((prevState) => ({
          ...prevState,
          "Cancel Surgery Order": false,
        }))
      }
      />
    </Box>
  );
};

export default BookingListTable;
