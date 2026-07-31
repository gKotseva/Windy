export const Details = ({ data }) => {
  const currentHourIndex = data.hourly.time.findIndex(
    (time) => time.slice(0, 13) === data.current.time.slice(0, 13),
  );

  const visibility = data.hourly.visibility[currentHourIndex];

  const uv = data.daily.uv_index_max[0];

  const getUVLevel = (value) => {
    if (value <= 2) return "Low";
    if (value <= 5) return "Moderate";
    if (value <= 7) return "High";
    if (value <= 10) return "Very high";
    return "Extreme";
  };

  return (
    <div className="card grid grid-cols-2 items-center flex-wrap">
      <div>
        <p className="card-body">Humidity</p>
        <p className="card-highlight">{data.current.relative_humidity_2m}%</p>
      </div>

      <div>
        <p className="card-body">Wind</p>
        <p className="card-highlight">
          {Math.round(data.current.wind_speed_10m)} km/h
        </p>
      </div>

      <div>
        <p className="card-body">UV Index</p>
        <p className="card-highlight">
          {uv} {getUVLevel(uv)}
        </p>
      </div>

      <div>
        <p className="card-body">Visibility</p>
        <p className="card-highlight">{(visibility / 1609).toFixed(1)} mi</p>
      </div>
    </div>
  );
};
