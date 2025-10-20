import { store } from '~redux';
import {
  setIsAuthenticationCompleted,
  setRefreshToken,
  setToken,
  setUserMeta,
} from '~redux/slices/user';

export const logout = () => {
  store.dispatch(setUserMeta(null));
  store.dispatch(setToken(null));
  store.dispatch(setRefreshToken(null));
  store.dispatch(setIsAuthenticationCompleted(false));
};
