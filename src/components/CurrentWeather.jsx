import { FaSun } from "react-icons/fa";

export const CurrentWeather = () => {
  return (
    <div className="flex gap-60 items-center max-h-56 p-20">
      <div>
        <h1 className="text-5xl font-bold">Sofia</h1>
        <p className="text-zinc-400">Chance of rain: 0%</p>
        <h1 className="text-5xl font-bold mt-15">25&#176;</h1>
      </div>
      <div>
        <FaSun color="orange" size={90} />
      </div>
    </div>
  );
};
