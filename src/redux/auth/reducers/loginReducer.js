import { login } from '../authOperations';

export const loginUser = builder => {
  builder
    .addCase(login.pending, (state, action) => state)
    .addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    })
    .addCase(login.rejected, (state, action) => state);
};
