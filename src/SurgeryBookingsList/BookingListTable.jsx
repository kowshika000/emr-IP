import React, { useState } from "react";
import { Table, Input, Space, Dropdown, Menu, Button } from "antd";
import { SearchOutlined, MoreOutlined } from "@ant-design/icons";
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
import { useNavigate } from "react-router-dom";

const BookingListTable = () => {
  const navigate = useNavigate();

  const [modalStates, setModalStates] = useState({});
  const [searchText, setSearchText] = useState("");

  const handleSearch = (selectedKeys, confirm) => {
    confirm();
    setSearchText(selectedKeys[0]);
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm)}
          style={{ marginBottom: 8, display: "block" }}
        />
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
  });

  const handleMenuClick = (record, { key }) => {
    if (key === "Admit Patient") {
      navigate("/secure/registration", { state: { patientData: record } });
    } else if (key === "Revisit Patient (Day Surgery)") {
      navigate("/secure/registration?tab=revist_registration", { state: { patientData: record } });
    } else if (key === "Revisit Patient (Pre-Admission)") {
      navigate("/secure/registration?tab=revist_registration", { state: { patientData: record } });
    } else {
      setModalStates((prevState) => ({ ...prevState, [key]: true }));
    }
  };

  const menuOptions = [
    { label: "Add Notes", icon: <DateRangeIcon />, key: "Add Notes" },
    {
      label: "Reschedule OT Booking",
      icon: <EditIcon />,
      key: "Reschedule OT Booking",
    },
    {
      label: "Cancel OT Schedule",
      icon: <LocalPharmacyIcon />,
      key: "Cancel OT Schedule",
    },
    {
      label: "Anaesthesia Schedule",
      icon: <AccessibilityIcon />,
      key: "Anaesthesia Schedule",
    },
    { label: "Reserve bed", icon: <BedIcon />, key: "Reserve bed" },
    { label: "Admit Patient", icon: <PersonAddIcon />, key: "Admit Patient" },
    {
      label: "Revisit Patient (Day Surgery)",
      icon: <ReplayIcon />,
      key: "Revisit Patient (Day Surgery)",
    },
    {
      label: "Revisit Patient (Pre-Admission)",
      icon: <ReplayIcon />,
      key: "Revisit Patient (Pre-Admission)",
    },
    {
      label: "Cancel Surgery Order",
      icon: <CancelIcon />,
      key: "Cancel Surgery Order",
    },
  ];

  const columns = [
    {
      title: "S No",
      dataIndex: "si_no",
      key: "si_no",
      ...getColumnSearchProps("si_no"),
    },
    {
      title: "MR No",
      dataIndex: "mr_no",
      key: "mr_no",
      ...getColumnSearchProps("mr_no"),
    },
    {
      title: "Patient",
      dataIndex: "patient",
      key: "patient",
      ...getColumnSearchProps("patient"),
    },
    {
      title: "Admit Date",
      dataIndex: "admit_date",
      key: "admit_date",
      ...getColumnSearchProps("admit_date"),
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
      ...getColumnSearchProps("mobile"),
    },
    {
      title: "Surgery Booked Date & By",
      dataIndex: "exp_discharge_date",
      key: "exp_discharge_date",
      ...getColumnSearchProps("exp_discharge_date"),
    },
    {
      title: "Approval Status",
      dataIndex: "ward",
      key: "ward",
      ...getColumnSearchProps("ward"),
    },
    {
      title: "Theater",
      dataIndex: "doctor",
      key: "doctor",
      ...getColumnSearchProps("doctor"),
    },
    {
      title: "Surgeon",
      dataIndex: "surgeon",
      key: "surgeon",
      ...getColumnSearchProps("surgeon"),
    },
    {
      title: "Anaesthesia Schedule Status",
      dataIndex: "anaesthesia_schedule_status",
      key: "anaesthesia_schedule_status",
      ...getColumnSearchProps("anaesthesia_schedule_status"),
    },
    {
      title: "Anaesthesia Schedule Date & Time",
      dataIndex: "anaesthesia_schedule_datetime",
      key: "anaesthesia_schedule_datetime",
      ...getColumnSearchProps("anaesthesia_schedule_datetime"),
    },
    {
      title: "OT Schedule Status",
      dataIndex: "ot_schedule_status",
      key: "ot_schedule_status",
      ...getColumnSearchProps("ot_schedule_status"),
    },
    {
      title: "Surgery Date & Time",
      dataIndex: "surgery_datetime",
      key: "surgery_datetime",
      ...getColumnSearchProps("surgery_datetime"),
    },
    {
      title: "Options",
      key: "options",
      render: (text, record) => (
        <Dropdown
          overlay={
            <Menu
              onClick={(e) => handleMenuClick(record, e)}
              items={menuOptions}
            />
          }
        >
          <Button icon={<MoreOutlined />} />
        </Dropdown>
      ),
    },
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
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={rows}
        rowKey="si_no"
        pagination={{ pageSize: 5 }}
        className="table-container"
      />
      {menuOptions.map(({ key }) => {
        const Component = {
          "Add Notes": AddNotes,
          "Reschedule OT Booking": OTBooking,
          "Cancel OT Schedule": OTCancel,
          "Anaesthesia Schedule": AnaesthesiaSchedule,
          "Reserve bed": ReserveBed,
          "Cancel Surgery Order": CancelSurgery,
        }[key];
        return Component ? (
          <Component
            key={key}
            open={modalStates[key]}
            onClose={() => setModalStates({ [key]: false })}
          />
        ) : null;
      })}
    </>
  );
};

export default BookingListTable;
