import SearchResult from "./SearchResult";

const Search = () => {
  return (
    <div>
      <div className="pb-5 sticky top-0 right-0 left-0 p-5 bg-[#131313]">
        <input className="w-full h-8 rounded-md text-sm px-3 focus:outline-none"></input>
      </div>
      <div className="px-5 py-1">
        <SearchResult title="Sample" artist="sample" />
        <SearchResult title="Sample" artist="sample" />
      </div>
    </div>
  );
};
export default Search;
