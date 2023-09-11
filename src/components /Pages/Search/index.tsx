import SearchResult from "../../Music/SearchResult";

const Search = () => {
  return (
    <div>
      <div className="pb-5 sticky top-0 right-0 left-0 p-5  bg-[#131313]">
        <label className="flex items-center rounded-md bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5   mx-2 text-custom-card-artist"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            className="w-full h-8  rounded-md pr-3 text-sm  focus:outline-none bg-transparent"
            placeholder="What do you want to listen to?"
          ></input>
        </label>
      </div>
      <div className="px-5 py-1 lg:-ml-3">
        <SearchResult title="Sample" artist="sample" />
        <SearchResult title="Sample" artist="sample" />
      </div>
    </div>
  );
};
export default Search;
