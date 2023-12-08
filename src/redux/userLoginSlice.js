import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/customers");
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  userData: [],
  isLoggedIn: false,
  isRegistered: true,
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
  login: "",
  password: "",
  isValidCredentials: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userData.push(action.payload);
    },
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    validateCredentials: (state) => {
      // Simulated validation - compare login and password with fetched data
      const { login, password } = state;
      const matchedUser = state.userData.find(
        (user) => user.login === login && user.password === password
      );
      state.isValidCredentials = !!matchedUser;
      state.isLoggedIn = !!matchedUser;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.login = "";
      state.password = "";
      state.isValidCredentials = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userData = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload
          ? action.payload.message
          : "Failed to fetch user data.";
      });
  },
});

export const {
  addUser,
  setLogin,
  setPassword,
  validateCredentials,
  logout,
} = userSlice.actions;

export default userSlice.reducer;
