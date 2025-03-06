import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../api/AxiosInstance";
import { API_ENDPOINTS } from "../../api/apiEndPointend";

export const fetchDischargeDetails = createAsyncThunk(
  "ip/dischargeDetails",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.get(
        API_ENDPOINTS.DISCHARGE_DETAILS,
        credentials
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const dischargeDetailsSlice = createSlice({
  name: "dischargeDetails",
  initialState: {
    dischargeDetailsData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDischargeDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDischargeDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.dischargeDetailsData = action.payload.data;
      })
      .addCase(fetchDischargeDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default dischargeDetailsSlice.reducer;
