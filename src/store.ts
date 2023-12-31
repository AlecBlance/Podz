import { configureStore } from "@reduxjs/toolkit";
import recommendationsReducer from "./reducers/recommendationsReducer";
import searchReducer from "./reducers/searchReducer";
import playingReducer from "./reducers/playingReducer";
import audioReducer from "./reducers/audioReducer";
import libraryReducer from "./reducers/libraryReducer";
import recentReducer from "./reducers/recentReducer";

const store = configureStore({
  reducer: {
    recommendations: recommendationsReducer,
    search: searchReducer,
    playing: playingReducer,
    audio: audioReducer,
    library: libraryReducer,
    recent: recentReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
