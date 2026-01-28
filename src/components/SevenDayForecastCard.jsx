import { FaCloud } from "react-icons/fa";

export const SevenDayForecastCard = () => {
  return (
    <div className="flex gap-10 items-center py-6 w-100 justify-center">
      <h3 className="font-bold">Today</h3>
      <div className="flex items-center gap-2">
        <FaCloud color="white" size={50} />
        <p className="text-white">Cloudy</p>
      </div>
      <h3 className="text-white">25&#176;/22&#176;</h3>
    </div>
  );
};
