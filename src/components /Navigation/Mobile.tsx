import PlayingNow from "../NowPlaying/Mobile/Footer";
import { Link, useMatch } from "react-router-dom";

const MobileNavigation = () => {
  const isHome = useMatch("/");
  const isSearch = useMatch("/search");
  const isLibrary = useMatch("/library");

  return (
    <div className="bg-[#131313] text-custom-neutrals-offwhite">
      <PlayingNow />
      <div className="border-t border-slate-100/5 px-5 py-3 justify-center flex items-center">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-7 h-7 sm:w-9 sm:h-9 mx-4 ${
              isHome ? "text-custom-vibrant-blue" : "text-custom-card-artist"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Link>
        <Link to="/search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-7 h-7 sm:w-9 sm:h-9 mx-4  ${
              isSearch ? "text-custom-vibrant-blue" : "text-custom-card-artist"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </Link>
        <Link to="/library">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-7 h-7 sm:w-9 sm:h-9 mx-4 ${
              isLibrary ? "text-custom-vibrant-blue" : "text-custom-card-artist"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
export default MobileNavigation;
