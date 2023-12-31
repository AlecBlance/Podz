import { ChangeEvent, RefObject, useEffect, useRef, useState } from "react";
import Page from "./Page";
import { useAppSelector, useConvertToTime, useFavorite } from "../../../hooks";
import { useAudioContext } from "../../../context/AudioContext";

const Footer = () => {
  const [isPageVisible, setIsPageVisible] = useState<boolean>(false);
  const playing = useAppSelector((state) => state.playing);
  const inputRef = useRef<HTMLInputElement>(null);
  const { audioRef, updateAudioTime, play, pause } = useAudioContext();
  const pageRef = useRef<{
    input: RefObject<HTMLInputElement>;
    time: RefObject<HTMLParagraphElement>;
  }>(null);
  const isPlaying = useAppSelector((state) => state.audio.isPlaying);
  const isLiked = useAppSelector((state) =>
    state.library.some((liked) => liked.id === playing.id)
  );
  const [like, unlike] = useFavorite(playing);
  const convertToTime = useConvertToTime();

  onpopstate = () => {
    if (!isPageVisible) return;
    setIsPageVisible(false);
    history.go(1);
  };

  useEffect(() => {
    const currentAudio = audioRef.current;
    const currentInput = inputRef.current;
    const pageCurrentInput = pageRef.current?.input.current;
    const pageCurrentTime = pageRef.current?.time.current;
    if (!(currentAudio && playing.id)) return;
    currentAudio.ontimeupdate = () => {
      if (!(currentInput && pageCurrentInput && pageCurrentTime)) return;
      const currentTime = currentAudio.currentTime.toString();
      currentInput.value = currentTime;
      pageCurrentInput.value = currentTime;
      pageCurrentTime.innerText = convertToTime(parseInt(currentTime));
    };
  }, [audioRef, convertToTime, playing.id]);

  return (
    <div className="bg-[#131313] flex flex-col">
      {playing.id && (
        <input
          type="range"
          className="slider w-full h-1 z-10"
          min="1"
          max={playing.duration}
          value={audioRef.current?.currentTime}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            updateAudioTime(parseInt(e.target.value))
          }
          ref={inputRef}
        />
      )}

      <div className="flex">
        <div className="flex items-center w-1/3 h-16">
          {playing.id && (
            <>
              <div
                className="cursor-pointer flex items-center overflow-hidden"
                onClick={() => setIsPageVisible(true)}
              >
                <div
                  className={`w-16 h-16 ${
                    !playing.image && "bg-slate-400"
                  } shrink-0 bg-cover bg-center`}
                  style={{
                    backgroundImage: playing.image && `url('${playing.image}')`,
                  }}
                ></div>
                <div className="ml-3 grow overflow-hidden">
                  <h1 className="text-sm text-custom-neutrals-offwhite truncate">
                    {playing.title}
                  </h1>
                  <p className="text-xs text-custom-card-artist truncate">
                    {playing.author}
                  </p>
                </div>
              </div>
              <div>
                {isLiked ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-custom-vibrant-blue shrink-0 ml-4"
                    onClick={unlike}
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5   ml-4 text-custom-card-artist"
                    onClick={like}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                )}
              </div>
            </>
          )}
        </div>
        <div className="w-1/3 flex justify-center items-center grow">
          {isPlaying && playing.id ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-12 h-12   text-custom-vibrant-blue"
              onClick={pause}
            >
              <rect
                x="8"
                y="7"
                width="9"
                height="10"
                className="text-custom-neutrals-offwhite"
              />
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM9 8.25a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75H9zm5.25 0a.75.75 0 00-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75h-.75z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-12 h-12 text-custom-vibrant-blue"
              viewBox="0 0 24 24"
              fill="currentcolor"
              xmlns="http://www.w3.org/2000/svg"
              onClick={play}
            >
              <rect
                x="8"
                y="7"
                width="9"
                height="10"
                className="text-custom-neutrals-offwhite"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.25 12C2.25 6.615 6.615 2.25 12 2.25C17.385 2.25 21.75 6.615 21.75 12C21.75 17.385 17.385 21.75 12 21.75C6.615 21.75 2.25 17.385 2.25 12ZM16.274 11.017C16.4492 11.1145 16.5951 11.257 16.6967 11.4299C16.7983 11.6027 16.8519 11.7995 16.8519 12C16.8519 12.2005 16.7983 12.3973 16.6967 12.5701C16.5951 12.743 16.4492 12.8855 16.274 12.983L10.671 16.096C10.4998 16.191 10.3067 16.2397 10.1109 16.2373C9.91513 16.2348 9.72336 16.1813 9.55458 16.082C9.3858 15.9828 9.24586 15.8411 9.14859 15.6712C9.05133 15.5012 9.00011 15.3088 9 15.113V8.887C9 8.03 9.921 7.487 10.671 7.904L16.274 11.017Z"
              />
            </svg>
          )}
        </div>
        <div className="flex items-center pr-5 w-1/4">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-3 text-custom-neutrals-offwhite"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
            />
          </svg>
          <input type="range" className="slider h-1" /> */}
        </div>
      </div>
      <Page
        isPageVisible={isPageVisible}
        setIsPageVisible={setIsPageVisible}
        playing={playing}
        isPlaying={isPlaying}
        ref={pageRef}
      />
    </div>
  );
};
export default Footer;
