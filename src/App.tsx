import Header from "./components /Header";
import MobileNavigation from "./components /MobileNavigation";
import MusicCard from "./components /MusicCard";
import Section from "./components /Section";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="p-5 grow overflow-y-auto scrollbar-hide">
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
      <MobileNavigation />
    </div>
  );
};
export default App;
