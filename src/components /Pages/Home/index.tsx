import Header from "./Header";
import MusicCard from "../../Music/MusicCard";
import Section from "./Section";
import { useAppSelector } from "../../../hooks";
import { Recommendations } from "../../../types";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const recommendations: Recommendations[] = useAppSelector(
    (state) => state.recommendations
  );
  const sectionRef = useRef<HTMLDivElement>(null);
  const isLaptopScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const [limit, setLimit] = useState<number>(20);

  const getLimit = (width: number) => {
    const shouldBeLimit = Math.floor(width / 144);
    return width % 144 ? shouldBeLimit - 1 : shouldBeLimit;
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    setLimit(getLimit(section.offsetWidth));
    window.addEventListener("resize", () => {
      setLimit(getLimit(section.offsetWidth));
    });
  }, [sectionRef]);

  return isLaptopScreen ? (
    <div className="p-8" ref={sectionRef}>
      <Header />
      {recommendations.map((recommendation) => {
        return (
          <Section
            key={recommendation.id}
            title={recommendation.name}
            className="justify-around"
          >
            {recommendation.tracks.slice(0, limit).map((track) => (
              <MusicCard
                key={`${track.id}-${Math.floor(Math.random() * 100)}`}
                track={track}
              ></MusicCard>
            ))}
          </Section>
        );
      })}
    </div>
  ) : (
    <div className="p-8">
      <Header />
      {recommendations.map((recommendation) => (
        <Section key={recommendation.id} title={recommendation.name}>
          {recommendation.tracks.map((track) => (
            <MusicCard
              key={`${track.id}-${Math.floor(Math.random() * 100)}`}
              track={track}
            ></MusicCard>
          ))}
        </Section>
      ))}
    </div>
  );
};
export default Home;
