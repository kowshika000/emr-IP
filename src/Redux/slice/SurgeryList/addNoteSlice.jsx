import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../api/AxiosInstance";
import { API_ENDPOINTS } from "../../api/apiEndPointend";

export const fetchAddNote = createAsyncThunk(
  "ip/surgery",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(
        API_ENDPOINTS.ADD_NOTE,
        credentials
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const addNoteSlice = createSlice({
  name: "note",
  initialState: {
    noteData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddNote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddNote.fulfilled, (state, action) => {
        state.loading = false;
        state.noteData = action.payload.data;
      })
      .addCase(fetchAddNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default addNoteSlice.reducer;
