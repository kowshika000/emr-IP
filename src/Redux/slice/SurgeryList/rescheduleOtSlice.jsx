import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../api/AxiosInstance";
import { API_ENDPOINTS } from "../../api/apiEndPointend";

export const fetchReschedule = createAsyncThunk(
  "ip/surgeryReschedule",
  async ({ surgeryId, data }, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(
        `${API_ENDPOINTS.RESCHEDULE_OT}/${surgeryId}`,
        data
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const rescheduleSlice = createSlice({
  name: "reschedule",
  initialState: {
    rescheduleData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReschedule.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReschedule.fulfilled, (state, action) => {
        state.loading = false;
        state.rescheduleData = action.payload.data;
      })
      .addCase(fetchReschedule.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default rescheduleSlice.reducer;
