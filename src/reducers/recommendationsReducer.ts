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
    const phRecommendations = await recommendationsService.getRecommendations(
      "PH"
    );
    const usRecommendations = await recommendationsService.getRecommendations(
      "US"
    );
    dispatch(setRecommendations([...phRecommendations, ...usRecommendations]));
  };
};

export default recommendationsSlice.reducer;
