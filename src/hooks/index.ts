import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { SearchResult } from "../types";
import { likeSong, unlikeSong } from "../reducers/libraryReducer";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useFavorite = (playing: SearchResult) => {
  const dispatch = useAppDispatch();

  const like = () => {
    dispatch(likeSong(playing));
  };

  const unlike = () => {
    dispatch(unlikeSong(playing.id));
  };

  return [like, unlike];
};
