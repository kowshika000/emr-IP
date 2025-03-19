import React, { useState } from "react";
import AdmitWardDetails from "./Details/AdmitWardDetails";
import IPModal from "../../Components/IPModal";
import Input from "../../Components/Input";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDischargeDetails } from "../../Redux/slice/ExpectedDischarge/dischargeDetailSlice";
import { fetchChangePreDischargeDate } from "../../Redux/slice/ExpectedDischarge/preDischargeSlice";
import { Button } from "@mui/material";
import dayjs from "dayjs";

const ModalBodyDetails = ({ ipNo }) => {
  const dispatch = useDispatch();
  const { dischargeDetailsData } = useSelector(
    (state) => state.ip.dischargeDetail
  );
  const data = dischargeDetailsData?.data || [];
  const [formData, setFormData] = useState({
    preDischargeDate: "",
    preRemarks: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    dispatch(fetchDischargeDetails(ipNo));
  }, []);
  const handleSubmit = () => {
    const formattedData = {
      ...formData,
      preDischargeDate: dayjs(formData.preDischargeDate).format(
        "YYYY-MM-DD HH:mm:ss"
      ),
    };
    dispatch(fetchChangePreDischargeDate({ id: ipNo, data: formattedData }));
    onClose();
  };
  return (
    <div>
      <div className="text-header">View/Edit Discharge Details</div>
      <AdmitWardDetails data={data} />
      <div className="text-header">Change Expected Discharge Date</div>
      <div className="form-group">
        <Input
          type="datetime-local"
          label="Discharge Date & Time"
          value={formData.preDischargeDate}
          name="preDischargeDate"
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Pre Discharge Remarks"
          value={formData.preRemarks}
          name="preRemarks"
          onChange={handleChange}
        />
      </div>
      <Button onClick={handleSubmit}>Save Pre Discharge Entry</Button>
    </div>
  );
};

const PreDischarge = ({ open, onClose, ipNo }) => {
  return (
    <div>
      <IPModal
        open={open}
        onClose={onClose}
        // btnLable={"Save Pre Discharge Entry"}
        showDetails={<ModalBodyDetails ipNo={ipNo} />}
      ></IPModal>
    </div>
  );
};

export default PreDischarge;
