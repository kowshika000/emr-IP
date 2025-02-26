import React, { useState } from "react";
import IPModal from "../../Components/IPModal";
import Input from "../../Components/Input";

const ModalBodyDetails = () => {
  const [formData, setFormData] = useState({
    drugsReturned: "",
    documentsCleared: "",
    bloodReturned: "",
    patientEducationGiven: "",
    followupDetailsInformed: "",
    patientSignatureReceived: "",
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
      <div className="text-header">Nursing Unit Clearance</div>
      <div className="form-group">
        <Input
          type="text"
          label="All unused drugs returned to pharmacy?"
          value={formData.drugsReturned}
          name="drugsReturned"
          onChange={handleChange}
        />
        <Input
          type="text"
          label="All Documentations Cleared?"
          value={formData.documentsCleared}
          name="documentsCleared"
          onChange={handleChange}
        />
        <Input
          type="text"
          label="All unused blood returned?"
          value={formData.bloodReturned}
          name="bloodReturned"
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Patient Education Given?"
          value={formData.patientEducationGiven}
          name="patientEducationGiven"
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Informed followup details to patient?"
          value={formData.followupDetailsInformed}
          name="followupDetailsInformed"
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Patient signature received?"
          value={formData.patientSignatureReceived}
          name="patientSignatureReceived"
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
const NursingClearence = ({ open, onClose }) => {
  return (
    <div>
      <IPModal
        open={open}
        onClose={onClose}
        showDetails={<ModalBodyDetails />}
        btnLable="Issue Nursing Clearance"
      />
    </div>
  );
};

export default NursingClearence;
