import React, { useState, useEffect } from "react";
import { Table, Button as AntdButton } from "antd";
import { Dialog, DialogContent } from "@mui/material";
import IPModal from "../../Components/IPModal";
import Input from "../../Components/Input";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddNote } from "../../Redux/slice/SurgeryList/addNoteSlice";
import { fetchGetNote } from "../../Redux/slice/SurgeryList/getNoteSlice";
import { fetchDeleteNote } from "../../Redux/slice/SurgeryList/deleteNoteSlice";

const ModalBodyDetails = ({ surgeryId }) => {
  const [showAddMdl, setShowAddMdl] = useState(false);

  const [formData, setFormData] = useState({
    callStatus: "",
    remarks: "",
    surgeryId: surgeryId,
  });

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state?.ip?.getNote);

  useEffect(() => {
    if (surgeryId) {
      dispatch(fetchGetNote(surgeryId));
    }
  }, [surgeryId, dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAddNote(formData)).then(() => {
      dispatch(fetchGetNote(surgeryId));
    });
    setShowAddMdl(false);
  };

  const columns = [
    {
      title: "SI No",
      dataIndex: "sNo",
      key: "sNo",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Call Status",
      dataIndex: "call_status",
      key: "call_status",
    },
    {
      title: "Remarks",
      dataIndex: "remarks",
      key: "remarks",
    },
    {
      title: "Entered By",
      dataIndex: "entered_by",
      key: "entered_by",
    },
    {
      title: "Entered Date",
      dataIndex: "entered_date",
      key: "entered_date",
    },
    {
      title: "Options",
      key: "options",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <AntdButton
            type="primary"
            onClick={() => handleEdit(record)}
            size="small"
          >
            Edit
          </AntdButton>
          <AntdButton
            type="default"
            danger
            onClick={() => handleDelete(record)}
            size="small"
          >
            Delete
          </AntdButton>
        </div>
      ),
    },
  ];

  const rowData = Array.isArray(data) ? data : [];

  const handleEdit = (record) => {
    console.log("Edit record:", record);
  };

  const handleDelete = (record) => {
    dispatch(fetchDeleteNote(record?.id)).then(() => {
      dispatch(fetchGetNote(surgeryId));
    });
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="text-header">Surgery Booking Status & Notes</div>
        <AntdButton type="primary" onClick={() => setShowAddMdl(true)}>
          Add
        </AntdButton>
      </div>

      <Table
        className="table-container"
        dataSource={rowData}
        columns={columns}
        rowKey="sNo"
        style={{ marginTop: "25px", marginBottom: "20px" }}
        pagination={false}
      />

      {/* MUI Dialog */}
      <Dialog
        open={showAddMdl}
        onClose={() => setShowAddMdl(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <div className="text-header mb-4">Add Booking Status & Note</div>

            <Input
              type="text"
              label="Call Status"
              name="callStatus"
              value={formData.callStatus}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              label="Remarks"
              name="remarks"
              value={formData.remarks}
              onChange={handleInputChange}
            />
            <div style={{ marginTop: "16px", textAlign: "right" }}>
              <AntdButton type="primary" htmlType="submit">
                Submit
              </AntdButton>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const AddNotes = ({ open, onClose, patientId, surgeryId }) => {
  return (
    <IPModal
      open={open}
      onClose={onClose}
      showDetails={
        <ModalBodyDetails patientId={patientId} surgeryId={surgeryId} />
      }
    />
  );
};

export default AddNotes;
