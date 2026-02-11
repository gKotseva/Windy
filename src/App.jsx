import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { Map } from "./pages/Map";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="flex gap-5 bg-[rgb(var(--background))] text-[rgb(var(--text))]">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
