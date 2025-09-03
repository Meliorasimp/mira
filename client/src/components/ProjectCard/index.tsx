import "../../index.css";
type ProjectCardProps = {
  name: string;
  description: string;
  image: string;
  imageAlt?: string;
  className?: string;
};

const ProjectCard = ({
  name,
  description,
  image,
  imageAlt,
}: ProjectCardProps) => {
  return (
    <div className="h-1/2 w-2/6 projectcard p-2 hover:scale-101 transition-all duration-300 cursor-pointer rounded-lg">
      <img src={image} alt={imageAlt || name} />
      <h1 className="text-xl font-bold mt-3">{name}</h1>
      <h2 className="text-base mt-3">{description}</h2>
    </div>
  );
};

export default ProjectCard;
