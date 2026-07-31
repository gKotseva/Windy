import { IoSunny } from "react-icons/io5";
import { ProgressBar } from "../ui/ProgressBar";

export const UVIndex = ({ data }) => {
  const uv = data.daily.uv_index_max[0];

  const getUVLevel = (value) => {
    if (value <= 2) return "Low";
    if (value <= 5) return "Moderate";
    if (value <= 7) return "High";
    if (value <= 10) return "Very high";
    return "Extreme";
  };

  const progressValue = Math.min((uv / 11) * 100, 100);

  return (
    <div className="card">
      <div className="card-heading flex gap-2">
        <IoSunny size={20} />
        UV index
      </div>

      <div className="card-body flex flex-col gap-2">
        <p className="card-highlight">
          {uv} {getUVLevel(uv)}
        </p>

        <ProgressBar value={progressValue} />

        <p>
          {uv <= 2
            ? "No protection needed."
            : uv <= 5
              ? "Use sun protection."
              : "Avoid direct sunlight."}
        </p>
      </div>
    </div>
  );
};
