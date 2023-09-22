import { useRef, useState, useEffect, memo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import RecentMusic from "../Music/RecentMusic";
import { setRecentLimit } from "../../reducers/recentReducer";

const RecentMusicList = memo(() => {
  const recent = useAppSelector((state) => state.recent.recentMusic);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [limit, setLimit] = useState<number>(20);
  const dispatch = useAppDispatch();

  const getLimit = (height: number) => {
    const shouldBeLimit = Math.floor(height / 60);
    return height % 60 ? shouldBeLimit - 1 : shouldBeLimit;
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const limit = getLimit(section.offsetHeight);
    setLimit(limit);
    dispatch(setRecentLimit(limit));
    window.addEventListener("resize", () => {
      const onChangeLimit = getLimit(section.offsetHeight);
      setLimit(onChangeLimit);
      dispatch(setRecentLimit(onChangeLimit));
    });
  }, [sectionRef, dispatch]);

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
});
export default RecentMusicList;
