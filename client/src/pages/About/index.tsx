import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Heading from "../../components/Text/Heading";
import Paragraph from "../../components/Text/Paragraph";
import aboutmeimage from "../../assets/undraw_online-test_cqv0.svg";
const About = () => {
  const theme = useSelector((state: RootState) =>
    state.interaction.isLightMode ? "light" : "dark"
  );
  return (
    <div className={`pl-20 pr-20 h-screen app ${theme}`}>
      <Navbar />
      <div className="flex flex-row gap-x-10 justify-center w-full pt-10">
        <div className="w-1/2 rounded-2xl overflow-hidden flex justify-center items-center">
          <img
            src={aboutmeimage}
            alt=""
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <Heading
            label="About Me"
            level={1}
            className="text-white text-5xl font-bold pb-7"
          />
          <Paragraph
            label="I am a passionate software developer based in The Philippines, with experience in building web applications,
         I specialize in both front-end development and backend development, and I have a strong focus on user experience. 
         I aim to learn everyday and deliver high-quality software that meets user needs."
            variant="primary"
          />
          <br />
          <Paragraph
            label="My expertise spans across modern frameworks, responsive design, and scalable architecture, allowing me to build intuitive 
            interfaces and efficient systems that solve real-world problems. I take pride in writing clean, maintainable code and continuously 
            refining my skills to stay ahead in the ever-evolving tech landscape."
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
