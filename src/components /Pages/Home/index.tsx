import Header from "./Header";
import MusicCard from "../../Music/MusicCard";
import Section from "./Section";
import { useAppSelector } from "../../../hooks";
import { Recommendations } from "../../../types";

const Home = () => {
  const recommendations: Recommendations[] = useAppSelector(
    (state) => state.recommendations
  );
  console.log(recommendations);
  return (
    <div className="p-8">
      <Header />
      {recommendations.map((recommendation) => (
        <Section title={recommendation.name}>
          {recommendation.tracks.map((track) => (
            <MusicCard
              title={track.name}
              artist={track.artistName.join(", ")}
              image={track.imageUrl}
            ></MusicCard>
          ))}
        </Section>
      ))}
    </div>
  );
};
export default Home;
