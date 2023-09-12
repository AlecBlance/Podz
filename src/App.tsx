import Home from "./components /Pages/Home";
import MobileNavigation from "./components /Navigation/Mobile";
import { Route, Routes } from "react-router-dom";
import Search from "./components /Pages/Search";
import Library from "./components /Pages/Library";
import { useMediaQuery } from "react-responsive";
import Sidebar from "./components /Navigation/Sidebar";
import Footer from "./components /NowPlaying/Desktop/Footer";
import { useEffect } from "react";
import { initializeRecommendations } from "./reducers/recommendationsReducer";
import { useAppDispatch, useAppSelector } from "./hooks";

const App = () => {
  const dispatch = useAppDispatch();
  const isLaptopScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const playing = useAppSelector((state) => state.playing.id);

  useEffect(() => {
    dispatch(initializeRecommendations());
  });

  return (
    <div className="h-screen flex flex-col overflow-hidden relative">
      <div className="flex flex-col lg:flex-row overflow-hidden relative h-full">
        {isLaptopScreen && <Sidebar />}
        <div
          className={`grow overflow-y-auto lg:w-3/4 ${
            !isLaptopScreen && "scrollbar-hide"
          }`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </div>
        {!isLaptopScreen && <MobileNavigation />}
      </div>
      {isLaptopScreen && <Footer />}
      {playing && (
        <audio
          className="hidden"
          src={`https://podz-backend.fly.dev/${playing}`}
          controls
          autoPlay
        />
      )}
    </div>
  );
};
export default App;
