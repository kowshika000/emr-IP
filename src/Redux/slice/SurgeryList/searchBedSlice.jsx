import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../api/AxiosInstance";
import { API_ENDPOINTS } from "../../api/apiEndPointend";

export const fetchSearchBed = createAsyncThunk(
  "ip/surgery",
  async (credentials, { rejectWithValue }) => {
    // Filter out undefined, null, and empty string values
    const filteredCredentials = Object.fromEntries(
      Object.entries(credentials).filter(
        ([_, value]) => value !== undefined && value !== null && value !== ""
      )
    );

    try {
      const response = await AxiosInstance.get(API_ENDPOINTS.SEARCH_BED, {
        params: filteredCredentials, // Use filtered credentials for the API call
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const searchBedSlice = createSlice({
  name: "searchBed",
  initialState: {
    searchBedData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchBed.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchBed.fulfilled, (state, action) => {
        state.loading = false;
        state.searchBedData = action.payload.data;
      })
      .addCase(fetchSearchBed.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default searchBedSlice.reducer;
