import { Dispatch, createSlice } from "@reduxjs/toolkit";
import { SearchResult } from "../types";
import searchService from "../services/search";

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

export const playFromHome = (query: string) => {
  return async (dispatch: Dispatch) => {
    const result = await searchService.search(query, { single: true });
    dispatch(setPlaying(result));
  };
};

export default playingSlice.reducer;
