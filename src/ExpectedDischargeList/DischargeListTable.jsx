import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDischargeList } from "../Redux/slice/ExpectedDischarge/dischargeListSlice";
import { Table, Input, Button, Dropdown, Menu } from "antd";
import { SearchOutlined, MoreOutlined } from "@ant-design/icons";
import NursingClearence from "./DischargeMdl/NursingClearence";
import Pharmacy from "./DischargeMdl/Pharmacy";
import { fetchSearchDischargeList } from "../Redux/slice/ExpectedDischarge/searchListSlice";
import ExpectDischarge from "./DischargeMdl/ExpectDischarge";
import PreDischarge from "./DischargeMdl/PreDischarge";

const DischargeListTable = () => {
  const dispatch = useDispatch();
  const today = new Date().toISOString().split("T")[0];

  const { dischargeListData } = useSelector(
    (state) => state?.ip?.dischargeList
  );

  const row = dischargeListData?.data?.content;

  useEffect(() => {
    dispatch(fetchDischargeList({ dischargeDate: today }));
  }, [dispatch]);

  const [modals, setModals] = useState({
    type: "",
    open: false,
    ipNo: null,
  });

  const [searchFilters, setSearchFilters] = useState({
    ipNo: "",
    admitDate: "",
    expDischargeDate: "",
    patientName: "",
    room: "",
    ward: "",
    doctor: "",
  });

  const handleOptionSelect = (option, record) => {
    setModals({
      type: option,
      open: true,
      ipNo: record.ipNo,
    });
  };

  const handleClose = () => {
    setModals({ type: "", open: false, ipNo: null });
  };

  const handleSearchChange = (e, dataIndex) => {
    const { value } = e.target;
    const updatedFilters = { ...searchFilters, [dataIndex]: value };
    setSearchFilters(updatedFilters);
    const payload = Object.fromEntries(
      Object.entries(updatedFilters).filter(([_, v]) => v.trim() !== "")
    );
    dispatch(fetchSearchDischargeList(payload));
  };

  const columns = [
    {
      title: "S No",
      dataIndex: "sNo",
      key: "sNo",
      render: (text, record, index) => index + 1,
    },
    {
      title: "IP No",
      dataIndex: "ipNo",
      key: "ipNo",
      filterDropdown: () => (
        <Input
          placeholder="Search IP No"
          value={searchFilters.ipNo}
          onChange={(e) => handleSearchChange(e, "ipNo")}
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
          placeholder="Search Admit Date"
          type="date"
          value={searchFilters.admitDate}
          onChange={(e) => handleSearchChange(e, "admitDate")}
          style={{ display: "block" }}
        />
      ),
      filterIcon: <SearchOutlined />,
    },
    {
      title: "Exp Discharge Date",
      dataIndex: "dischargeDate",
      key: "dischargeDate",
      filterDropdown: () => (
        <Input
          placeholder="Search Exp Discharge Date"
          type="date"
          value={searchFilters.expDischargeDate}
          onChange={(e) => handleSearchChange(e, "expDischargeDate")}
          style={{ display: "block" }}
        />
      ),
      filterIcon: <SearchOutlined />,
    },
    {
      title: "Patient Name",
      dataIndex: "patientName",
      key: "patientName",
      filterDropdown: () => (
        <Input
          placeholder="Search Patient Name"
          value={searchFilters.patientName}
          onChange={(e) => handleSearchChange(e, "patientName")}
          style={{ display: "block" }}
        />
      ),
      filterIcon: <SearchOutlined />,
    },
    {
      title: "Room",
      dataIndex: "roomNoname",
      key: "roomNoname",
      filterDropdown: () => (
        <Input
          placeholder="Search Room"
          value={searchFilters.room}
          onChange={(e) => handleSearchChange(e, "room")}
          style={{ display: "block" }}
        />
      ),
      filterIcon: <SearchOutlined />,
    },
    {
      title: "Ward",
      dataIndex: "wardName",
      key: "wardName",
      filterDropdown: () => (
        <Input
          placeholder="Search Ward"
          value={searchFilters.ward}
          onChange={(e) => handleSearchChange(e, "ward")}
          style={{ display: "block" }}
        />
      ),
      filterIcon: <SearchOutlined />,
    },
    {
      title: "Doctor",
      dataIndex: "doctorName",
      key: "doctorName",
      filterDropdown: () => (
        <Input
          placeholder="Search Doctor"
          value={searchFilters.doctor}
          onChange={(e) => handleSearchChange(e, "doctor")}
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
            <Menu>
              <Menu.Item
                onClick={() =>
                  handleOptionSelect("Change exp discharge date", record)
                }
              >
                Change exp discharge date
              </Menu.Item>
              <Menu.Item
                onClick={() =>
                  handleOptionSelect("View/edit discharge details", record)
                }
              >
                View/edit discharge details
              </Menu.Item>
              <Menu.Item
                onClick={() => handleOptionSelect("Issue pharmacy", record)}
              >
                Issue pharmacy
              </Menu.Item>
              <Menu.Item
                onClick={() =>
                  handleOptionSelect("Nursing clearance set", record)
                }
              >
                Nursing clearance set
              </Menu.Item>
            </Menu>
          }
        >
          <Button icon={<MoreOutlined />} />
        </Dropdown>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={row}
        rowKey="sNo"
        pagination={{ pageSize: 5 }}
        className="table-container"
      />
      <ExpectDischarge
        open={modals.type === "Change exp discharge date" && modals.open}
        ipNo={modals.ipNo}
        onClose={handleClose}
      />
      <PreDischarge
        open={modals.type === "View/edit discharge details" && modals.open}
        ipNo={modals.ipNo}
        onClose={handleClose}
      />
      <NursingClearence
        open={modals.type === "Nursing clearance set" && modals.open}
        ipNo={modals.ipNo}
        onClose={handleClose}
      />
      <Pharmacy
        open={modals.type === "Issue pharmacy" && modals.open}
        ipNo={modals.ipNo}
        onClose={handleClose}
      />
    </div>
  );
};

export default DischargeListTable;
