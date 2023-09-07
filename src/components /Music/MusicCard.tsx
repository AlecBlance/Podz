import { MusicCardProps } from "../../types";

const MusicCard = ({ title, artist, image }: MusicCardProps) => {
  return (
    <div className="w-32 md:w-40 sm:w-36 mr-4 md:mr-7">
      <div className="bg-slate-400 w-32 h-32 sm:h-36 sm:w-36 md:w-40 md:h-40 rounded-md">
        {image}
      </div>
      <div>
        <h1 className="text-custom-neutrals-offwhite text-sm truncate mt-1 sm:text-base md:text-lg">
          {title}
        </h1>
        <p className="text-custom-card-artist text-xs truncate mt-1 sm:text-sm md:text-base">
          {artist}
        </p>
      </div>
    </div>
  );
};

export default MusicCard;
