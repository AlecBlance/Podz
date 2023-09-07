import { Link, useMatch } from "react-router-dom";
import RecentMusic from "../Music/RecentMusic";
import { useRef, useState } from "react";

const Sidebar = () => {
  const isHome = useMatch("/");
  const isLibrary = useMatch("/library");
  const childDiv = useRef(null);
  // const musicCard = useRef(null);
  // const [limit, setLimit] = useState(0);
  const [recent] = useState([
    <RecentMusic key="a" title="SAAAA" artist="ILALIM" />,
  ]);

  // useEffect(() => {
  //   if (childDiv.current && musicCard.current) {
  //     const child = childDiv.current["clientHeight"];
  //     const musicInnerHeight = musicCard.current["clientHeight"];
  //     const musicMargin = parseInt(
  //       window.getComputedStyle(musicCard.current)["marginTop"]
  //     );
  //     setLimit(child / (musicInnerHeight + musicMargin));
  //   }
  // }, [setLimit]);

  return (
    <div className="bg-[#252525] w-1/4 flex flex-col">
      <div className="flex justify-center my-5">
        <svg
          viewBox="0 0 493 175"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-1/2"
        >
          <path
            d="M225.51 138.904C221.578 138.534 220.429 138.378 218.501 137.892C215.834 137.21 214.841 136.782 212.739 135.439C209.974 133.628 207.54 130.532 206.801 127.846C206.664 127.32 206.528 126.074 206.528 125.12V123.348L208.086 121.538C208.942 120.525 210.052 119.26 210.539 118.715C211.025 118.17 211.629 117.469 211.863 117.138C212.116 116.826 212.68 116.125 213.147 115.58C214.296 114.256 217.606 110.324 218.793 108.863C219.339 108.201 220.04 107.345 220.39 106.955C222.084 104.97 223.486 103.256 225.471 100.784C226.678 99.2846 227.983 97.6687 228.392 97.2015C228.781 96.7147 229.287 96.0917 229.501 95.7997C229.716 95.5077 231.993 92.7041 234.563 89.5696C237.133 86.4351 240.015 82.9112 240.969 81.7236C241.903 80.536 242.916 79.29 243.208 78.9395C244.512 77.382 248.289 72.6121 248.912 71.736C249.224 71.3271 249.847 70.5094 250.333 69.9254C251.073 69.0103 252.631 66.9855 254.286 64.7661C256.661 61.5732 261.333 54.097 261.333 53.4935C261.333 53.4546 260.185 54.0192 258.763 54.7785C257.362 55.5183 255.707 56.336 255.123 56.5891C254.519 56.8422 253.117 57.4847 251.988 58.0103C250.859 58.536 249.457 59.1395 248.873 59.3731C248.289 59.5873 247.063 60.0935 246.147 60.4829C243.539 61.6121 239.333 63.228 236.51 64.2015C235.77 64.474 235.011 64.7661 234.836 64.8634C234.661 64.9608 233.415 65.3501 232.091 65.7201C229.326 66.5183 226.309 67.005 224.05 67.005C222.356 67.005 217.976 66.5378 217.041 66.2652C212.914 64.9997 212.174 64.5908 211.376 63.0723C210.85 62.0988 210.909 58.9059 211.473 57.4457C212.719 54.1944 215.406 51.5271 218.949 50.028C220.059 49.5608 220.721 49.405 222.142 49.3271C224.517 49.2103 225.101 49.3466 226.27 50.2811C227.438 51.1962 228.353 52.6758 228.664 54.1944C228.976 55.674 229.209 55.7714 232.714 55.8687C236.53 55.9661 240.385 55.4404 244.395 54.2723C244.882 54.136 246.109 53.7661 247.121 53.474C248.133 53.182 250.333 52.5006 251.988 51.9749C253.643 51.4298 255.278 50.9236 255.59 50.8457C255.921 50.7484 257.05 50.359 258.121 49.9696C259.192 49.5802 260.808 49.0156 261.723 48.7041C263.378 48.159 269.316 46.0758 271.165 45.3749C272.489 44.8882 274.572 44.8687 275.156 45.3555C276.052 46.0953 275.857 48.5678 274.553 53.2599C274.222 54.428 273.755 55.8298 273.521 56.3749C273.268 56.9201 272.956 57.6793 272.82 58.0493C271.866 60.4829 267.155 68.0563 265.188 70.3147C265.032 70.49 264.663 70.9767 264.351 71.3855C264.02 71.8139 263.709 72.1838 263.631 72.2227C263.572 72.2616 262.949 72.9625 262.287 73.7802C261.606 74.5979 261.002 75.3183 260.944 75.3767C260.886 75.4351 260.301 76.097 259.659 76.8369C259.016 77.5962 258.199 78.5112 257.848 78.8811C257.284 79.4846 252.144 85.2085 250.781 86.7661C250.275 87.3501 247.744 90.1342 246.342 91.6333C245.953 92.0616 244.94 93.2103 244.084 94.1643C243.247 95.1377 242.37 96.1112 242.156 96.3254C241.942 96.559 241.163 97.4351 240.404 98.2723C239.664 99.1094 238.788 100.083 238.457 100.414C234.271 104.833 231.04 108.182 228.197 111.083C226.309 113.03 224.77 114.626 224.79 114.626C224.809 114.646 225.978 114.451 227.36 114.198C238.185 112.29 247.199 113.731 250.664 117.936C252.767 120.467 252.942 124.886 251.112 128.663C249.516 131.954 245.914 134.952 241.572 136.646C237.406 138.281 229.91 139.332 225.51 138.904Z"
            fill="#1B6AE3"
          />
          <path
            d="M8.96 137V44.84H22.848L54.72 110.12L86.592 44.84H100.48V137H86.08V77.928L57.792 137H51.648L23.424 77.928V137H8.96ZM155.58 138.92C148.241 138.92 141.777 137.427 136.188 134.44C130.641 131.453 126.289 127.251 123.132 121.832C120.017 116.413 118.46 110.056 118.46 102.76V44.968L134.076 44.84V102.376C134.076 105.832 134.652 108.925 135.804 111.656C136.999 114.387 138.599 116.712 140.604 118.632C142.609 120.509 144.913 121.939 147.516 122.92C150.119 123.901 152.807 124.392 155.58 124.392C158.439 124.392 161.148 123.901 163.708 122.92C166.311 121.896 168.615 120.445 170.62 118.568C172.625 116.648 174.204 114.323 175.356 111.592C176.508 108.861 177.084 105.789 177.084 102.376V44.84H192.7V102.76C192.7 110.056 191.121 116.413 187.964 121.832C184.849 127.251 180.497 131.453 174.908 134.44C169.361 137.427 162.919 138.92 155.58 138.92ZM288.74 137V44.84H304.164V137H288.74ZM362.311 138.92C353.095 138.92 345.202 136.915 338.631 132.904C332.06 128.851 327.004 123.219 323.463 116.008C319.964 108.797 318.215 100.435 318.215 90.92C318.215 81.4053 319.964 73.0427 323.463 65.832C327.004 58.6213 332.06 53.0107 338.631 49C345.202 44.9467 353.095 42.92 362.311 42.92C372.935 42.92 381.788 45.5867 388.871 50.92C395.954 56.2107 400.924 63.3573 403.783 72.36L388.231 76.648C386.439 70.632 383.388 65.9387 379.079 62.568C374.77 59.1547 369.18 57.448 362.311 57.448C356.124 57.448 350.962 58.8347 346.823 61.608C342.727 64.3813 339.634 68.2853 337.543 73.32C335.495 78.312 334.45 84.1787 334.407 90.92C334.407 97.6613 335.431 103.549 337.479 108.584C339.57 113.576 342.684 117.459 346.823 120.232C350.962 123.005 356.124 124.392 362.311 124.392C369.18 124.392 374.77 122.685 379.079 119.272C383.388 115.859 386.439 111.165 388.231 105.192L403.783 109.48C400.924 118.483 395.954 125.651 388.871 130.984C381.788 136.275 372.935 138.92 362.311 138.92ZM408.935 137L437.991 44.84H460.583L489.639 137H473.767L447.399 54.312H450.855L424.807 137H408.935ZM425.127 117.032V102.632H473.511V117.032H425.127Z"
            fill="#1B6AE3"
          />
        </svg>
      </div>
      <div className="border-b border-slate-200/30 p-5">
        <Link
          to="/"
          className={`flex mb-4 items-center group hover:text-custom-vibrant-blue font-bold ${
            isHome ? "text-custom-vibrant-blue" : "text-custom-card-artist"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-7 h-7 mr-4 group-hover:text-custom-vibrant-blue ${
              isHome ? "text-custom-vibrant-blue" : "text-custom-card-artist"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          Home
        </Link>
        <Link
          to="/library"
          className={`flex items-center group hover:text-custom-vibrant-blue font-bold ${
            isLibrary ? "text-custom-vibrant-blue" : "text-custom-card-artist"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-7 h-7 mr-4 group-hover:text-custom-vibrant-blue ${
              isLibrary ? "text-custom-vibrant-blue" : "text-custom-card-artist"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
          Library
        </Link>
      </div>
      <div className="grow p-5 flex flex-col overflow-auto font-medium text-custom-neutrals-offwhite">
        <div className="flex">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-4 text-custom-neutrals-offwhite"
          >
            <path
              d="M17.68 7.72006V9.12006C17.68 9.80006 17.13 10.3601 16.43 10.3601C15.74 10.3601 15.18 9.80006 15.18 9.12006V7.72006C15.18 7.38854 15.3117 7.0706 15.5461 6.83618C15.7805 6.60176 16.0985 6.47006 16.43 6.47006C17.13 6.47006 17.68 7.03006 17.68 7.72006ZM13.25 8.86006V16.1301C13.25 16.4616 13.1183 16.7795 12.8839 17.0139C12.6495 17.2484 12.3315 17.3801 12 17.3801C11.6685 17.3801 11.3505 17.2484 11.1161 17.0139C10.8817 16.7795 10.75 16.4616 10.75 16.1301V8.86006C10.75 8.18006 11.31 7.61006 12 7.61006C12.69 7.61006 13.25 8.18006 13.25 8.86006ZM22 11.8001V13.2001C22 13.8801 21.44 14.4401 20.75 14.4401C20.06 14.4401 19.5 13.8801 19.5 13.2001V11.8001C19.5 11.1101 20.06 10.5601 20.75 10.5601C21.44 10.5601 22 11.1101 22 11.8001ZM4.5 11.8001V13.2001C4.5 13.8801 3.94 14.4401 3.25 14.4401C2.55 14.4401 2 13.8801 2 13.2001V11.8001C2 11.1101 2.55 10.5601 3.25 10.5601C3.94 10.5601 4.5 11.1101 4.5 11.8001ZM8.82 15.8801V17.2701C8.82 17.9501 8.26 18.5001 7.57 18.5001C6.88 18.5001 6.32 17.9501 6.32 17.2701V15.8801C6.32 15.1801 6.88 14.6301 7.57 14.6301C7.90152 14.6301 8.21946 14.7618 8.45388 14.9962C8.6883 15.2306 8.82 15.5485 8.82 15.8801ZM13.25 19.8601V21.2501C13.25 21.5816 13.1183 21.8995 12.8839 22.1339C12.6495 22.3684 12.3315 22.5001 12 22.5001C11.6685 22.5001 11.3505 22.3684 11.1161 22.1339C10.8817 21.8995 10.75 21.5816 10.75 21.2501V19.8601C10.75 19.5285 10.8817 19.2106 11.1161 18.9762C11.3505 18.7418 11.6685 18.6101 12 18.6101C12.3315 18.6101 12.6495 18.7418 12.8839 18.9762C13.1183 19.2106 13.25 19.5285 13.25 19.8601ZM13.25 3.75006V5.14006C13.25 5.47158 13.1183 5.78952 12.8839 6.02394C12.6495 6.25836 12.3315 6.39006 12 6.39006C11.6685 6.39006 11.3505 6.25836 11.1161 6.02394C10.8817 5.78952 10.75 5.47158 10.75 5.14006V3.75006C10.75 3.05006 11.31 2.50006 12 2.50006C12.3315 2.50006 12.6495 2.63176 12.8839 2.86618C13.1183 3.1006 13.25 3.41854 13.25 3.75006ZM17.68 12.8401V17.2701C17.68 17.9601 17.13 18.5001 16.43 18.5001C15.74 18.5001 15.18 17.9601 15.18 17.2701V12.8401C15.18 12.1401 15.74 11.5901 16.43 11.5901C17.13 11.5901 17.68 12.1401 17.68 12.8401ZM8.82 7.72006V12.1501C8.82 12.8501 8.26 13.4001 7.57 13.4001C7.40585 13.4001 7.2433 13.3677 7.09165 13.3049C6.93999 13.2421 6.80219 13.15 6.68612 13.0339C6.57004 12.9179 6.47797 12.7801 6.41515 12.6284C6.35233 12.4768 6.32 12.3142 6.32 12.1501V7.72006C6.32 7.38854 6.4517 7.0706 6.68612 6.83618C6.92054 6.60176 7.23848 6.47006 7.57 6.47006C7.90152 6.47006 8.21946 6.60176 8.45388 6.83618C8.6883 7.0706 8.82 7.38854 8.82 7.72006Z"
              fill="#FFF9EF"
            />
          </svg>
          <p>Your Recent Music</p>
        </div>
        <div ref={childDiv} className="h-full">
          {recent}
        </div>
      </div>
      <div className="text-white">a</div>
    </div>
  );
};
export default Sidebar;
