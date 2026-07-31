import { useState } from "react";
import { getSearchLocation } from "../../api/weather";
import { useLocation } from "../../context/LocationContext";

export const Search = () => {
  const [city, setCity] = useState("");
  const [searchData, setSearchData] = useState(null);
  const { setCoords } = useLocation();

  const showCities = async (value) => {
    setCity(value);
    const data = await getSearchLocation(value);
    setSearchData(data.results);
  };

  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-neutral pointer-events-none"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <input
        placeholder="Search city..."
        className="text-neutral w-full rounded-input border border-outline p-2 pl-10 outline-none"
        value={city}
        onChange={(e) => showCities(e.target.value)}
        name="search"
      />
      {searchData && (
        <div className="card absolute w-full mt-1">
          {searchData.map((e, index) => (
            <p
              className="card-body flex gap-2 hover:text-primary hover:cursor-pointer"
              onClick={() => {
                setCoords({
                  latitude: e.latitude,
                  longitude: e.longitude,
                });
                setSearchData(null);
              }}
              key={index}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              {e.name}, {e.country}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
