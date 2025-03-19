import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../api/AxiosInstance";
import { API_ENDPOINTS } from "../../api/apiEndPointend";

export const fetchCancelOrder = createAsyncThunk(
    "ip/surgery",
    async ({ id, reason }, { rejectWithValue }) => {
      try {
        const response = await AxiosInstance.delete(API_ENDPOINTS.CANCEL_ORDER, {
          params: { id, reason }, 
        });
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data?.message);
      }
    }
  );
  
const cancelOrderSlice = createSlice({
  name: "note",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCancelOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCancelOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchCancelOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cancelOrderSlice.reducer;
