import { useAppSelector } from "../../../hooks";
import SavedMusic from "../../Music/SavedMusic";

const Library = () => {
  const library = useAppSelector((state) => state.library);

  return (
    <div>
      <div className="h-36 flex items-end sticky top-0 background">
        <div className="text-custom-neutrals-offwhite text-4xl font-black m-5  bg-black/10 ">
          <p>MY LIBRARY</p>
        </div>
      </div>
      <div>
        {library.map((liked) => (
          <SavedMusic key={liked.id} track={liked} />
        ))}
      </div>
    </div>
  );
};
export default Library;
