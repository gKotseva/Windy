<h1 align="center">🌬️ Windy</h1>
<p align="center">
  Modern Interactive Weather Application built with React
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue" />
  <img src="https://img.shields.io/badge/Vite-7-purple" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-38B2AC" />
  <img src="https://img.shields.io/badge/ReactQuery-5-ff4154" />
</p>

---

<h2>🚀 Overview</h2>

<p>
Windy is a responsive weather application that allows users to explore
real-time weather data through an interactive map interface.
</p>

<p>
The app focuses on performance, clean UI, smart data caching, and reactive user interaction.
</p>

---

<h2>✨ Features</h2>

<ul>
  <li>🗺️ Interactive map powered by React Leaflet</li>
  <li>📍 Click anywhere on the map to fetch weather for that location</li>
  <li>🔄 Reactive data fetching with automatic caching (React Query)</li>
  <li>🌙 Light & Dark mode toggle</li>
  <li>⚡ Fast performance with Vite</li>
  <li>📱 Fully responsive design</li>
  <li>🎨 Modern UI built with Tailwind CSS</li>
  <li>🧭 Client-side routing with React Router</li>
</ul>

---

<h2>🧠 How It Works</h2>

<ol>
  <li>
    When the application first loads, the user is prompted to allow browser location access.
  </li>
  <li>
    If permission is granted, the app retrieves the user's current geographic coordinates using the Geolocation API.
  </li>
  <li>
    Weather data for the detected location is fetched automatically from the Open-Meteo API.
  </li>
  <li>
    The response is cached and managed using React Query for optimized performance.
  </li>
  <li>
    The interactive map is available on a separate page.
  </li>
  <li>
    On the Map page, users can click anywhere to dynamically fetch weather data for the selected coordinates.
  </li>
</ol>

---

<h2>🛠️ Tech Stack</h2>

<h3>Frontend</h3>
<ul>
  <li>React</li>
  <li>Vite</li>
  <li>Tailwind CSS</li>
  <li>React Leaflet + Leaflet</li>
  <li>React Query</li>
  <li>React Router DOM</li>
</ul>

<h3>Weather API</h3>

<p>
Weather data is fetched from:
</p>

<p>
🌤️ <strong>Open-Meteo API</strong><br/>
Endpoint: https://api.open-meteo.com/
</p>

<p>
Open-Meteo provides free forecast APIs and does not require an API key.
</p>

---

<h2>📂 Project Structure</h2>

<pre>
├── public/
│── src/
│   ├── components/
│   ├── context/
│   ├── handlers/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
└── vite.config.js
</pre>

---

<h2>⚙️ Installation</h2>

<pre>
git clone
npm install
npm run dev
</pre>

<p>
App runs at:
<br/>
<strong>http://localhost:5173</strong>
</p>

---

<h2>🎨 Theming</h2>

<ul>
  <li>☀️ Light Mode</li>
  <li>🌙 Dark Mode</li>
</ul>

<p>
Theme switching is handled using React state management and Tailwind's dark mode utilities.
</p>

---

<h2>🌍 Future Improvements</h2>

<ul>
  <li>📌 Save favorite locations</li>
  <li>📌 Custom location approval window</li>
</ul>
