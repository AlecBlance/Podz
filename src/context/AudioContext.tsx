import {
  createContext,
  createRef,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAppDispatch } from "../hooks";
import { setIsPlaying } from "../reducers/audioReducer";

interface AudioType {
  audioRef: React.RefObject<HTMLAudioElement>;
  pause: () => void;
  play: () => void;
}

const audioRef = createRef<HTMLAudioElement>();

const AudioContext = createContext({ audioRef } as AudioType);

export const AudioContextProvider = (props: { children: React.ReactNode }) => {
  const [isPresent, setIsPresent] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const pause = () => {
    audioRef.current?.pause();
    dispatch(setIsPlaying(false));
  };

  const play = () => {
    audioRef.current?.play();
    dispatch(setIsPlaying(true));
  };

  useEffect(() => {
    if (audioRef.current) setIsPresent(true);
  }, []);

  if (!isPresent) return;

  return (
    <AudioContext.Provider value={{ audioRef, pause, play }}>
      {props.children}
    </AudioContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAudioContext = () => useContext(AudioContext);
