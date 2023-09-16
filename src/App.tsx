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
import { useAppDispatch } from "./hooks";
import AudioSound from "./components /Music/AudioSound";
import { AudioContextProvider } from "./context/AudioContext";
import { initializeLibrary } from "./reducers/libraryReducer";
import { initializeRecent } from "./reducers/recentReducer";

const App = () => {
  const dispatch = useAppDispatch();
  const isLaptopScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    dispatch(initializeRecommendations());
    dispatch(initializeLibrary());
    dispatch(initializeRecent());
  }, [dispatch]);

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
      {isLaptopScreen && (
        <AudioContextProvider>
          <Footer />
        </AudioContextProvider>
      )}
      <AudioSound />
    </div>
  );
};
export default App;
