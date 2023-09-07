import Home from "./components /Home";
import MobileNavigation from "./components /MobileNavigation";
import { Route, Routes } from "react-router-dom";
import Search from "./components /Search";
import Library from "./components /Library";

const App = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden relative">
      <div className="grow overflow-y-auto scrollbar-hide">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </div>
      <MobileNavigation />
    </div>
  );
};
export default App;
