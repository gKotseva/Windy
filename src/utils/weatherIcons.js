export const dayIcons = {
  0: "/sun.png",
  1: "/day-cloudy.png",
  2: "/day-cloudy.png",
  3: "/day-cloudy.png",
  45: "/day-foggy.png",
  48: "/day-foggy.png",
  51: "/day-rain.png",
  53: "/day-rain.png",
  55: "/day-rain.png",
  61: "/day-rain.png",
  63: "/day-rain.png",
  65: "/day-rain.png",
  71: "/day-snow.png",
  73: "/day-snow.png",
  75: "/day-snow.png",
  95: "/day-thunderstorm.png",
  96: "/day-thunderstorm.png",
  99: "/day-thunderstorm.png",
};

const nightIcons = {
  0: "/night-clear.png",
  1: "/night-cloudy.png",
  2: "/night-cloudy.png",
  3: "/night-cloudy.png",
};

export const getWeatherIcon = (code, time) => {
  if (!time) {
    return dayIcons[code] || "sun.png";
  }

  const hour = parseInt(time.split(":")[0]);
  const isNight = hour < 6 || hour >= 18;

  if (isNight && nightIcons[code]) {
    return nightIcons[code];
  }

  return dayIcons[code] || "sun.png";
};
