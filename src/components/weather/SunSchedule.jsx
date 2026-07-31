import { TbSunset2Filled } from "react-icons/tb";

export const SunSchedule = ({ data }) => {
  const sunrise = data.daily.sunrise[0].split("T")[1];
  const sunset = data.daily.sunset[0].split("T")[1];

  return (
    <div className="card">
      <div className="card-heading flex gap-2">
        <TbSunset2Filled size={20} />
        Sun Schedule
      </div>

      <div className="flex gap-20">
        <div>
          <p className="card-body">Sunrise</p>
          <p className="card-highlight">{sunrise}</p>
        </div>

        <div>
          <p className="card-body">Sunset</p>
          <p className="card-highlight">{sunset}</p>
        </div>
      </div>
    </div>
  );
};
