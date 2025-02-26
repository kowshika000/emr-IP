import React, { useState } from "react";
import { Tabs } from "antd";
import DischargeList from "../ExpectedDischargeList/DischargeList";
import BookingList from "../SurgeryBookingsList/BookingList";
import WhiteBoard from "../WhiteBoard/WhiteBoard";

const { TabPane } = Tabs;

const Header = () => {
  const [activeTab, setActiveTab] = useState("dischargeList");

  return (
    <div
      className="p-3"
      style={{ width: "100%", height: "100%", overflow: "auto" }}
    >
      <div>
        <Tabs
          activeKey={activeTab}
          onChange={(key) => setActiveTab(key)}
          type="card"
        >
          <TabPane tab="Expected Discharge List" key="dischargeList" />
          <TabPane tab="Surgery Bookings List" key="bookingList" />
          <TabPane tab="Whiteboard" key="whiteBoard" />
        </Tabs>
      </div>

      <div className="mt-2">
        {activeTab === "dischargeList" && <DischargeList />}
        {activeTab === "bookingList" && <BookingList />}
        {activeTab === "whiteBoard" && <WhiteBoard />}
      </div>
    </div>
  );
};

export default Header;
