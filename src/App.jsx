import { Nav } from "./components/navigation/NavBar";
import { Loader } from "./components/ui/Loader";
import { LocationPrompt } from "./components/ui/LocationPrompt";
import { Overview } from "./pages/Overview";
import { useWeather } from "./hooks/useWeather";
import { useLocation } from "./context/LocationContext";
import { Route, Routes } from "react-router-dom";
import { LiveRadar } from "./pages/LiveRadar";

export const App = () => {
  const { coords, showPrompt, allowLocation, skipLocation } = useLocation();

  const { weather } = useWeather(coords?.latitude, coords?.longitude);

  return (
    <>
      {showPrompt && (
        <LocationPrompt onAllow={allowLocation} onSkip={skipLocation} />
      )}
      {coords && !weather && <Loader />}
      {weather && (
        <div className="bg-background text-body">
          <Nav />
          <Routes>
            <Route path="/" element={<Overview data={weather} />}></Route>
            <Route
              path="/live-radar"
              element={<LiveRadar data={weather} view="full" />}
            ></Route>
          </Routes>
        </div>
      )}
    </>
  );
};
