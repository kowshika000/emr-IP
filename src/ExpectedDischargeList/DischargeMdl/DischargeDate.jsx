import React, { useState } from "react";
import AdmitWardDetails from "./Details/AdmitWardDetails";
import IPModal from "../../Components/IPModal";
import Input from "../../Components/Input";

const ModalBodyDetails = () => {
  const [formData, setFormData] = useState({
    expDate: "",
    expTime: "",
    remark: "",
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
      <div className="text-header">Change Expected Discharge Date</div>
      {/* <div  style={{display:"flex",flexDirection:"row",gap:"20px"}}> */}
        <AdmitWardDetails />
        <div>
          <div className="text-header">Change Expected Discharge Date</div>
          <div className="form-group">
            <Input
              type="date"
              label="Expected Discharge Date"
              value={formData.expDate}
              name="expDate"
              onChange={handleChange}
            />
            <Input
              type="number"
              label="Expected Discharge Time"
              value={formData.expTime}
              name="expTime"
              onChange={handleChange}
            />
            <Input
              type="taxt"
              label="Remarks"
              value={formData.remark}
              name="remark"
              onChange={handleChange}
            />
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

const DischargeDate = ({ open, onClose }) => {
  return (
    <div>
      <IPModal
        open={open}
        onClose={onClose}
        btnLable={"Change Expected Discharge Date"}
        showDetails={<ModalBodyDetails />}
      />
    </div>
  );
};

export default DischargeDate;
