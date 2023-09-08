import { MusicCardProps } from "../../types";

const RecentMusic = ({ title, artist, image }: MusicCardProps) => {
  return (
    <div className="text-white mt-3 flex items-center">
      <div className="bg-slate-400 w-11 h-11 shrink-0 mr-2">{image}</div>
      <div className="overflow-hidden grow">
        <h1 className="truncate text-sm">{title}</h1>
        <p className="truncate text-xs text-custom-card-artist mt-1">
          {artist}
        </p>
      </div>
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 ml-2 w-5 h-5"
        >
          <path
            d="M6.5 9C6.9 9 9 5.66667 10 4H11V18.5L10 20L6 15L3 14.5L2.5 9.5C3.66667 9.33333 6.1 9 6.5 9Z"
            fill="#1B6AE3"
          />
          <path
            d="M15 7.99997C15.621 8.46571 16.125 9.06963 16.4721 9.76391C16.8193 10.4582 17 11.2237 17 12C17 12.7762 16.8193 13.5418 16.4721 14.236C16.125 14.9303 15.621 15.5342 15 16M17.7 4.99997C18.744 5.84362 19.586 6.9101 20.1645 8.12129C20.7429 9.33249 21.0431 10.6577 21.0431 12C21.0431 13.3422 20.7429 14.6675 20.1645 15.8787C19.586 17.0898 18.744 18.1563 17.7 19M6 15H4C3.73478 15 3.48043 14.8946 3.29289 14.7071C3.10536 14.5195 3 14.2652 3 14V9.99997C3 9.73476 3.10536 9.4804 3.29289 9.29287C3.48043 9.10533 3.73478 8.99997 4 8.99997H6L9.5 4.49997C9.5874 4.3302 9.73265 4.1973 9.90949 4.12526C10.0863 4.05323 10.2831 4.04683 10.4643 4.10722C10.6454 4.1676 10.799 4.29078 10.8972 4.45451C10.9955 4.61824 11.0319 4.81171 11 4.99997V19C11.0319 19.1882 10.9955 19.3817 10.8972 19.5454C10.799 19.7092 10.6454 19.8323 10.4643 19.8927C10.2831 19.9531 10.0863 19.9467 9.90949 19.8747C9.73265 19.8027 9.5874 19.6697 9.5 19.5L6 15Z"
            stroke="#1B6AE3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
export default RecentMusic;
