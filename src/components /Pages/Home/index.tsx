import Header from "./Header";
import MusicCard from "../../Music/MusicCard";
import Section from "./Section";
import { useAppSelector } from "../../../hooks";
import { Recommendations } from "../../../types";

const Home = () => {
  const recommendations: Recommendations[] = useAppSelector(
    (state) => state.recommendations
  );
  return (
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
