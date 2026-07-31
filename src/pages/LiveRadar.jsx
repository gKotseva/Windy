import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { LuArrowUpRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export const LiveRadar = ({ data, view }) => {
  const navigate = useNavigate();
  const [radarPath, setRadarPath] = useState(null);

  useEffect(() => {
    const fetchRadar = async () => {
      const res = await fetch(
        "https://api.rainviewer.com/public/weather-maps.json",
      );

      const data = await res.json();

      const latestRadar = data.radar.past[data.radar.past.length - 1];

      setRadarPath(`${data.host}${latestRadar.path}`);
    };

    fetchRadar();
  }, []);

  return (
    <div className={view !== "overview" ? "px-20 py-10" : "p-0"}>
      <div
        className={`relative ${view === "full" ? "h-screen" : "h-[264px]"} w-full overflow-hidden rounded-card`}
      >
        <MapContainer
          center={[data.latitude, data.longitude]}
          zoom={7}
          minZoom={5}
          maxZoom={7}
          zoomControl={true}
          className="h-full w-full"
        >
          <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {radarPath && (
            <TileLayer
              url={`${radarPath}/256/{z}/{x}/{y}/2/1_1.png`}
              opacity={1}
              minZoom={5}
              maxZoom={12}
            />
          )}
          {view === "overview" && (
            <div
              className="hover:cursor-pointer"
              onClick={() => navigate("/live-radar")}
            >
              <DisableMapInteraction />
              <div className="absolute inset-0 bg-black/20" />
              <LuArrowUpRight
                size={60}
                className="absolute z-[2000] text-neutral right-0 top-[-5px] right-[-5px]"
              />
              <div className="absolute left-0 bottom-0 z-[1000] p-2">
                <div className="uppercase tracking-widest">
                  <p className="font-bold bg-white text-black py-1 px-5 rounded-2xl">
                    Live Radar
                  </p>
                </div>
              </div>
            </div>
          )}
        </MapContainer>
      </div>
    </div>
  );
};

const DisableMapInteraction = () => {
  const map = useMap();

  useEffect(() => {
    map.scrollWheelZoom.disable();
    map.doubleClickZoom.disable();
    map.dragging.disable();
    map.touchZoom.disable();
    map.boxZoom.disable();
    map.keyboard.disable();

    return () => {
      map.scrollWheelZoom.enable();
      map.doubleClickZoom.enable();
      map.dragging.enable();
      map.touchZoom.enable();
      map.boxZoom.enable();
      map.keyboard.enable();
    };
  }, [map]);

  return null;
};
