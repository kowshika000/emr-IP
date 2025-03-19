import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchSurgeryList } from "../Redux/slice/SurgeryList/surgeryListSlice";
import { fetchSearchSurgeryList } from "../Redux/slice/SurgeryList/searchSurgerySlice";

const BookingListTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const today = new Date().toISOString().split("T")[0];

  const [modalStates, setModalStates] = useState({});
  const [selectedRecord, setSelectedRecord] = useState(null);

  const { searchSurgeryListData } = useSelector(
    (state) => state.ip?.searchSurgery
  );
  const rowDatas = searchSurgeryListData?.data?.content;
  console.log("search data", rowDatas);

  useEffect(() => {
    dispatch(fetchSurgeryList({ surgeryDate: today }));
  }, []);

  const [searchFilters, setSearchFilters] = useState({
    mrdNo: "",
    patientName: "",
    admitDate: "",
    mobile: "",
    surgeryBookedDate: "",
    bookedBy: "",
    approvalStatus: "",
    theater: "",
    surgeon: "",
    anesthesiaStatus: "",
    anesthesiaDate: "",
    otStatus: "",
    surgeryDate: "",
  });
  const handleSearchChange = (e, dataIndex) => {
    const { value } = e.target;
    const updatedFilters = { ...searchFilters, [dataIndex]: value };
    setSearchFilters(updatedFilters);
    // Filter out empty values before dispatching
    const payload = Object.fromEntries(
      Object.entries(updatedFilters).filter(([_, v]) => v.trim() !== "")
    );
    dispatch(fetchSearchSurgeryList(payload));
  };

  const handleMenuClick = (record, { key }) => {
    if (key === "Admit Patient") {
      navigate("/secure/registration", { state: { patientData: record } });
    } else if (key === "Revisit Patient (Day Surgery)") {
      navigate("/secure/registration?tab=revist_registration", {
        state: { patientData: record },
      });
    } else if (key === "Revisit Patient (Pre-Admission)") {
      navigate("/secure/registration?tab=revist_registration", {
        state: { patientData: record },
      });
    } else {
      setModalStates((prevState) => ({ ...prevState, [key]: true }));
      setSelectedRecord(record);
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
      dataIndex: "sNo",
      key: "sNo",
      render: (text, record, index) => index + 1,
    },
    {
      title: "MR No",
      dataIndex: "mrdNo",
      key: "mrdNo",
      filterDropdown: () => (
        <Input
          placeholder="Search"
          value={searchFilters.mrdNo}
          onChange={(e) => handleSearchChange(e, "mrdNo")}
          style={{ display: "block" }}
        />
      ),
      filterIcon: <SearchOutlined />,
    },
    {
      title: "Patient",
      dataIndex: "patientName",
      key: "patientName",
      filterDropdown: () => (
        <Input
          placeholder="Search"
          value={searchFilters.patientName}
          onChange={(e) => handleSearchChange(e, "patientName")}
          style={{ display: "block" }}
        />
      ),
      filterIcon: <SearchOutlined />,
    },
    {
      title: "Admit Date",
      dataIndex: "admitDate",
      key: "admitDate",
      filterDropdown: () => (
        <Input
          placeholder="Search"
          type="date"
          value={searchFilters.admitDate}
          onChange={(e) => handleSearchChange(e, "admitDate")}
          style={{ display: "block" }}
        />
      ),
      filterIcon: <SearchOutlined />,
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
      filterDropdown: () => (
        <Input
          placeholder="Search"
          value={searchFilters.mobile}
          onChange={(e) => handleSearchChange(e, "mobile")}
          style={{ display: "block" }}
        />
      ),
      filterIcon: <SearchOutlined />,
    },
    {
      title: "Surgery Booked Date & By",
      dataIndex: "surgeryBookedDate",
      key: "surgeryBookedDate",
      filterDropdown: () => (
        <Input
          placeholder="Search"
          type="date"
          value={searchFilters.surgeryBookedDate}
          onChange={(e) => handleSearchChange(e, "surgeryBookedDate")}
          style={{ display: "block" }}
        />
      ),
      filterIcon: <SearchOutlined />,
    },
    {
      title: "Approval Status",
      dataIndex: "approvalStatus",
      key: "approvalStatus",
      filterDropdown: () => (
        <Input
          placeholder="Search"
          value={searchFilters.approvalStatus}
          onChange={(e) => handleSearchChange(e, "approvalStatus")}
          style={{ display: "block" }}
        />
      ),
      filterIcon: <SearchOutlined />,
    },
    {
      title: "Theater",
      dataIndex: "theaterName",
      key: "theaterName",
      filterDropdown: () => (
        <Input
          placeholder="Search"
          value={searchFilters.theater}
          onChange={(e) => handleSearchChange(e, "theater")}
          style={{ display: "block" }}
        />
      ),
      filterIcon: <SearchOutlined />,
    },
    {
      title: "Surgeon",
      dataIndex: "surgeon",
      key: "surgeon",
      filterDropdown: () => (
        <Input
          placeholder="Search "
          value={searchFilters.surgeon}
          onChange={(e) => handleSearchChange(e, "surgeon")}
          style={{ display: "block" }}
        />
      ),
      filterIcon: <SearchOutlined />,
    },
    {
      title: "Anaesthesia Schedule Status",
      dataIndex: "anesthesiaStatus",
      key: "anesthesiaStatus",
      filterDropdown: () => (
        <Input
          placeholder="Search"
          value={searchFilters.anesthesiaStatus}
          onChange={(e) => handleSearchChange(e, "anesthesiaStatus")}
          style={{ display: "block" }}
        />
      ),
      filterIcon: <SearchOutlined />,
    },
    {
      title: "Anaesthesia Schedule Date & Time",
      dataIndex: "anesthesiaDate",
      key: "anesthesiaDate",
      filterDropdown: () => (
        <Input
          placeholder="Search"
          type="date"
          value={searchFilters.anesthesiaDate}
          onChange={(e) => handleSearchChange(e, "anesthesiaDate")}
          style={{ display: "block" }}
        />
      ),
      filterIcon: <SearchOutlined />,
    },
    {
      title: "OT Schedule Status",
      dataIndex: "otStatus",
      key: "otStatus",
      filterDropdown: () => (
        <Input
          placeholder="Search"
          value={searchFilters.otStatus}
          onChange={(e) => handleSearchChange(e, "otStatus")}
          style={{ display: "block" }}
        />
      ),
      filterIcon: <SearchOutlined />,
    },
    {
      title: "Surgery Date & Time",
      dataIndex: "surgeryDate",
      key: "surgeryDate",
      filterDropdown: () => (
        <Input
          placeholder="Search"
          type="date"
          value={searchFilters.surgeryDate}
          onChange={(e) => handleSearchChange(e, "surgeryDate")}
          style={{ display: "block" }}
        />
      ),
      filterIcon: <SearchOutlined />,
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

  return (
    <>
      <Table
        columns={columns}
        dataSource={rowDatas}
        rowKey="sNo"
        pagination={{ pageSize: 5 }}
        className="table-container"
      />
      {modalStates["Add Notes"] && selectedRecord && (
        <AddNotes
          open={modalStates["Add Notes"]}
          onClose={() => setModalStates({ "Add Notes": false })}
          patientId={selectedRecord.patientId}
          surgeryId={selectedRecord.surgeryId}
        />
      )}

      {modalStates["Reschedule OT Booking"] && selectedRecord && (
        <OTBooking
          open={modalStates["Reschedule OT Booking"]}
          onClose={() => setModalStates({ "Reschedule OT Booking": false })}
          surgeryId={selectedRecord.surgeryId}
        />
      )}
      {modalStates["Cancel OT Schedule"] && (
        <OTCancel
          open={modalStates["Cancel OT Schedule"]}
          onClose={() => setModalStates({ "Cancel OT Schedule": false })}
        />
      )}
      {modalStates["Anaesthesia Schedule"] && (
        <AnaesthesiaSchedule
          open={modalStates["Anaesthesia Schedule"]}
          onClose={() => setModalStates({ "Anaesthesia Schedule": false })}
        />
      )}
      {modalStates["Reserve bed"] && (
        <ReserveBed
          open={modalStates["Reserve bed"]}
          onClose={() => setModalStates({ "Reserve bed": false })}
        />
      )}
      {modalStates["Cancel Surgery Order"] && (
        <CancelSurgery
          open={modalStates["Cancel Surgery Order"]}
          onClose={() => setModalStates({ "Cancel Surgery Order": false })}
          surgeryId={selectedRecord.surgeryId}
        />
      )}
    </>
  );
};

export default BookingListTable;
