import {
  createContext,
  createRef,
  useCallback,
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
  updateAudioTime: (time: number) => void;
}

const audioRef = createRef<HTMLAudioElement>();

const AudioContext = createContext({ audioRef } as AudioType);

export const AudioContextProvider = (props: { children: React.ReactNode }) => {
  const [isPresent, setIsPresent] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const pause = useCallback(() => {
    audioRef.current?.pause();
    dispatch(setIsPlaying(false));
  }, [dispatch]);

  const play = () => {
    audioRef.current?.play();
    dispatch(setIsPlaying(true));
  };

  const updateAudioTime = (time: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
  };

  const reset = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.load();
    pause();
  }, [pause]);

  useEffect(() => {
    if (!audioRef.current) return;
    setIsPresent(true);
    audioRef.current.onended = reset;
  }, [dispatch, reset]);

  if (!isPresent) return;

  return (
    <AudioContext.Provider value={{ audioRef, pause, play, updateAudioTime }}>
      {props.children}
    </AudioContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAudioContext = () => useContext(AudioContext);
