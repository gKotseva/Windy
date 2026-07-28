import { NavLink } from "react-router-dom";
import { Search } from "./SearchBar";
import { ThemeToggle } from "./ThemeToggle";

export const Nav = () => {
  return (
    <nav className="flex justify-between p-5 tracking-wide items-center">
      <div className="flex gap-40 uppercase">
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
              `relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-primary after:transition-transform after:duration-300 ${
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
      <div className="flex gap-5">
        <Search />
        <ThemeToggle />
      </div>
    </nav>
  );
};
