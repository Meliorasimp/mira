type ProjectCardProps = {
  name: string;
  description: string;
  image: string;
};

export const ProjectCard = ({ name, description, image }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <img src={image} alt={`${name} image`} className="project-image" />
      <h2 className="project-name">{name}</h2>
      <p className="project-description">{description}</p>
    </div>
  );
};
