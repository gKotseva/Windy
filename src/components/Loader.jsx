import { useEffect, useState } from "react";
import { dayIcons } from "../utils/weatherIcons";

export const Loader = ({ fullPage = true }) => {
  const iconComponents = Object.values(dayIcons);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % iconComponents.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [iconComponents.length]);

  const Icon = iconComponents[index];

  const containerClasses = fullPage
    ? "fixed inset-0 flex justify-center items-center z-50"
    : `flex justify-center items-center h-70`;

  return (
    <div className={containerClasses}>
      <Icon className="loader text-8xl animate-bounce" />
    </div>
  );
};
