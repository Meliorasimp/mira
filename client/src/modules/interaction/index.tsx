import { createSlice } from "@reduxjs/toolkit";

type InteractionState = {
  isLightMode: boolean;
  isDarkMode: boolean;
};

const initialState: InteractionState = {
  isDarkMode: true,
  isLightMode: false,
};

const interactionSlice = createSlice({
  name: "interaction",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isLightMode = !state.isLightMode;
    },
  },
});

export const { toggleTheme } = interactionSlice.actions;
export default interactionSlice.reducer;
