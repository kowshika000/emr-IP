import React, { useState } from "react";
import AdmitWardDetails from "./Details/AdmitWardDetails";
import IPModal from "../../Components/IPModal";
import Input from "../../Components/Input";

const ModalBodyDetails = () => {
  const [formData, setFormData] = useState({
    dischargeDate: "",
    dischargeTime: "",
    preDischargeRemark: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <div className="text-header">View/Edit Discharge Details</div>
      <AdmitWardDetails />
      <div className="text-header">Change Expected Discharge Date</div>
      <div className="form-group">
        <Input
          type="date"
          label="Discharge Date"
          value={formData.dischargeDate}
          name="dischargeDate"
          onChange={handleChange}
        />
        <Input
          type="number"
          label="Discharge Time"
          value={formData.dischargeTime}
          name="dischargeTime"
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Pre Discharge Remarks"
          value={formData.preDischargeRemark}
          name="preDischargeRemark"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

const DischargeEntry = ({ open, onClose }) => {
  return (
    <div>
      <IPModal
        open={open}
        onClose={onClose}
        btnLable={"Save Pre Discharge Entry"}
        showDetails={<ModalBodyDetails />}
      ></IPModal>
    </div>
  );
};

export default DischargeEntry;
