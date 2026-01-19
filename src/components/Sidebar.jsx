import { SiOpenstreetmap } from "react-icons/si";
import { FaList } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Toggle } from "./Toggle";

export const Sidebar = () => {
  return (
    <div className="field flex flex-col justify-between min-h-screen w-30 items-center pt-20">
      <div className="flex flex-col gap-10 items-center">
        <div className="flex flex-col items-center cursor-pointer">
          <TiWeatherPartlySunny size={35} />
          <p className="mt-2">Weather</p>
        </div>
        <div className="cursor-pointer">
          <FaList size={35} />
          <p className="mt-2">Cities</p>
        </div>
        <div className="cursor-pointer">
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
