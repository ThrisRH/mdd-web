import { InfoProps } from "@/context/InfoContext";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface InfoStateProps {
  data: InfoProps[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error?: string | null;
}

// Init state
const initialState: InfoStateProps = {
  data: [
    {
      documentId: "",
      fullname: "",
      biography: "",
      contact: [],
      interest: [],
      avatar: {
        id: "",
        url: "",
        name: "",
      },
    },
  ],
  loading: "idle",
};

// Fetch đata
export const fetchAuthorData = createAsyncThunk(
  "author/getInfo",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("/mmdblogsapi/authors?populate=*");
      if (!response.ok) return null;
      const data = await response.json();
      return data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const mainBlogAuthorSlice = createSlice({
  name: "MDDSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAuthorData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(fetchAuthorData.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchAuthorData.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export default mainBlogAuthorSlice.reducer;
