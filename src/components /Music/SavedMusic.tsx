import { useAppDispatch, useFavorite } from "../../hooks";
import { setIsPlaying } from "../../reducers/audioReducer";
import { setPlaying } from "../../reducers/playingReducer";
import { insertRecent } from "../../reducers/recentReducer";
import { SearchResult } from "../../types";

const SavedMusic = ({ track }: { track: SearchResult }) => {
  const [, unlike] = useFavorite(track);
  const dispatch = useAppDispatch();

  const play = () => {
    dispatch(setPlaying(track));
    dispatch(setIsPlaying(true));
    dispatch(insertRecent(track));
  };
  return (
    <div className="flex items-center py-2 cursor-pointer hover:bg-slate-800 px-5">
      <div className="grow flex items-center overflow-hidden" onClick={play}>
        <div
          className="w-11 h-11 bg-cover bg-center rounded-md mr-4 shrink-0"
          style={{ backgroundImage: `url('${track.image}')` }}
        ></div>
        <div className="text-custom-neutrals-offwhite overflow-hidden">
          <h2 className="truncate ">{track.title}</h2>
          <p className="text-xs text-custom-card-artist truncate  ">
            {track.author}
          </p>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7 lg:w-5 lg:h-5 text-custom-vibrant-blue shrink-0 ml-4"
        onClick={unlike}
      >
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
    </div>
  );
};
export default SavedMusic;
