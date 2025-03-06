import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../api/AxiosInstance";
import { API_ENDPOINTS } from "../../api/apiEndPointend";

export const fetchChangeExpectedDate = createAsyncThunk(
  "ip/changeExpectedDate",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(
        API_ENDPOINTS.CHANGE_DISCHARGE_DATE,
        credentials
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const changeExpectedDateSlice = createSlice({
  name: "changeExpectedDate",
  initialState: {
    changeExpectedDateData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChangeExpectedDate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChangeExpectedDate.fulfilled, (state, action) => {
        state.loading = false;
        state.changeExpectedDateData = action.payload.data;
      })
      .addCase(fetchChangeExpectedDate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default changeExpectedDateSlice.reducer;
