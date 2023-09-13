import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: true,
};

const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    setIsPlaying(state, action) {
      return { ...state, isPlaying: action.payload };
    },
  },
});

export const { setIsPlaying } = audioSlice.actions;

export default audioSlice.reducer;
