import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { configSliceReducer } from './slices/config';
import { userSliceReducer } from './slices/user';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  debug: true, //to get useful logging
  blacklist: ['snackbar'],
};

const reducers: any = {
  user: userSliceReducer,
  config: configSliceReducer,
};
const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        serializableCheck: {
          ignoredActionPaths: ['meta.arg', 'payload.timestamp'], // Adjust as needed
          ignoredPaths: ['user.lastLogin'], // If you absolutely need to bypass
        },
      },
    }),
});
export const persistor = persistStore(store);
