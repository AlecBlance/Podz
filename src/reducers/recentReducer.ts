import { Dispatch, createSlice } from "@reduxjs/toolkit";
import { SearchResult } from "../types";
import recentService from "../services/recent";

const initialState: { recentMusic: SearchResult[]; recentNumber: number } = {
  recentMusic: [],
  recentNumber: 0,
};

const recentSlice = createSlice({
  name: "recent",
  initialState,
  reducers: {
    setRecent(state, action) {
      if (!state.recentNumber) return;
      if (state.recentNumber < action.payload.length) {
        return {
          ...state,
          recentMusic: action.payload.slice(-state.recentNumber),
        };
      }
      return { ...state, recentMusic: action.payload };
    },
    addRecent(state, action) {
      let recentMusic = state.recentMusic;
      if (state.recentNumber < state.recentMusic.length) {
        recentMusic = recentMusic.slice(-state.recentNumber);
      }
      if (recentMusic.some((recent) => recent.id === action.payload.id))
        return { ...state, recentMusic: state.recentMusic };
      const recentMusicCopy = recentMusic.concat();
      if (
        state.recentNumber &&
        state.recentNumber === state.recentMusic.length
      ) {
        recentMusicCopy.shift();
      }
      return {
        ...state,
        recentMusic: recentMusicCopy.concat(action.payload),
      };
    },
    setRecentImage(state, action) {
      return {
        ...state,
        recentMusic: state.recentMusic.map((recent) =>
          recent.id === action.payload.id
            ? { ...recent, image: action.payload.image }
            : recent
        ),
      };
    },
    setRecentLimit(state, action) {
      return { ...state, recentNumber: action.payload };
    },
  },
});

export const { setRecent, addRecent, setRecentImage, setRecentLimit } =
  recentSlice.actions;

export const insertRecent = (playing: SearchResult) => {
  return async (dispatch: Dispatch) => {
    dispatch(addRecent(playing));
    if (recentService.isPresent(playing)) return;
    recentService.addInRecent(playing);
  };
};

export const insertRecentHome = (result: SearchResult, image: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(addRecent(result));
    dispatch(setRecentImage({ image, id: result.id }));
    if (recentService.isPresent(result)) return;
    recentService.addInRecent({ ...result, image });
  };
};

export const initializeRecent = () => {
  return async (dispatch: Dispatch) => {
    const recent = recentService.getParsedRecent();
    recent ? dispatch(setRecent(recent)) : localStorage.setItem("recent", "[]");
  };
};

export default recentSlice.reducer;
