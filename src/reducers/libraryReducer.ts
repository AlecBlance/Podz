import { Dispatch, createSlice } from "@reduxjs/toolkit";
import { SearchResult } from "../types";
import libraryService from "../services/library";

const initialState: SearchResult[] = [];

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addFavorite(state, action) {
      return state.concat(action.payload);
    },
    removeFavorite(state, action) {
      return state.filter((liked) => liked.id !== action.payload);
    },
    setLibrary(_state, action) {
      return action.payload;
    },
  },
});

export const { addFavorite, removeFavorite, setLibrary } = librarySlice.actions;

export const initializeLibrary = () => {
  return async (dispatch: Dispatch) => {
    const library = libraryService.getParsedLibrary();
    library
      ? dispatch(setLibrary(library))
      : localStorage.setItem("library", "[]");
  };
};

export const likeSong = (playing: SearchResult) => {
  return async (dispatch: Dispatch) => {
    libraryService.addInLibrary(playing);
    dispatch(addFavorite(playing));
  };
};

export const unlikeSong = (id: string) => {
  return async (dispatch: Dispatch) => {
    libraryService.deleteInLibrary(id);
    dispatch(removeFavorite(id));
  };
};

export default librarySlice.reducer;
