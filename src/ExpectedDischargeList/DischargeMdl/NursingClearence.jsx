import React, { useState } from "react";
import IPModal from "../../Components/IPModal";
import Input from "../../Components/Input";
import { Button } from "@mui/material";
import { fetchNurse } from "../../Redux/slice/ExpectedDischarge/nurseSlice";
import { useDispatch } from "react-redux";

const ModalBodyDetails = ({onClose}) => {
  const dispatch = useDispatch()
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
  const option = [{ value: "Yes" }, { value: "No" }];
  const handleSubmit = () => {
    dispatch(fetchNurse(formData));
    onClose()
  };
  return (
    <div>
      <div className="text-header">Nursing Unit Clearance</div>
      <div className="form-group">
        <Input
          type="select"
          options={option}
          label="All unused drugs returned to pharmacy?"
          value={formData.drugsReturned}
          name="drugsReturned"
          onChange={handleChange}
        />
        <Input
          type="select"
          options={option}
          label="All Documentations Cleared?"
          value={formData.documentsCleared}
          name="documentsCleared"
          onChange={handleChange}
        />
        <Input
          type="select"
          options={option}
          label="All unused blood returned?"
          value={formData.bloodReturned}
          name="bloodReturned"
          onChange={handleChange}
        />
        <Input
          type="select"
          options={option}
          label="Patient Education Given?"
          value={formData.patientEducationGiven}
          name="patientEducationGiven"
          onChange={handleChange}
        />
        <Input
          type="select"
          options={option}
          label="Informed followup details to patient?"
          value={formData.followupDetailsInformed}
          name="followupDetailsInformed"
          onChange={handleChange}
        />
        <Input
          type="select"
          options={option}
          label="Patient signature received?"
          value={formData.patientSignatureReceived}
          name="patientSignatureReceived"
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
      <Button onClick={handleSubmit}>Issue Nursing Clearance</Button>
    </div>
  );
};
const NursingClearence = ({ open, onClose }) => {
  return (
    <div>
      <IPModal
        open={open}
        onClose={onClose}
        showDetails={<ModalBodyDetails onClose={onClose} />}
        // btnLable="Issue Nursing Clearance"
      />
    </div>
  );
};

export default NursingClearence;
