import React, { useEffect, useState } from "react";
import { Tabs, Card, Typography, Row, Col, Divider } from "antd";
import {
  UserOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  HomeOutlined,
  TeamOutlined,
  MedicineBoxOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { fetchwhiteboard } from "../Redux/slice/whiteboard/whiteboardList";

const { TabPane } = Tabs;

function PatientInfo({ data }) {
  return (
    <Card
      style={{
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
        marginBottom: "16px",
        // backgroundColor: "rgb(189, 204, 204)",
      }}
    >
      <Typography.Title level={5} style={{ color: "#2b9aca" }}>
        <UserOutlined style={{ marginRight: 8 }} />
        {data.name}
      </Typography.Title>
      <Row gutter={16}>
        <Col span={12}>
          <Typography.Text>
            <CalendarOutlined /> {data.gender}, {data.dob}
          </Typography.Text>
          <br />
          <Typography.Text>
            <ClockCircleOutlined /> {data.age}, {data.nationality}
          </Typography.Text>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Typography.Text strong>Admitted On</Typography.Text>
          <br />
          <Typography.Text>{data.admittedOn}</Typography.Text>
          <br />
          <Typography.Text strong>Expected Discharge</Typography.Text>
          <br />
          <Typography.Text>{data.expDischarge}</Typography.Text>
        </Col>
      </Row>
      <Divider />
      <Row justify="space-between">
        <Typography.Text style={{ color: "#388e3c", cursor: "pointer" }}>
          Vital
        </Typography.Text>
        <Typography.Text style={{ color: "#1976d2", cursor: "pointer" }}>
          Prog Notes
        </Typography.Text>
        <Typography.Text style={{ color: "#d32f2f", cursor: "pointer" }}>
          Lab
        </Typography.Text>
        <Typography.Text style={{ color: "#0288d1", cursor: "pointer" }}>
          View EMAR
        </Typography.Text>
        <Typography.Text style={{ color: "#43a047", cursor: "pointer" }}>
          Medicine Schedule
        </Typography.Text>
        <Typography.Text>
          <HomeOutlined style={{ color: "Highlight", marginRight: 8 }} /> Ward:{" "}
          {data.ward}
        </Typography.Text>
      </Row>
    </Card>
  );
}

function PatientTabs() {
  const dispatch = useDispatch();

  const [activeKey, setActiveKey] = useState("1");

  const allPatients = [
    {
      name: "Matthew",
      gender: "Male",
      dob: "23-09-2001",
      age: "22 Yrs",
      nationality: "Saudi",
      admittedOn: "29-07-2024 01:20 PM",
      expDischarge: "05-08-2024 01:27 AM",
      ward: "ER Room",
    },
    {
      name: "Sarah",
      gender: "Female",
      dob: "12-03-1998",
      age: "26 Yrs",
      nationality: "American",
      admittedOn: "28-07-2024 10:30 AM",
      expDischarge: "06-08-2024 11:00 AM",
      ward: "ICU Room 3",
    },
    {
      name: "Ali",
      gender: "Male",
      dob: "05-06-1995",
      age: "29 Yrs",
      nationality: "Egyptian",
      admittedOn: "25-07-2024 03:15 PM",
      expDischarge: "03-08-2024 02:20 PM",
      ward: "General Ward 1",
    },
    {
      name: "Nora",
      gender: "Female",
      dob: "17-01-2000",
      age: "24 Yrs",
      nationality: "Canadian",
      admittedOn: "30-07-2024 09:00 AM",
      expDischarge: "07-08-2024 05:45 PM",
      ward: "ER Room",
    },
  ];
  useEffect(() => {
    dispatch(fetchwhiteboard());
  }, [dispatch]);
  return (
    <Tabs activeKey={activeKey} onChange={setActiveKey} centered type="card">
      <TabPane
        tab={
          <>
            <TeamOutlined /> All Patients
          </>
        }
        key="1"
      >
        <Row gutter={[16, 16]}>
          {allPatients.map((patient, index) => (
            <Col xs={24} sm={12} key={index}>
              <PatientInfo data={patient} />
            </Col>
          ))}
        </Row>
      </TabPane>
      <TabPane
        tab={
          <>
            <MedicineBoxOutlined /> Admitted Patients
          </>
        }
        key="2"
      >
        <Row gutter={[16, 16]}>
          {allPatients.slice(0, 2).map((patient, index) => (
            <Col xs={24} sm={12} key={index}>
              <PatientInfo data={patient} />
            </Col>
          ))}
        </Row>
      </TabPane>
      <TabPane
        tab={
          <>
            <LogoutOutlined /> Pre Discharged Patients
          </>
        }
        key="3"
      >
        <Row gutter={[16, 16]}>
          {allPatients.slice(2, 4).map((patient, index) => (
            <Col xs={24} sm={12} key={index}>
              <PatientInfo data={patient} />
            </Col>
          ))}
        </Row>
      </TabPane>
    </Tabs>
  );
}

export default PatientTabs;
