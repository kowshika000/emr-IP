import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../api/AxiosInstance";
import { API_ENDPOINTS } from "../../api/apiEndPointend";

export const fetchSearchSurgeryList = createAsyncThunk(
  "ip/surgerySearchList",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.get(
        API_ENDPOINTS.SEARCH_SURGERY_LIST,
        {
          params: credentials,
        }
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const searchSurgeryListSlice = createSlice({
  name: "searchSurgeryList",
  initialState: {
    searchSurgeryListData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchSurgeryList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchSurgeryList.fulfilled, (state, action) => {
        state.loading = false;
        state.searchSurgeryListData = action.payload.data;
      })
      .addCase(fetchSearchSurgeryList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default searchSurgeryListSlice.reducer;
