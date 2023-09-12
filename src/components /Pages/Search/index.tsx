import { useEffect, useState } from "react";
import { SearchResult as SearchResultType } from "../../../types";
import SearchResult from "../../Music/SearchResult";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { search } from "../../../reducers/searchReducer";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useAppDispatch();
  const searchResults: SearchResultType[] = useAppSelector(
    (state) => state.search
  );

  useEffect(() => {
    if (!searchQuery) return;
    dispatch(search(searchQuery));
  }, [searchQuery, dispatch]);

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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          ></input>
        </label>
      </div>
      <div className="px-5 py-1 lg:-ml-3">
        {searchResults.map((result) => (
          <SearchResult key={result.id} track={result} />
        ))}
      </div>
    </div>
  );
};
export default Search;
