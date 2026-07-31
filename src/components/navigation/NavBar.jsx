import { NavLink } from "react-router-dom";
import { Search } from "./SearchBar";
import { ThemeToggle } from "./ThemeToggle";
import { LocationToggle } from "./LocationToggle";
import { useLocation } from "../../context/LocationContext";

export const Nav = () => {
  const { locationEnabled, toggleLocation } = useLocation();

  return (
    <nav className="flex flex-col lg:flex-row justify-between p-4 md:p-5 gap-5 lg:gap-0 tracking-wide items-center">
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 lg:gap-40 uppercase items-center">
        <p className="tracking-widest text-primary text-heading leading-none">
          WINDY
        </p>

        <ul className="flex gap-5 items-center text-body">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-primary after:transition-transform after:duration-300 ${
                isActive
                  ? "after:scale-x-100 text-primary"
                  : "after:scale-x-0 text-neutral hover:text-secondary"
              }`
            }
          >
            Overview
          </NavLink>

          <NavLink
            to="/live-radar"
            className={({ isActive }) =>
              `relative inline-block after:absolute after:-bottom-1 after:h-[2px] after:w-full after:bg-primary after:transition-transform after:duration-300 ${
                isActive
                  ? "after:scale-x-100 text-primary"
                  : "after:scale-x-0 text-neutral hover:text-secondary"
              }`
            }
          >
            Live radar
          </NavLink>
        </ul>
      </div>

      <div className="flex gap-3 md:gap-5 items-center">
        <Search />
        <ThemeToggle />
        <LocationToggle isOn={locationEnabled} onToggle={toggleLocation} />
      </div>
    </nav>
  );
};
