import { createSlice } from "@reduxjs/toolkit";
import { RecommendationsTracks, SearchResult } from "../types";
import searchService from "../services/search";
import { insertRecentHome } from "./recentReducer";
import { AppDispatch, RootState } from "../store";

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

export const playFromHome = (track: RecommendationsTracks) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const { playing } = getState();
    if (playing.image === track.imageUrl) return;
    const result = await searchService.search(
      `${track.name} ${track.artistName.join(", ")}`,
      { single: true }
    );
    dispatch(setPlaying(result));
    dispatch(setPlayingImage(track.imageUrl));
    dispatch(insertRecentHome(result as SearchResult, track.imageUrl));
  };
};

export default playingSlice.reducer;
