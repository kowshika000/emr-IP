import React, { useState } from "react";
import IPModal from "../../Components/IPModal";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const ModalBodyDetails = () => {
  const [cancelOt, setCancelOt] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "cancelOt") {
      setCancelOt(value);
    }
  };

  return (
    <div className="cancelMdl">
      <div className="text-header">Cancel OT</div>
      <div className="form-group">
        <Input
          label={"Reason"}
          type={"textarea"}
          value={cancelOt}
          onChange={handleChange}
          name="cancelOt"
        />
      </div>
      <Button btnName={"Cancel"} direction={"end"} />
    </div>
  );
};

const OTCancel = ({ open, onClose }) => {
  return (
    <div>
      <IPModal
        open={open}
        onClose={onClose}
        showDetails={<ModalBodyDetails />}
      />
    </div>
  );
};

export default OTCancel;
