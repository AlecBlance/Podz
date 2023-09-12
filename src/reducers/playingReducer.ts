import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "";

const playingSlice = createSlice({
  name: "playing",
  initialState,
  reducers: {
    setPlaying(_state, action) {
      return action.payload;
    },
  },
});

export const { setPlaying } = playingSlice.actions;

export default playingSlice.reducer;
