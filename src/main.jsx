import "./index.css";
import "leaflet/dist/leaflet.css";

import { App } from "./App.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LocationProvider } from "./context/LocationContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LocationProvider>
      <App />
    </LocationProvider>
  </BrowserRouter>,
);
