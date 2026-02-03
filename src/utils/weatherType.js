export const weatherGroups = {
  Sunny: [0],
  Cloudy: [1, 2, 3],
  Foggy: [45, 48],
  Rainy: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
  Snowy: [71, 73, 75, 77, 85, 86],
  Stormy: [95, 96, 99],
};

export const getWeatherType = (code) => {
  for (const [type, codes] of Object.entries(weatherGroups)) {
    if (codes.includes(code)) {
      return type;
    }
  }

  return "Sunny";
};
