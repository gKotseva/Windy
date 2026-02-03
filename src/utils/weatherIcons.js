import {
  WiDaySunny,
  WiDaySunnyOvercast,
  WiDayCloudy,
  WiCloudy,
  WiRain,
  WiRainWind,
  WiSnow,
  WiThunderstorm,
  WiFog,
  WiNightClear,
  WiNightAltCloudy,
  WiNightAltPartlyCloudy,
} from "react-icons/wi";

export const dayIcons = {
  0: WiDaySunny,
  1: WiDaySunnyOvercast,
  2: WiDayCloudy,
  3: WiCloudy,
  45: WiFog,
  48: WiFog,
  51: WiRain,
  53: WiRain,
  55: WiRain,
  61: WiRain,
  63: WiRainWind,
  65: WiRainWind,
  71: WiSnow,
  73: WiSnow,
  75: WiSnow,
  95: WiThunderstorm,
  96: WiThunderstorm,
  99: WiThunderstorm,
};

const nightIcons = {
  0: WiNightClear,
  1: WiNightAltCloudy,
  2: WiNightAltPartlyCloudy,
  3: WiCloudy,
};

export const getWeatherIcon = (code, time) => {
  if (!time) {
    return dayIcons[code] || WiDaySunny;
  }

  const hour = parseInt(time.split(":")[0]);
  const isNight = hour < 6 || hour >= 18;

  if (isNight && nightIcons[code]) {
    return nightIcons[code];
  }

  return dayIcons[code] || WiDaySunny;
};
