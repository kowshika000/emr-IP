import React, { useState } from "react";
import IPModal from "../../Components/IPModal";
import Input from "../../Components/Input";

const ModalBodyDetails = () => {
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

  return (
    <div>
      <div className="text-header">Pharmacy Clearance</div>
      <div className="form-group">
        <Input
          type="text"
          label="Returned unused medicines?"
          value={formData.drugsReturned}
          name="drugsReturned"
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Pending payments?"
          value={formData.pendingPayments}
          name="pendingPayments"
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Done all Insurance Approvals?"
          value={formData.insuranceApprovals}
          name="insuranceApprovals"
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Dispensed all medicines?"
          value={formData.medicinesDispensed}
          name="medicinesDispensed"
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Proceed for clearance?"
          value={formData.proceedForClearance}
          name="proceedForClearance"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

const Pharmacy = ({open, onClose}) => {
  return (
    <div>
      <IPModal
        open={open}
        onClose={onClose}
        btnLable="Issue Pharmacy Clearance"
        showDetails={<ModalBodyDetails />}
      />
    </div>
  );
};

export default Pharmacy;
