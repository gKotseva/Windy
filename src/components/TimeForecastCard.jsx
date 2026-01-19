import { FaCloud } from "react-icons/fa";

export const TimeForecastCard = () => {
  return (
    <div className="flex flex-col gap-4 items-center px-6">
      <h3 className="font-bold">6:00 AM</h3>
      <FaCloud color="white" size={50} />
      <h3 className="text-white">25&#176;</h3>
    </div>
  );
};
