import { useAppSelector } from "../../hooks";
import { useAudioContext } from "../../context/AudioContext";

const AudioSound = () => {
  const playing = useAppSelector((state) => state.playing);
  const { audioRef } = useAudioContext();

  return (
    <audio
      className="hidden"
      src={`https://podz-backend.fly.dev/${playing.id}`}
      controls
      autoPlay
      ref={audioRef}
    />
  );
};
export default AudioSound;
