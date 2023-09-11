import { Dispatch, createSlice } from "@reduxjs/toolkit";
import recommendationsService from "../services/recommendations";

const initialState: [] = [];

const recommendationsSlice = createSlice({
  name: "recommendations",
  initialState,
  reducers: {
    setRecommendations(_state, action) {
      return action.payload;
    },
  },
});

export const { setRecommendations } = recommendationsSlice.actions;

export const initializeRecommendations = () => {
  return async (dispatch: Dispatch) => {
    const { accessToken } = await recommendationsService.loginSpotify();
    recommendationsService.setToken(accessToken);
    const recommendations = await recommendationsService.getRecommendations();
    dispatch(setRecommendations(recommendations));
  };
};

export default recommendationsSlice.reducer;
