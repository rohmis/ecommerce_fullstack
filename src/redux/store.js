// store.js
import { configureStore } from '@reduxjs/toolkit';
import sellersReducer from './sellersSlice'; // Verify the path is correct
import registrationReducer from './registrationSlice';
import loginReducer from './loginSlice';

const store = configureStore({
  reducer: {
    sellers: sellersReducer,
    registration:registrationReducer,
    login:loginReducer,
    // Add other reducers here if needed
  },
});

export default store;
