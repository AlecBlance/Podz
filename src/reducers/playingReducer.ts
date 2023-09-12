import { Dispatch, createSlice } from "@reduxjs/toolkit";
import { SearchResult } from "../types";
import searchService from "../services/search";

const initialState: SearchResult = {
  id: "",
  title: "",
  author: "",
  image: "",
  duration: 0,
};

const playingSlice = createSlice({
  name: "playing",
  initialState,
  reducers: {
    setPlaying(_state, action) {
      return action.payload;
    },
    setPlayingImage(state, action) {
      return { ...state, image: action.payload };
    },
  },
});

export const { setPlaying, setPlayingImage } = playingSlice.actions;

export const playFromHome = (query: string, image: string) => {
  return async (dispatch: Dispatch) => {
    const result = await searchService.search(query, { single: true });
    dispatch(setPlaying(result));
    dispatch(setPlayingImage(image));
  };
};

export default playingSlice.reducer;
