import Home from "./components /Home";
import MobileNavigation from "./components /MobileNavigation";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="p-5 grow overflow-y-auto scrollbar-hide">
        <Home />
      </div>
      <MobileNavigation />
    </div>
  );
};
export default App;
