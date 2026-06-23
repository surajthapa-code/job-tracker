import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "../features/jobs/jobsSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, jobReducer);

export const store = configureStore({
  reducer: {
    jobs: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
