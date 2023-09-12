import { Dispatch, createSlice } from "@reduxjs/toolkit";
import searchService from "../services/search";

const initialState: [] = [];

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchResults(_state, action) {
      return action.payload;
    },
  },
});

export const { setSearchResults } = searchSlice.actions;

export const search = (query: string) => {
  return async (dispatch: Dispatch) => {
    const searchResults = await searchService.search(query);
    dispatch(setSearchResults(searchResults));
  };
};

export default searchSlice.reducer;
