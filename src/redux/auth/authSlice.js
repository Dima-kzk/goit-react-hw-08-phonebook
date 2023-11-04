import { loginUser } from './reducers/loginReducer';
import { logoutUser } from './reducers/logoutReducer';
import { refreshUser } from './reducers/refreshReducer';
import { registerUser } from './reducers/registerReducer';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    registerUser(builder);
    loginUser(builder);
    logoutUser(builder);
    refreshUser(builder);
  },
});

export default authSlice.reducer;
