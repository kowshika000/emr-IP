import React from "react";

const AdmitWardDetails = () => {
  return (
    <div className="modal-container">
      <div className="section form-group-readonly">
        <div className="info-row">
          <strong>IP No:</strong> JZ123
        </div>
        <div className="info-row">
          <strong>Name:</strong> John &nbsp; <strong>Age:</strong> 28
        </div>
        <div className="info-row">
          <strong>Gender:</strong> Male &nbsp; <strong>Nationality:</strong>{" "}
          Canadian
        </div>
      </div>

      <div className="section">
        <h3 className="section-header">Admission Details</h3>
        <div className="form-group-readonly">
          <div className="info-row">
            <strong>Date of Admission:</strong> 20/10/2024 12:48 PM
          </div>
          <div className="info-row">
            <strong>Referred Clinic:</strong> xxx
          </div>
          <div className="info-row">
            <strong>Doctor In Charge:</strong> John
          </div>
        </div>
      </div>

      <div className="section">
        <h3 className="section-header">Ward Details</h3>
        <div className="form-group-readonly">
          <div className="info-row">
            <strong>Ward:</strong> 123 &nbsp; <strong>Bed Number:</strong> Bed
            10
          </div>
          <div className="info-row">
            <strong>Ventilator:</strong> 12 &nbsp; <strong>Room Number:</strong>{" "}
            Room no 2
          </div>
          <div className="info-row">
            <strong>Bed Rate:</strong> 100 AED
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmitWardDetails;
