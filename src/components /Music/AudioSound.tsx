import { useAppSelector } from "../../hooks";

const AudioSound = () => {
  const playing = useAppSelector((state) => state.playing);

  if (!playing.id) return null;

  return (
    <audio
      className="hidden"
      src={`https://podz-backend.fly.dev/${playing.id}`}
      controls
      autoPlay
    />
  );
};
export default AudioSound;
