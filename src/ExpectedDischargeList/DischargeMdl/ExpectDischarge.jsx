import React, { useState } from "react";
import AdmitWardDetails from "./Details/AdmitWardDetails";
import IPModal from "../../Components/IPModal";
import Input from "../../Components/Input";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDischargeDetails } from "../../Redux/slice/ExpectedDischarge/dischargeDetailSlice";
import { fetchChangeExpectedDetails } from "../../Redux/slice/ExpectedDischarge/expDischargeSlice";
import { Button } from "@mui/material";
import dayjs from "dayjs";

const ModalBodyDetails = ({ ipNo,onClose }) => {
  const dispatch = useDispatch();
  const { dischargeDetailsData } = useSelector(
    (state) => state.ip.dischargeDetail
  );
  const data = dischargeDetailsData?.data || [];

  const dischargeDate = data[0]?.dischargeDate;

  const [formData, setFormData] = useState({
    dischargeDate: "",
    remarks: "",
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
      dischargeDate: dayjs(formData.dischargeDate).format(
        "YYYY-MM-DD HH:mm:ss"
      ),
    };
    dispatch(fetchChangeExpectedDetails({ id: ipNo, data: formattedData }));
    onClose();
  };
  return (
    <div>
      <div className="text-header">Change Expected Discharge Date</div>
      {/* <div  style={{display:"flex",flexDirection:"row",gap:"20px"}}> */}
      <AdmitWardDetails data={data} />
      <div>
        <div className="text-header">Change Expected Discharge Date</div>
        <div className="form-group">
          <Input
            type="datetime-local"
            label="Expected Discharge Date & Time"
            value={formData.dischargeDate}
            name="dischargeDate"
            onChange={handleChange}
          />
          <Input
            type="taxt"
            label="remarks"
            value={formData.remarks}
            name="remarks"
            onChange={handleChange}
          />
        </div>
      </div>
      <Button onClick={handleSubmit}>Change Expected Discharge Date</Button>
      {/* </div> */}
    </div>
  );
};

const ExpectDischarge = ({ open, onClose, ipNo }) => {
  return (
    <div>
      <IPModal
        open={open}
        onClose={onClose}
        // btnLable={"Change Expected Discharge Date"}
        showDetails={<ModalBodyDetails ipNo={ipNo} onClose={onClose} />}
      />
    </div>
  );
};

export default ExpectDischarge;
