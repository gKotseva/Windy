import { useEffect, useState } from "react";
import { dayIcons } from "../utils/weatherIcons";

export const Loader = ({ fullPage = true }) => {
  const iconPaths = Object.values(dayIcons);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % iconPaths.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [iconPaths.length]);

  const containerClasses = fullPage
    ? "fixed inset-0 flex justify-center items-center z-50"
    : "flex justify-center items-center h-70";

  return (
    <div className={containerClasses}>
      <img
        src={iconPaths[index]}
        alt="loading icon"
        className="loader w-20 h-20 animate-bounce"
      />
    </div>
  );
};
