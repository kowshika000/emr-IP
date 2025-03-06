import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDischargeList } from "../Redux/slice/ExpectedDischarge/dischargeListSlice";
import { Table, Input, Space, Button, Dropdown, Menu } from "antd";
import { SearchOutlined, MoreOutlined } from "@ant-design/icons";
import DischargeDate from "./DischargeMdl/DischargeDate";
import DischargeEntry from "./DischargeMdl/DischargeEntry";
import NursingClearence from "./DischargeMdl/NursingClearence";
import Pharmacy from "./DischargeMdl/Pharmacy";

const DischargeListTable = () => {
  const dispatch = useDispatch();
  const today = new Date().toISOString().split("T")[0];
  useEffect(() => {
    const dischargeDate = today;
    dispatch(fetchDischargeList(dischargeDate));
  }, [dispatch]);

  const [modals, setModals] = useState({
    "Change exp discharge date": false,
    "View/edit discharge details": false,
    "Issue pharmacy": false,
    "Nursing clearance set": false,
  });

  const handleOptionSelect = (option) => {
    setModals((prevState) => ({
      ...prevState,
      [option]: true,
    }));
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
          onPressEnter={() => confirm()}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => confirm()}
            icon={<SearchOutlined />}
          >
            Search
          </Button>
          <Button onClick={() => clearFilters()}>Reset</Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
  });

  const columns = [
    {
      title: "S No",
      dataIndex: "si_no",
      key: "si_no",
      ...getColumnSearchProps("si_no"),
    },
    {
      title: "IP No",
      dataIndex: "ip_no",
      key: "ip_no",
      ...getColumnSearchProps("ip_no"),
    },
    {
      title: "Admit Date",
      dataIndex: "admit_date",
      key: "admit_date",
      ...getColumnSearchProps("admit_date"),
    },
    {
      title: "Exp Discharge Date",
      dataIndex: "exp_discharge_date",
      key: "exp_discharge_date",
      ...getColumnSearchProps("exp_discharge_date"),
    },
    {
      title: "Patient Name",
      dataIndex: "patient_name",
      key: "patient_name",
      ...getColumnSearchProps("patient_name"),
    },
    {
      title: "Room",
      dataIndex: "room",
      key: "room",
      ...getColumnSearchProps("room"),
    },
    {
      title: "Ward",
      dataIndex: "ward",
      key: "ward",
      ...getColumnSearchProps("ward"),
    },
    {
      title: "Doctor",
      dataIndex: "doctor",
      key: "doctor",
      ...getColumnSearchProps("doctor"),
    },
    {
      title: "Options",
      key: "options",
      render: (_, record) => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item
                onClick={() => handleOptionSelect("Change exp discharge date")}
              >
                Change exp discharge date
              </Menu.Item>
              <Menu.Item
                onClick={() =>
                  handleOptionSelect("View/edit discharge details")
                }
              >
                View/edit discharge details
              </Menu.Item>
              <Menu.Item onClick={() => handleOptionSelect("Issue pharmacy")}>
                Issue pharmacy
              </Menu.Item>
              <Menu.Item
                onClick={() => handleOptionSelect("Nursing clearance set")}
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

  return (
    <div>
      <Table
        columns={columns}
        dataSource={rows}
        rowKey="si_no"
        pagination={{ pageSize: 5 }}
        className="table-container"
      />
      <DischargeDate
        open={modals["Change exp discharge date"]}
        onClose={() =>
          setModals({ ...modals, "Change exp discharge date": false })
        }
      />
      <DischargeEntry
        open={modals["View/edit discharge details"]}
        onClose={() =>
          setModals({ ...modals, "View/edit discharge details": false })
        }
      />
      <NursingClearence
        open={modals["Nursing clearance set"]}
        onClose={() => setModals({ ...modals, "Nursing clearance set": false })}
      />
      <Pharmacy
        open={modals["Issue pharmacy"]}
        onClose={() => setModals({ ...modals, "Issue pharmacy": false })}
      />
    </div>
  );
};

export default DischargeListTable;
