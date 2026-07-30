import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

export const LiveRadar = ({ data, view }) => {
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
    <div className="px-20 py-10">
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
            <>
              <DisableMapInteraction />
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />
              <div className="absolute left-0 bottom-0 z-[1000] bg-black/40 p-4 backdrop-blur-md">
                <div className="uppercase tracking-widest">
                  <p className="text-body font-bold text-text">Live Radar</p>
                  <p className="text-body text-white">
                    Real-time precipitation
                  </p>
                </div>
              </div>
            </>
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
