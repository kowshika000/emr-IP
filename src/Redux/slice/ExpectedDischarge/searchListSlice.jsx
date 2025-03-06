import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../api/AxiosInstance";
import { API_ENDPOINTS } from "../../api/apiEndPointend";

export const fetchSearchDischargeList = createAsyncThunk(
  "ip/searchDischargeList",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.get(
        API_ENDPOINTS.SEARCH_DISCHARGE_LIST,
        credentials
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const searchDischargeListSlice = createSlice({
  name: "searchDischargeList",
  initialState: {
    searchDischargeListData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchDischargeList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchDischargeList.fulfilled, (state, action) => {
        state.loading = false;
        state.searchDischargeListData = action.payload.data;
      })
      .addCase(fetchSearchDischargeList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default searchDischargeListSlice.reducer;
