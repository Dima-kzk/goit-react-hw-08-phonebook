import { refresh } from '../authOperations';

export const refreshUser = build => {
  build.addCase(refresh.fulfilled, (state, action) => {
    state.user = action.payload;
    state.isLoggedIn = true;
  });
};
