import { combineReducers } from "@reduxjs/toolkit";
import dischargeListReducer from "./slice/ExpectedDischarge/dischargeListSlice";
import searchDischargeListReducer from "./slice/ExpectedDischarge/searchListSlice";
import dischargeDetailsReducer from "./slice/ExpectedDischarge/dischargeDetailSlice";
import changePreDischargeDateReducer from "./slice/ExpectedDischarge/preDischargeSlice";
import changeExpectedDetailsReducer from "./slice/ExpectedDischarge/expDischargeSlice";
import nurseReducer from "./slice/ExpectedDischarge/nurseSlice";
import pharmacyReducer from "./slice/ExpectedDischarge/pharmacySlice";
import surgeryListReduer from "./slice/SurgeryList/surgeryListSlice";
import searchSurgeryListReducer from "./slice/SurgeryList/searchSurgerySlice";
import addNoteReducer from "./slice/SurgeryList/addNoteSlice";
import surgeryBookingDetailReducer from "./slice/SurgeryList/bookingDetailSlice";
import rescheduleReducer from "./slice/SurgeryList/rescheduleOtSlice";
import getNoteReducer from "./slice/SurgeryList/getNoteSlice";
import editNoteReducer from "./slice/SurgeryList/editNoteSlice";
import deleteNoteReducer from "./slice/SurgeryList/deleteNoteSlice";
import searchBedReducer from "./slice/SurgeryList/searchBedSlice";
import cancelOrderReducer from "./slice/SurgeryList/cancelOrderSlice";

const ipReducer = combineReducers({
  // Expected Discharge
  dischargeList: dischargeListReducer,
  searchList: searchDischargeListReducer,
  dischargeDetail: dischargeDetailsReducer,
  preDischarge: changePreDischargeDateReducer,
  expDischarge: changeExpectedDetailsReducer,
  nurse: nurseReducer,
  pharmacy: pharmacyReducer,

  // Surgery List
  surgeryList: surgeryListReduer,
  searchSurgery: searchSurgeryListReducer,
  bookingDetails: surgeryBookingDetailReducer,
  reschduleOt: rescheduleReducer,
  addNote: addNoteReducer,
  getNote: getNoteReducer,
  editNote: editNoteReducer,
  deleteNote: deleteNoteReducer,
  searchBed: searchBedReducer,
  cancelOrder: cancelOrderReducer,
});

export default ipReducer;
