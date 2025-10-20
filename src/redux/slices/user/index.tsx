import userSlice from './slice';
export const userSliceReducer = userSlice.reducer;

export const { setIsLoggedIn, setUserMeta, setToken, setRefreshToken } =
  userSlice.actions;

export const selectRefreshToken = (state: any) => state.user.refreshToken;
export const selectToken = (state: any) => state.user.token;
export const selectUserMeta = (state: any) => state.user.userMeta;
export const selectIsLoggedIn = (state: any) => state.user.isLoggedIn;
