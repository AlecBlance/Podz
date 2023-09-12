import { createSlice } from "@reduxjs/toolkit";
import { SearchResult } from "../types";

const initialState: SearchResult = {
  id: "",
  title: "",
  author: "",
  image: "",
};

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
