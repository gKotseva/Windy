import "leaflet/dist/leaflet.css";

import { useRef } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import { useWeather } from "../context/Weather";
import { WeatherCard } from "./WeatherCard";

export const LocationMap = () => {
  const { state } = useWeather();
  const markerRef = useRef(null);

  return (
    <MapContainer
      center={[state.location.latitude, state.location.longitude]}
      zoom={5}
      style={{ height: "100vh", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker
        ref={markerRef}
        position={[state.location.latitude, state.location.longitude]}
      >
        <Popup>
          <WeatherCard />
        </Popup>
      </Marker>
      <MapClickHandler setLocation={state.setLocation} markerRef={markerRef} />
    </MapContainer>
  );
};

const MapClickHandler = ({ setLocation, markerRef }) => {
  useMapEvent("click", (e) => {
    const { lat, lng } = e.latlng;
    setLocation({ latitude: lat, longitude: lng });

    if (markerRef.current) {
      markerRef.current.openPopup();
    }
  });

  return null;
};
