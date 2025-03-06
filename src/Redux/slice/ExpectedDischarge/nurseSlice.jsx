import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../api/AxiosInstance";
import { API_ENDPOINTS } from "../../api/apiEndPointend";

export const fetchNurse = createAsyncThunk(
  "ip/nurse",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(
        API_ENDPOINTS.NURSING_CLEARANCE,
        credentials
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const nurseSlice = createSlice({
  name: "nurse",
  initialState: {
    nurseData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNurse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNurse.fulfilled, (state, action) => {
        state.loading = false;
        state.nurseData = action.payload.data;
      })
      .addCase(fetchNurse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default nurseSlice.reducer;
