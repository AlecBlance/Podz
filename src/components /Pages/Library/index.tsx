import SavedMusic from "../../Music/SavedMusic";

const Library = () => {
  return (
    <div>
      <div className="h-36 flex items-end sticky top-0 background">
        <div className="text-custom-neutrals-offwhite text-4xl font-black m-5  bg-black/10 ">
          <p>MY LIBRARY</p>
        </div>
      </div>
      <div>
        <SavedMusic title="Yay" artist="Alec Blance" />
        <SavedMusic title="Yay" artist="Alec Blance" />
        <SavedMusic title="Yay" artist="Alec Blance" />
        <SavedMusic title="Yay" artist="Alec Blance" />
        <SavedMusic title="Yay" artist="Alec Blance" />
        <SavedMusic title="Yay" artist="Alec Blance" />
        <SavedMusic title="Yay" artist="Alec Blance" />
        <SavedMusic title="Yay" artist="Alec Blance" />
        <SavedMusic title="Yay" artist="Alec Blance" />
        <SavedMusic title="Yay" artist="Alec Blance" />
        <SavedMusic title="Yay" artist="Alec Blance" />
        <SavedMusic title="Yay" artist="Alec Blance" />
        <SavedMusic title="Yay" artist="Alec Blance" />
        <SavedMusic title="Yay" artist="Alec Blance" />
        <SavedMusic title="Yay" artist="Alec Blance" />
      </div>
    </div>
  );
};
export default Library;
