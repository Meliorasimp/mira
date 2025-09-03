import "../../index.css";
import { toggleTheme } from "../../modules/interaction";
import Heading from "../Text/Heading";
import { FaSun, FaMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector(
    (state: RootState) => state.interaction.isLightMode
  );
  return (
    <div className="h-16 text-white flex flex-row items-center">
      <Heading label="Mira" level={1} className="text-lg mr-auto" />
      <div className="flex flex-row gap-10">
        <Heading
          label="Home"
          level={1}
          className="text-lg mr-auto hover:underline cursor-pointer"
          onClick={() => navigate("/")}
        />
        <Heading
          label="About"
          level={1}
          className="text-lg mr-auto hover:underline cursor-pointer"
          onClick={() => navigate("/about")}
        />
        <Heading
          label="Skills"
          level={1}
          className="text-lg mr-auto hover:underline cursor-pointer"
          onClick={() => navigate("/services")}
        />
        <Heading
          label="Contact"
          level={1}
          className="text-lg mr-auto hover:underline cursor-pointer"
        />
        <Heading
          label="Projects"
          level={1}
          className="text-lg mr-auto hover:underline cursor-pointer"
          onClick={() => navigate("/projects")}
        />
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
    </div>
  );
};

export default Navbar;
