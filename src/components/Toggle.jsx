import { useTheme } from "../context/Theme";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";

export const Toggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`relative rounded-full w-17 h-7 cursor-pointer ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <BsFillMoonStarsFill
          size={17}
          color={"white"}
          className="absolute left-2 top-1.5"
        />
        <div
          className={`absolute top-0.5 left-1 w-6 h-6 rounded-full transition-transform duration-300 ${
            theme === "dark"
              ? "translate-x-9 bg-white"
              : "translate-x-0 bg-black"
          }`}
        ></div>
        <IoSunnyOutline
          size={21}
          color={theme === "dark" ? "white" : "black"}
          className="absolute left-10 top-1"
        />
      </button>
    </div>
  );
};
