import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Text/Heading";
import Paragraph from "../../components/Text/Paragraph";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import "../../index.css";
import profilepic from "../../assets/profilepic-removebg.png";

const Home = () => {
  const profile = profilepic;
  const theme = useSelector((state: RootState) =>
    state.interaction.isLightMode ? "light" : "dark"
  );
  return (
    <div className={`pl-20 pr-20 h-screen app ${theme}`}>
      <Navbar />
      <div className="h-3/4 flex flex-row items-center justify-center ">
        <div className="w-1/2 flex flex-col items-left justify-center text-white text-5xl fontlight pr-5">
          <Heading label="Hello, I'm Meinard Legashki Limlengco" level={1} />
          <Paragraph
            label="Fullstack Developer based in the Philippines with a passion for creating dynamic and responsive web applications."
            variant="primary"
            className=" pb-5 text-xl mt-3"
          />

          <div className="flex flex-row gap-x-5">
            <Button
              label="Contact Me"
              onClick={() => {}}
              className="text-lg border text-gray-300 hover:bg-gray-300 hover:text-gray-800 transition-all duration-300 cursor-pointer"
            />
            <Button
              label="Download CV"
              onClick={() => {}}
              className="text-lg border text-gray-300 hover:bg-gray-300 hover:text-gray-800 transition-all duration-300 cursor-pointer"
            />
          </div>
        </div>
        <div className="w-2/6 h-5/6 overflow-hidden rounded-full mx-auto shadow-[0_4px_30px_-4px_rgba(255,255,255,0.3)] border">
          <img
            src={profile}
            alt="Profile picture of [Your Name]"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
