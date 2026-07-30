export const getLocationName = (location) => {
  const address = location.address || {};

  return (
    address.city ||
    address.town ||
    address.village ||
    address.state ||
    address.municipality ||
    address.district ||
    address.county ||
    "Unknown location"
  );
};

export const getCountry = (location) => {
  const address = location.address || {};

  return (
    location.country ||
    address.country ||
    address.country_code?.toUpperCase() ||
    ""
  );
};
