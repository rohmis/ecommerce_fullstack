import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUserData = createAsyncThunk(
  "user/registerUserData",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/customers/",
        userData
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response?.data || "Failed to register");
    }
  }
);

const initialState = {
  user_name: "",
  address: "",
  email: "",
  contact_number: "",
  password: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

const userRegistrationSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername(state, action) {
      state.user_name = action.payload;
    },

    setAddress(state, action) {
      state.address = action.payload;
    },

    setContactnumber(state, action) {
      state.contact_number = action.payload;
    },

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
      .addCase(registerUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUserData.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(registerUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload
          ? action.payload.message
          : "Something went wrong";
      });
  },
});

export const {
  setUsername,

  setAddress,

  setContactnumber,

  setEmail,
  setPassword,
  setLoading,
  setSuccess,
  setError,
  setErrorMessage,
  resetForm,
} = userRegistrationSlice.actions;

export default userRegistrationSlice.reducer;
