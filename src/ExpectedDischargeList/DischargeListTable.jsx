import { useState } from "react";
import { Box } from "@mui/material";
import React from "react";
import IPTable from "../Components/IPTable";
import DischargeDate from "./DischargeMdl/DischargeDate";
import DateRangeIcon from "@mui/icons-material/DateRange";
import EditIcon from "@mui/icons-material/Edit";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import DischargeEntry from "./DischargeMdl/DischargeEntry";
import NursingClearence from "./DischargeMdl/NursingClearence";
import Pharmacy from "./DischargeMdl/Pharmacy";

const DischargeListTable = () => {
  const columns = [
    { id: "si_no", label: "S No" },
    { id: "ip_no", label: "IP No" },
    { id: "admit_date", label: "Admit Date" },
    { id: "exp_discharge_date", label: "Exp Discharge Date" },
    { id: "patient_name", label: "Patient Name" },
    { id: "room", label: "Room" },
    { id: "ward", label: "Ward" },
    { id: "doctor", label: "Doctor" },
    { id: "actions", label: "Options" },
  ];

  const rows = [
    {
      si_no: 1,
      ip_no: "IP001",
      admit_date: "2024-01-01",
      exp_discharge_date: "2024-01-10",
      patient_name: "John Doe",
      room: "101",
      ward: "Cardiology",
      doctor: "Dr. Smith",
    },
    {
      si_no: 2,
      ip_no: "IP002",
      admit_date: "2024-02-05",
      exp_discharge_date: "2024-02-15",
      patient_name: "Jane Smith",
      room: "102",
      ward: "Neurology",
      doctor: "Dr. Brown",
    },
    {
      si_no: 3,
      ip_no: "IP003",
      admit_date: "2024-03-10",
      exp_discharge_date: "2024-03-20",
      patient_name: "Mike Johnson",
      room: "103",
      ward: "Orthopedics",
      doctor: "Dr. Taylor",
    },
    {
      si_no: 4,
      ip_no: "IP004",
      admit_date: "2024-04-12",
      exp_discharge_date: "2024-04-22",
      patient_name: "Emily Davis",
      room: "104",
      ward: "Pediatrics",
      doctor: "Dr. Wilson",
    },
    {
      si_no: 5,
      ip_no: "IP005",
      admit_date: "2024-05-20",
      exp_discharge_date: "2024-05-30",
      patient_name: "Chris Lee",
      room: "105",
      ward: "Oncology",
      doctor: "Dr. Martinez",
    },
  ];

  const [modals, setModals] = useState({
    "Change exp discharge date": false,
    "View/edit discharge details": false,
    "Issue pharmacy": false,
    "Nursing clearance set": false,
  });

  const handleOptionSelect = (option) => {
    setModals((prevState) => ({
      ...prevState,
      [option.label]: true,
    }));
  };

  const menuOptions = [
    {
      label: "Change exp discharge date",
      icon: <DateRangeIcon sx={{ color: "white" }} />,
    },
    {
      label: "View/edit discharge details",
      icon: <EditIcon sx={{ color: "white" }} />,
    },
    {
      label: "Issue pharmacy",
      icon: <LocalPharmacyIcon sx={{ color: "white" }} />,
    },
    {
      label: "Nursing clearance set",
      icon: <AccessibilityIcon sx={{ color: "white" }} />,
    },
  ];

  return (
    <Box>
      <IPTable
        columns={columns}
        rows={rows}
        menuOptions={menuOptions}
        onOptionSelect={handleOptionSelect}
      />
      <DischargeDate
        open={modals["Change exp discharge date"]}
        onClose={() =>
          setModals((prevState) => ({
            ...prevState,
            "Change exp discharge date": false,
          }))
        }
      />
      <DischargeEntry
        open={modals["View/edit discharge details"]}
        onClose={() =>
          setModals((prevState) => ({
            ...prevState,
            "View/edit discharge details": false,
          }))
        }
      />
      <NursingClearence
        open={modals["Nursing clearance set"]}
        onClose={() =>
          setModals((prevState) => ({
            ...prevState,
            "Nursing clearance set": false,
          }))
        }
      />
      <Pharmacy
        open={modals["Issue pharmacy"]}
        onClose={() =>
          setModals((prevState) => ({
            ...prevState,
            "Issue pharmacy": false,
          }))
        }
      />
    </Box>
  );
};

export default DischargeListTable;
