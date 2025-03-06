import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../api/AxiosInstance";
import { API_ENDPOINTS } from "../../api/apiEndPointend";

export const fetchPharmacy = createAsyncThunk(
  "ip/pharmacy",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(
        API_ENDPOINTS.PHARMACY_CLEARANCE,
        credentials
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const pharmacySlice = createSlice({
  name: "pharmacy",
  initialState: {
    pharmacyData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPharmacy.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPharmacy.fulfilled, (state, action) => {
        state.loading = false;
        state.pharmacyData = action.payload.data;
      })
      .addCase(fetchPharmacy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default pharmacySlice.reducer;
