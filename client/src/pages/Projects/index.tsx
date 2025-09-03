import Navbar from "../../components/Navbar";
import Heading from "../../components/Text/Heading";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import ProjectCard from "../../components/ProjectCard";
import exampleimage from "../../assets/1349197.png";
const Projects = () => {
  const theme = useSelector((state: RootState) =>
    state.interaction.isLightMode ? "light" : "dark"
  );
  return (
    <div className={`pl-20 pr-20 h-screen app ${theme}`}>
      <Navbar />
      <div className="pt-10">
        <Heading
          label="A Showcase of My Work as a Software Developer in Progress"
          level={1}
          className="text-white text-4xl font-bold pb-7 text-center"
        />
      </div>
      <div className="flex flex-row gap-x-3">
        <ProjectCard
          name="Finance Tracker"
          description="A web application for tracking personal finances."
          image={exampleimage}
        />
        <ProjectCard
          name="Finance Tracker"
          description="A web application for tracking personal finances. Built using React, TailwindCSS, Express and MongoDB"
          image={exampleimage}
        />
        <ProjectCard
          name="Finance Tracker"
          description="A web application for tracking personal finances. "
          image={exampleimage}
        />
      </div>
    </div>
  );
};

export default Projects;
