import Header from "./Header";
import MusicCard from "./MusicCard";
import Section from "./Section";

const Home = () => {
  return (
    <div className="p-8">
      <Header />
      <Section title="Jump back in">
        <MusicCard title="Sample" artist="Artist" />
        <MusicCard
          title="Circle Timeaaaaaaaaaaaaaaaaaaaaaaaaaa"
          artist="Dear Media"
        />
        <MusicCard
          title="Circle Timeaaaaaaaaaaaaaaaaaaaaaaaaaa"
          artist="Dear Media"
        />
        <MusicCard
          title="Circle Timeaaaaaaaaaaaaaaaaaaaaaaaaaa"
          artist="Dear Media"
        />
      </Section>
      <Section title="Recommended songs">
        <MusicCard
          title="Circle Timeaaaaaaaaaaaaaaaaaaaaaaaaaa"
          artist="Dear Media"
        />
        <MusicCard
          title="Circle Timeaaaaaaaaaaaaaaaaaaaaaaaaaa"
          artist="Dear Media"
        />
        <MusicCard
          title="Circle Timeaaaaaaaaaaaaaaaaaaaaaaaaaa"
          artist="Dear Media"
        />
        <MusicCard
          title="Circle Timeaaaaaaaaaaaaaaaaaaaaaaaaaa"
          artist="Dear Media"
        />
      </Section>
      <Section title="Jump back in">
        <MusicCard title="Sample" artist="Artist" />
        <MusicCard
          title="Circle Timeaaaaaaaaaaaaaaaaaaaaaaaaaa"
          artist="Dear Media"
        />
        <MusicCard
          title="Circle Timeaaaaaaaaaaaaaaaaaaaaaaaaaa"
          artist="Dear Media"
        />
        <MusicCard
          title="Circle Timeaaaaaaaaaaaaaaaaaaaaaaaaaa"
          artist="Dear Media"
        />
      </Section>
      <Section title="Jump back in">
        <MusicCard title="Sample" artist="Artist" />
        <MusicCard
          title="Circle Timeaaaaaaaaaaaaaaaaaaaaaaaaaa"
          artist="Dear Media"
        />
        <MusicCard
          title="Circle Timeaaaaaaaaaaaaaaaaaaaaaaaaaa"
          artist="Dear Media"
        />
        <MusicCard
          title="Circle Timeaaaaaaaaaaaaaaaaaaaaaaaaaa"
          artist="Dear Media"
        />
      </Section>
    </div>
  );
};
export default Home;
