import { useRef, useState, useEffect } from "react";
import { useAppSelector } from "../../hooks";
import RecentMusic from "../Music/RecentMusic";

const RecentMusicList = () => {
  const recent = useAppSelector((state) => state.recent);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [limit, setLimit] = useState<number>(20);

  const getLimit = (height: number) => {
    const shouldBeLimit = Math.floor(height / 60);
    return height % 60 ? shouldBeLimit - 1 : shouldBeLimit;
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    setLimit(getLimit(section.offsetHeight));
    window.addEventListener("resize", () => {
      setLimit(getLimit(section.offsetHeight));
    });
  }, [sectionRef]);

  return (
    <div className="h-full overflow-hidden" ref={sectionRef}>
      {recent
        .slice()
        .reverse()
        .slice(0, limit)
        .map((played) => (
          <RecentMusic key={`${played.id}-${Math.random()}`} played={played} />
        ))}
    </div>
  );
};
export default RecentMusicList;
