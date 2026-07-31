import { createContext, useContext, useEffect, useState } from "react";

const LocationContext = createContext();

const FALLBACK = {
  latitude: 40.7128,
  longitude: -74.006,
};

export const LocationProvider = ({ children }) => {
  const [coords, setCoords] = useState(null);

  const [locationEnabled, setLocationEnabled] = useState(
    localStorage.getItem("location-choice") === "granted",
  );

  const [showPrompt, setShowPrompt] = useState(
    localStorage.getItem("location-choice") !== "granted",
  );

  useEffect(() => {
    if (locationEnabled) {
      getCurrentLocation();
    } else {
      setCoords(FALLBACK);
    }
  }, []);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setCoords({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      },
      () => {
        setCoords(FALLBACK);
      },
    );
  };

  const allowLocation = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        localStorage.setItem("location-choice", "granted");

        setLocationEnabled(true);

        setCoords({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });

        setShowPrompt(false);
      },
      () => {
        setCoords(FALLBACK);
        setShowPrompt(false);
      },
    );
  };

  const disableLocation = () => {
    localStorage.removeItem("location-choice");

    setLocationEnabled(false);
    setCoords(FALLBACK);
  };

  const toggleLocation = () => {
    if (locationEnabled) {
      disableLocation();
    } else {
      allowLocation();
    }
  };

  const skipLocation = () => {
    setCoords(FALLBACK);
    setShowPrompt(false);
  };

  return (
    <LocationContext.Provider
      value={{
        coords,
        setCoords,
        locationEnabled,
        showPrompt,
        allowLocation,
        skipLocation,
        disableLocation,
        toggleLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  return useContext(LocationContext);
};
