import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../api/AxiosInstance";
import { API_ENDPOINTS } from "../../api/apiEndPointend";

export const fetchSurgeryList = createAsyncThunk(
  "ip/surgeryList",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.get(API_ENDPOINTS.SURGERY_LIST, {
        params: credentials,
      });
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const surgeryListSlice = createSlice({
  name: "surgeryList",
  initialState: {
    surgeryListData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSurgeryList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSurgeryList.fulfilled, (state, action) => {
        state.loading = false;
        state.surgeryListData = action.payload.data;
      })
      .addCase(fetchSurgeryList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default surgeryListSlice.reducer;
