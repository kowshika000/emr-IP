import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../api/AxiosInstance";
import { API_ENDPOINTS } from "../../api/apiEndPointend";

export const fetchDeleteNote = createAsyncThunk(
  "ip/surgeryDeleteNote",
  async (id, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.delete(
        `${API_ENDPOINTS.DELETE_NOTE}/${id}`
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const deleteNoteSlice = createSlice({
  name: "note",
  initialState: {
    noteData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeleteNote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDeleteNote.fulfilled, (state, action) => {
        state.loading = false;
        state.noteData = action.payload.data;
      })
      .addCase(fetchDeleteNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default deleteNoteSlice.reducer;
