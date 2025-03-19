import React, { useState } from "react";
import IPModal from "../../Components/IPModal";
import Input from "../../Components/Input";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchPharmacy } from "../../Redux/slice/ExpectedDischarge/pharmacySlice";

const ModalBodyDetails = ({ onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    drugsReturned: "",
    pendingPayments: "",
    insuranceApprovals: "",
    medicinesDispensed: "",
    proceedForClearance: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const option = [{ value: "Yes" }, { value: "No" }];
  const handleSubmit = () => {
    dispatch(fetchPharmacy(formData));
    onClose();
  };
  return (
    <div>
      <div className="text-header">Pharmacy Clearance</div>
      <div className="form-group">
        <Input
          type="select"
          options={option}
          label="Returned unused medicines?"
          value={formData.drugsReturned}
          name="drugsReturned"
          onChange={handleChange}
        />
        <Input
          type="select"
          options={option}
          label="Pending payments?"
          value={formData.pendingPayments}
          name="pendingPayments"
          onChange={handleChange}
        />
        <Input
          type="select"
          options={option}
          label="Done all Insurance Approvals?"
          value={formData.insuranceApprovals}
          name="insuranceApprovals"
          onChange={handleChange}
        />
        <Input
          type="select"
          options={option}
          label="Dispensed all medicines?"
          value={formData.medicinesDispensed}
          name="medicinesDispensed"
          onChange={handleChange}
        />
        <Input
          type="select"
          options={option}
          label="Proceed for clearance?"
          value={formData.proceedForClearance}
          name="proceedForClearance"
          onChange={handleChange}
        />
      </div>
      <Button onClick={handleSubmit}>Issue Pharmacy Clearance</Button>
    </div>
  );
};

const Pharmacy = ({ open, onClose }) => {
  return (
    <div>
      <IPModal
        open={open}
        onClose={onClose}
        // btnLable="Issue Pharmacy Clearance"
        showDetails={<ModalBodyDetails onClose={onClose} />}
      />
    </div>
  );
};

export default Pharmacy;
