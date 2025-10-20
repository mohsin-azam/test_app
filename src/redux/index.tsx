import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { configSliceReducer } from './slices/config';
import { tempSliceReducer, userSliceReducer } from './slices/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  debug: true, //to get useful logging
  blacklist: ['snackbar'],
};

const reducers: any = {
  user: userSliceReducer,
  temp: tempSliceReducer,
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
