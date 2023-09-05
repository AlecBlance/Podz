import Home from "./components /Home";
import MobileNavigation from "./components /MobileNavigation";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Home />
      <MobileNavigation />
    </div>
  );
};
export default App;
