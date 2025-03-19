import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../api/AxiosInstance";
import { API_ENDPOINTS } from "../../api/apiEndPointend";

export const fetchChangePreDischargeDate = createAsyncThunk(
  "ip/changeDischargeDate",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(
        `${API_ENDPOINTS.CHANGE_PRE_DISCHARGE}/${id}`,
        data
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const changePreDischargeDateSlice = createSlice({
  name: "changeDischargeDate",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChangePreDischargeDate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChangePreDischargeDate.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchChangePreDischargeDate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default changePreDischargeDateSlice.reducer;
