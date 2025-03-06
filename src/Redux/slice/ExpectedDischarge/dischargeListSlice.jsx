import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../api/AxiosInstance";
import { API_ENDPOINTS } from "../../api/apiEndPointend";

export const fetchDischargeList = createAsyncThunk(
  "ip/dischargeList",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.get(
        API_ENDPOINTS.DISCHARGE_LIST,
        credentials
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const dischargeListSlice = createSlice({
  name: "dischargeList",
  initialState: {
    dischargeListData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDischargeList.pending, (state) => { // ✅ Corrected here
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDischargeList.fulfilled, (state, action) => { // ✅ Corrected here
        state.loading = false;
        state.dischargeListData = action.payload.data;
      })
      .addCase(fetchDischargeList.rejected, (state, action) => { // ✅ Corrected here
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default dischargeListSlice.reducer;
