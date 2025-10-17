import "../../index.css";
import { toggleTheme } from "../../modules/interaction";
import Heading from "../Text/Heading";
import { FaSun, FaMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector(
    (state: RootState) => state.interaction.isLightMode
  );

  const NavbarLinks = ["Home", "About", "Contact", "Projects"];
  const NavbarRoutes = ["/", "/about", "/contacts", "/projects"];
  return (
    <nav className="h-16 text-white flex flex-row items-center">
      <Heading label="lmx" level={1} className="text-lg mr-auto" />
      <div
        className={`flex flex-row gap-10 ${
          theme ? "text-black" : "text-white"
        }`}
      >
        {NavbarLinks.map((l, index) => (
          <div key={index}>
            <Link to={NavbarRoutes[index]}>{l}</Link>
          </div>
        ))}
        <div className="flex flex-row gap-4 items-center">
          {theme ? (
            <FaMoon
              className="cursor-pointer"
              size={24}
              onClick={() => {
                dispatch(toggleTheme());
                console.log("Theme toggled");
              }}
              color="black"
            />
          ) : (
            <FaSun
              className="cursor-pointer"
              size={24}
              onClick={() => {
                dispatch(toggleTheme());
                console.log("Theme toggled");
              }}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
