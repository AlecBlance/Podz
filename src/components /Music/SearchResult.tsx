import { useAppDispatch } from "../../hooks";
import { setIsPlaying } from "../../reducers/audioReducer";
import { setPlaying } from "../../reducers/playingReducer";
import { insertRecent } from "../../reducers/recentReducer";
import { SearchResult } from "../../types";

const SearchResult = ({ track }: { track: SearchResult }) => {
  const title = track.title;
  const artist = track.author;
  const image = track.image;
  const dispatch = useAppDispatch();

  const play = () => {
    dispatch(setPlaying(track));
    dispatch(setIsPlaying(true));
    dispatch(insertRecent(track));
  };

  return (
    <div
      className="flex items-center p-3 lg:hover:bg-slate-800 cursor-pointer"
      onClick={play}
    >
      <div
        style={{ backgroundImage: image && `url('${image}')` }}
        className={`w-11 h-11 ${
          !image && "bg-slate-400"
        } bg-cover bg-center rounded-md mr-4 shrink-0`}
      ></div>
      <div className="text-custom-neutrals-offwhite overflow-hidden">
        <h2 className="truncate ">{title}</h2>
        <p className="text-xs text-custom-card-artist truncate ">{artist}</p>
      </div>
    </div>
  );
};
export default SearchResult;
