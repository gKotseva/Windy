import { useEffect, useRef, useState } from "react";
import { useWeather } from "../context/Weather";
import { getCityCoordinates } from "../handlers/location";
import { Loader } from "./Loader";

export const Search = () => {
  const { state } = useWeather();
  const [formData, setFormData] = useState({ city: "" });
  const [searchData, setSearchData] = useState(null);
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setFormData((state) => ({
      ...state,
      city: e.target.value,
    }));
  };

  const searchHandler = async () => {
    if (!formData.city.trim()) return;
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      const result = await getCityCoordinates(formData.city);
      setSearchData(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        placeholder="Search for cities"
        className="input-style"
        onChange={changeHandler}
        value={formData.city}
        onKeyDown={(e) => e.key === "Enter" && searchHandler()}
      ></input>
      <div>
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader fullPage={false} />
          </div>
        ) : searchData ? (
          <div className="flex gap-1 flex-col bg-white mt-1 p-2 rounded-2xl">
            {searchData.map((e) => (
              <h1
                className="field p-1 px-10 secondary-text hover:scale-101 cursor-pointer"
                key={e.latitude + e.longitude}
                onClick={() =>
                  state.setLocation({
                    latitude: e.latitude,
                    longitude: e.longitude,
                  })
                }
              >
                {e.name} - {e.country} - {e.admin1}
              </h1>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};
