import React, { useState } from "react";
import IPModal from "../../Components/IPModal";
import { useDispatch } from "react-redux";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { fetchCancelOrder } from "../../Redux/slice/SurgeryList/cancelOrderSlice";

const ModalBodyDetails = ({surgeryId, onClose}) => {
  const dispatch = useDispatch();
  const [reason, setreason] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "reason") {
      setreason(value);
    }
  };
  const handleClick = () => {
    dispatch(fetchCancelOrder({ id: surgeryId, reason }));
    onClose();
  };

  return (
    <div className="cancelMdl">
      <div className="text-header">Cancel Surgery Order</div>
      <div className="form-group">
        <Input
          label={"Reason"}
          type={"textarea"}
          value={reason}
          onChange={handleChange}
          name="reason"
        />
      </div>
      <Button btnName="Cancel" direction={"end"} onClick={handleClick} />
    </div>
  );
};

const CancelSurgery = ({ open, onClose, surgeryId }) => {
  return (
    <div>
      <IPModal
        open={open}
        onClose={onClose}
        showDetails={
          <ModalBodyDetails surgeryId={surgeryId} onClose={onClose} />
        }
      />
    </div>
  );
};

export default CancelSurgery;
