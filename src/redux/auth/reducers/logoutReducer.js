import { logout } from '../authOperations';

export const logoutUser = builder => {
  builder
    .addCase(logout.pending, (state, action) => state)
    .addCase(logout.fulfilled, (state, action) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    })
    .addCase(logout.rejected, (state, action) => state);
};
