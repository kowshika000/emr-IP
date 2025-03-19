import React from "react";

const AdmitWardDetails = ({ data }) => {
  const ipNo = data[0]?.ipNo;
  const admitDate = data[0]?.admitDate;
  const gender = data[0]?.gender;
  const nationality = data[0]?.nationality;
  const patientName = data[0]?.patientName;
  const roomNo = data[0]?.roomNo;
  const ward = data[0]?.ward;
  return (
    <div className="modal-container">
      <div className="section form-group-readonly">
        <div className="info-row">
          <strong>IP No:</strong> {ipNo}
        </div>
        <div className="info-row">
          <strong>Name:</strong>
          {patientName} &nbsp; <strong>Age:</strong> --
        </div>
        <div className="info-row">
          <strong>Gender:</strong> {gender} &nbsp; <strong>Nationality:</strong>
          {nationality}
        </div>
      </div>

      <div className="section">
        <h3 className="section-header">Admission Details</h3>
        <div className="form-group-readonly">
          <div className="info-row">
            <strong>Date of Admission:</strong> {admitDate}
          </div>
          <div className="info-row">
            <strong>Referred Clinic:</strong> ---
          </div>
          <div className="info-row">
            <strong>Doctor In Charge:</strong> ---
          </div>
        </div>
      </div>

      <div className="section">
        <h3 className="section-header">Ward Details</h3>
        <div className="form-group-readonly">
          <div className="info-row">
            <strong>Ward:</strong> {ward} &nbsp; <strong>Bed Number:</strong>{" "}
            ---
          </div>
          <div className="info-row">
            <strong>Ventilator:</strong> --- &nbsp;{" "}
            <strong>Room Number:</strong>
            {roomNo}
          </div>
          <div className="info-row">
            <strong>Bed Rate:</strong> ---
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmitWardDetails;
