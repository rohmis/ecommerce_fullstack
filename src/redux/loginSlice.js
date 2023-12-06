import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunk action creator to handle login
export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/sellers/`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  email: "",
  password: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setSuccess(state, action) {
      state.isSuccess = action.payload;
    },
    setError(state, action) {
      state.isError = action.payload;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
    resetForm(state) {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload
          ? action.payload.message
          : "Something went wrong";
      });
  },
});

export const {
  setEmail,
  setPassword,
  setLoading,
  setSuccess,
  setError,
  setErrorMessage,
  resetForm,
} = loginSlice.actions;

export default loginSlice.reducer;
