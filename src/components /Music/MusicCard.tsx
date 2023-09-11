import { MusicCardProps } from "../../types";

const MusicCard = ({ title, artist, image }: MusicCardProps) => {
  return (
    <div className="lg:hover:bg-slate-800 flex justify-center lg:p-4 cursor-pointer rounded-lg">
      <div className="w-32 mr-4 lg:m-0">
        <div className="bg-slate-400 w-32 h-32 rounded-md">{image}</div>
        <div>
          <h1 className="text-custom-neutrals-offwhite text-sm truncate mt-1  ">
            {title}
          </h1>
          <p className="text-custom-card-artist text-xs truncate mt-1  ">
            {artist}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
