import { FaWind } from "react-icons/fa";
import { ProgressBar } from "../ui/ProgressBar";

export const AirQuality = ({ data }) => {
  const aqi = data.airQuality.current.us_aqi;

  const getAQILevel = (value) => {
    if (value <= 50) return "Good";
    if (value <= 100) return "Moderate";
    if (value <= 150) return "Unhealthy";
    if (value <= 200) return "Very unhealthy";
    return "Hazardous";
  };

  const getMessage = (value) => {
    if (value <= 50) return "Air quality is satisfactory.";
    if (value <= 100) return "Air quality is acceptable.";
    if (value <= 150) return "Sensitive groups should take care.";
    return "Avoid prolonged outdoor exposure.";
  };

  return (
    <div className="card">
      <div className="card-heading flex gap-2">
        <FaWind size={20} />
        Air Quality
      </div>

      <div className="card-body flex flex-col gap-2">
        <p className="card-highlight">
          {aqi} {getAQILevel(aqi)}
        </p>

        <ProgressBar value={(aqi / 300) * 100} />

        <p>{getMessage(aqi)}</p>
      </div>
    </div>
  );
};
