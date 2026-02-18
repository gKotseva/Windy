import { SiOpenstreetmap } from "react-icons/si";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Toggle } from "./Toggle";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="field flex flex-col justify-between min-h-screen w-30 items-center pt-20">
      <div className="flex flex-col gap-10 items-center">
        <div
          className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105 hover:text-white"
          onClick={() => navigate("/")}
        >
          <TiWeatherPartlySunny size={35} />
          <p className="mt-2">Weather</p>
        </div>
        <div
          className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:text-white"
          onClick={() => navigate("/map")}
        >
          <SiOpenstreetmap size={35} />
          <p className="mt-2">Map</p>
        </div>
      </div>
      <div>
        <Toggle />
      </div>
    </div>
  );
};
