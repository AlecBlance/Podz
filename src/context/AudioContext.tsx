import { createContext, createRef, useContext } from "react";

const audioRef = createRef<HTMLAudioElement>();
const AudioContext = createContext(audioRef);

export const AudioContextProvider = (props: { children: React.ReactNode }) => {
  return (
    <AudioContext.Provider value={audioRef}>
      {props.children}
    </AudioContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAudioContext = () => useContext(AudioContext);
