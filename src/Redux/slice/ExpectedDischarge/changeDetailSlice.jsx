import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../api/AxiosInstance";
import { API_ENDPOINTS } from "../../api/apiEndPointend";

export const fetchChangeExpectedDetails = createAsyncThunk(
  "ip/changeExpectedDetails",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.put(
        API_ENDPOINTS.CHANGE_DISCHARGE_DETAILS,
        credentials
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const changeExpectedDetailsSlice = createSlice({
  name: "changeExpectedDetails",
  initialState: {
    changeExpectedDetailsData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChangeExpectedDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChangeExpectedDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.changeExpectedDetailsData = action.payload.data;
      })
      .addCase(fetchChangeExpectedDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default changeExpectedDetailsSlice.reducer;
