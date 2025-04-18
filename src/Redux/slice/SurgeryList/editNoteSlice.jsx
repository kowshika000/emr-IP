import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../api/AxiosInstance";
import { API_ENDPOINTS } from "../../api/apiEndPointend";

export const fetchEditNote = createAsyncThunk(
  "ip/surgeryEditNote",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.put(
        API_ENDPOINTS.EDIT_NOTE,
        credentials
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const editNoteSlice = createSlice({
  name: "note",
  initialState: {
    noteData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEditNote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEditNote.fulfilled, (state, action) => {
        state.loading = false;
        state.noteData = action.payload.data;
      })
      .addCase(fetchEditNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default editNoteSlice.reducer;
