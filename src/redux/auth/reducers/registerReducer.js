import { register } from '../authOperations';

export const registerUser = builder => {
  builder
    .addCase(register.pending, (state, action) => state)
    .addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.responseStatus = action.payload.status;
    })
    .addCase(register.rejected, (state, action) => state);
};
