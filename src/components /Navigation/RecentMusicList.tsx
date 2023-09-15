import { useRef, useState, useEffect } from "react";
import { useAppSelector } from "../../hooks";
import RecentMusic from "../Music/RecentMusic";

const RecentMusicList = () => {
  const recent = useAppSelector((state) => state.recent);
  const sectionRef = useRef<HTMLDivElement>(null);

  const section = sectionRef.current;
  const [limit, setLimit] = useState<number>(20);

  useEffect(() => {
    if (!section) return;
    setLimit(getLimit(section.offsetHeight));
    window.addEventListener("resize", () => {
      setLimit(getLimit(section.offsetHeight));
    });
  }, [section]);

  const getLimit = (height: number) => {
    const shouldBeLimit = Math.floor(height / 60);
    return height % 60 ? shouldBeLimit - 1 : shouldBeLimit;
  };

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
