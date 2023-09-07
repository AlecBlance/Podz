import { MusicCardProps } from "../../types";

const MusicCard = ({ title, artist, image }: MusicCardProps) => {
  return (
    <div className="w-32 sm:w-36 mr-4">
      <div className="bg-slate-400 w-32 h-32 sm:h-36 sm:w-36 rounded-md">
        {image}
      </div>
      <div>
        <h1 className="text-custom-neutrals-offwhite text-sm truncate mt-1 sm:text-base">
          {title}
        </h1>
        <p className="text-custom-card-artist text-xs truncate mt-1 sm:text-sm">
          {artist}
        </p>
      </div>
    </div>
  );
};

export default MusicCard;
