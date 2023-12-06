import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunk action creator to handle registration
export const registerUser = createAsyncThunk(
  "registration/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/sellers/",
        userData
      );
      return response.data;
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  user_name: "",
  company_name: "",
  address: "",
  pincode: "",
  email: "",
  contact_number: "",
  website: "",
  password: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setUsername(state, action) {
      state.user_name = action.payload;
    },
    setCompanyname(state, action) {
      state.company_name = action.payload;
    },
    setAddress(state, action) {
      state.address = action.payload;
    },
    setPincode(state, action) {
      state.pincode = action.payload;
    },
    setContactnumber(state, action) {
      state.contact_number = action.payload;
    },
    setWebsite(state, action) {
      state.website = action.payload;
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
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
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
  setCompanyname,
  setAddress,
  setPincode,
  setContactnumber,
  setWebsite,
  setEmail,
  setPassword,
  setLoading,
  setSuccess,
  setError,
  setErrorMessage,
  resetForm,
} = registrationSlice.actions;

export default registrationSlice.reducer;
