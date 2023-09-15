import { Dispatch, createSlice } from "@reduxjs/toolkit";
import { SearchResult } from "../types";
import recentService from "../services/recent";

const initialState: SearchResult[] = [];

const recentSlice = createSlice({
  name: "recent",
  initialState,
  reducers: {
    setRecent(_state, action) {
      return action.payload;
    },
    addRecent(state, action) {
      if (state.some((recent) => recent.id === action.payload.id)) return state;
      return state.concat(action.payload);
    },
    setRecentImage(state, action) {
      return state.map((recent) =>
        recent.id === action.payload.id
          ? { ...recent, image: action.payload.image }
          : recent
      );
    },
  },
});

export const { setRecent, addRecent, setRecentImage } = recentSlice.actions;

export const insertRecent = (playing: SearchResult) => {
  return async (dispatch: Dispatch) => {
    dispatch(addRecent(playing));
    if (recentService.isPresent(playing)) return;
    recentService.addInRecent(playing);
  };
};

export const insertRecentHome = (result: SearchResult, image: string) => {
  return async (dispatch: Dispatch) => {
    console.log(result);
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
