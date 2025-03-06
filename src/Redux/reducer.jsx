import { combineReducers } from "@reduxjs/toolkit";
import dischargeListReducer from "./slice/ExpectedDischarge/dischargeListSlice";
import searchDischargeListReducer from "./slice/ExpectedDischarge/searchListSlice";
import dischargeDetailsReducer from "./slice/ExpectedDischarge/dischargeDetailSlice";
import changeExpectedDateReducer from "./slice/ExpectedDischarge/changeDateSlice";
import changeExpectedDetailsReducer from "./slice/ExpectedDischarge/changeDetailSlice";
import nurseReducer from "./slice/ExpectedDischarge/nurseSlice";
import pharmacyReducer from "./slice/ExpectedDischarge/pharmacySlice";

const ipReducer = combineReducers({
  // Expected Discharge
  dischargeList: dischargeListReducer,
  searchList: searchDischargeListReducer,
  dischargeDetail: dischargeDetailsReducer,
  changeDate: changeExpectedDateReducer,
  changeDetails: changeExpectedDetailsReducer,
  nurse: nurseReducer,
  pharmacy: pharmacyReducer,
});

export default ipReducer;
