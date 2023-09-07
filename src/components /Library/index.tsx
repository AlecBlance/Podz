import SavedMusic from "./SavedMusic";

const Library = () => {
  return (
    <div>
      <div className="bg-library-header bg-cover h-64 bg-bottom flex items-end sticky top-0">
        <div className="text-custom-neutrals-offwhite text-4xl font-black m-5 bg-black/10 sm:text-5xl">
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
