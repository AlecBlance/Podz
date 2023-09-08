import { MusicCardProps } from "../../types";

const SearchResult = ({ title, artist, image }: MusicCardProps) => {
  return (
    <div className="flex items-center my-3 ">
      <div className="w-11 h-11   bg-slate-400 rounded-md mr-4 shrink-0">
        {image}
      </div>
      <div className="text-custom-neutrals-offwhite overflow-hidden">
        <h2 className="truncate ">{title}</h2>
        <p className="text-xs text-custom-card-artist truncate ">{artist}</p>
      </div>
    </div>
  );
};
export default SearchResult;