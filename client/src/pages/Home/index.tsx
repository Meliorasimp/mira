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
      <div className="h-3/4 flex flex-row">
        <div className="w-1/2 flex flex-col items-left justify-center text-white text-4xl font-bold pr-5">
          <Heading
            label="Hi, I'm Meinard Legashki Limlengco"
            level={1}
            className="font-serif"
          />
          <Paragraph
            label="Fullstack Developer"
            variant="primary"
            className=" pb-5"
          />
          <Paragraph
            label="I'm a software engineer with a passion for building web applications. 
            I specialize in the MERN stack (MongoDB, Express, React, Node.js) and enjoy turning ideas into functional, 
            user-friendly solutions. I excel at creating scalable, maintainable, and responsive web applications, and I’m 
            constantly exploring modern technologies and best practices to improve performance and user experience.
            "
            variant="secondary"
            className="pb-5 leading-relaxed"
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
        <div className="w-1/2 rounded-2xl overflow-hidden">
          <img
            src={profile}
            alt=""
            className=" object-contain m-auto h-full max-w-4xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
