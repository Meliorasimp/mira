import { configureStore } from "@reduxjs/toolkit";
import interactionReducer from "./modules/interaction";

const store = configureStore({
  reducer: {
    interaction: interactionReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
