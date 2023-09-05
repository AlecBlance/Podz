import Home from "./components /Home";
import MobileNavigation from "./components /MobileNavigation";
import { Route, Routes } from "react-router-dom";
import Search from "./components /Search";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="p-5 grow overflow-y-auto scrollbar-hide">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
      <MobileNavigation />
    </div>
  );
};
export default App;
