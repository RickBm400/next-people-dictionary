import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

// Root store
export type AppStore = typeof store;
// App state and dispatch
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;

