import { motion } from "framer-motion";

const PlayingNowPage = ({
  isPageVisible,
  setIsPageVisible,
}: {
  isPageVisible: boolean;
  setIsPageVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const hide = {
    top: "100dvh",
  };

  const show = {
    top: "0",
  };

  console.log(isPageVisible);

  return (
    <motion.div
      className="flex flex-col bg-cover bg-center absolute h-screen right-0 left-0 bg-gradient-to-b from-[#0042a7] to-slate-950"
      initial={hide}
      animate={isPageVisible ? show : hide}
      transition={{ type: "spring", damping: 16 }}
    >
      <div className="m-5 absolute">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
          onClick={() => setIsPageVisible(false)}
        >
          <path
            fillRule="evenodd"
            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="grow flex justify-center items-center">
        <div className="w-80 h-80 bg-slate-400"></div>
      </div>
      <div className="mb-10">
        <div className="px-5 pb-2 mb-3 flex justify-between items-center">
          <div>
            <h1 className="text-custom-neutrals-offwhite sm:text-xl">
              Easy On Me
            </h1>
            <h1 className="text-sm text-custom-card-artist mt-1 sm:text-lg">
              Adele
            </h1>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 sm:w-8 sm:h-8 text-custom-card-artist"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
        </div>
        <div className="px-5">
          <input
            type="range"
            min="1"
            max="100"
            className="w-full h-1 bg-custom-neutrals-offwhite rounded-lg slider accent-custom-vibrant-blue"
          />
          <div className="flex justify-between mt-2">
            <p className="text-xs text-custom-card-artist sm:text-sm">2:01</p>
            <p className="text-xs text-custom-card-artist sm:text-sm">3:44</p>
          </div>
        </div>
        <div className="flex justify-center px-5 pb-10">
          <svg
            className="w-20 h-20 text-custom-vibrant-blue"
            viewBox="0 0 24 24"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="8"
              y="7"
              width="9"
              height="10"
              className="text-custom-neutrals-offwhite"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.25 12C2.25 6.615 6.615 2.25 12 2.25C17.385 2.25 21.75 6.615 21.75 12C21.75 17.385 17.385 21.75 12 21.75C6.615 21.75 2.25 17.385 2.25 12ZM16.274 11.017C16.4492 11.1145 16.5951 11.257 16.6967 11.4299C16.7983 11.6027 16.8519 11.7995 16.8519 12C16.8519 12.2005 16.7983 12.3973 16.6967 12.5701C16.5951 12.743 16.4492 12.8855 16.274 12.983L10.671 16.096C10.4998 16.191 10.3067 16.2397 10.1109 16.2373C9.91513 16.2348 9.72336 16.1813 9.55458 16.082C9.3858 15.9828 9.24586 15.8411 9.14859 15.6712C9.05133 15.5012 9.00011 15.3088 9 15.113V8.887C9 8.03 9.921 7.487 10.671 7.904L16.274 11.017Z"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};
export default PlayingNowPage;
