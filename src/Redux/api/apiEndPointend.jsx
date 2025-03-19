export const API_ENDPOINTS = {
  // expected discharge
  SEARCH_DISCHARGE_LIST: "inPatient/getSearchDischargeList",
  DISCHARGE_LIST: "inPatient/getTodayDischargeList",
  DISCHARGE_DETAILS: "inPatient/getExpectedDischargeDetails",
  CHANGE_PRE_DISCHARGE: "inPatient/changePreDischargeDate",
  CHANGE_EXP_DISCHARGE: "inPatient/changeExpectedDischargeDetails",
  PHARMACY_CLEARANCE: "inPatient/pharmacyClearance",
  NURSING_CLEARANCE: "inPatient/nursingClearance",

  // sugery booking
  SURGERY_LIST: "surgery/getTodaySurgeryList",
  SEARCH_SURGERY_LIST: "surgery/getSearchSurgeryList",
  SURGERY_BOOKING_DETAILS: "surgery/getSurgeryBookingDetails",
  ADD_NOTE: "surgery/createSurgeryNotes",
  GET_NOTE: "surgery/getSurgeryNotes",
  EDIT_NOTE: "surgery/updateSurgeryNotes",
  DELETE_NOTE: "surgery/deleteSurgeryNotes",
  RESCHEDULE_OT: "surgery/createReschedule",
  SEARCH_BED: "surgery/searchBedReservationDetails",
  CANCEL_ORDER:"surgery/cancelSurgeryOrder",
};
