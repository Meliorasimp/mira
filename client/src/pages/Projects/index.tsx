import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Text/Heading";
import Paragraph from "../../components/Text/Paragraph";
import Button from "../../components/Button";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import "../../index.css";
import quantaxy from "../../assets/financetrackerimage.jpg";

interface Project {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const Projects = () => {
  const theme = useSelector((state: RootState) =>
    state.interaction.isLightMode ? "light" : "dark"
  );

  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      name: "AI-Powered Finance Tracker",
      description: "A comprehensive personal finance management application",
      longDescription:
        "Full-stack web application for tracking personal finances with real-time analytics, budget planning, and expense categorization. Features secure authentication and responsive design.",
      image: quantaxy,
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "TailwindCSS",
      ],
      category: "Full Stack",
      demoUrl: "https://ai-powered-quanta.vercel.app",
      githubUrl: "https://github.com/yourusername/finance-tracker",
      featured: true,
    },
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const ProjectCard = ({
    project,
    index,
  }: {
    project: Project;
    index: number;
  }) => (
    <div
      className={`group relative rounded-2xl overflow-hidden border backdrop-blur-sm transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
        theme === "dark"
          ? "bg-gray-800/50 border-gray-700/50 hover:border-purple-500/50"
          : "bg-white/70 border-gray-200/50 hover:border-purple-400/50"
      } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            // Fallback to gradient if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            const fallback = target.nextElementSibling as HTMLDivElement;
            if (fallback) fallback.style.display = "flex";
          }}
        />
        {/* Fallback gradient (hidden by default) */}
        <div
          className={`w-full h-full bg-gradient-to-br ${
            index % 3 === 0
              ? "from-purple-500 to-blue-500"
              : index % 3 === 1
              ? "from-blue-500 to-indigo-500"
              : "from-indigo-500 to-purple-500"
          } flex items-center justify-center absolute inset-0`}
          style={{ display: "none" }}
        >
          <span className="text-4xl">🚀</span>
        </div>
        {project.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold rounded-full">
            Featured
          </div>
        )}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6`}
        >
          <div className="flex gap-3">
            {project.demoUrl && (
              <Button
                label="Live Demo"
                onClick={() => window.open(project.demoUrl, "_blank")}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-white/30 transition-all duration-300 text-sm"
              />
            )}
            {project.githubUrl && (
              <Button
                label="GitHub"
                onClick={() => window.open(project.githubUrl, "_blank")}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-white/30 transition-all duration-300 text-sm"
              />
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              theme === "dark"
                ? "bg-purple-900/50 text-purple-300"
                : "bg-purple-100 text-purple-700"
            }`}
          >
            {project.category}
          </span>
        </div>

        <Paragraph
          label={
            hoveredProject === project.id
              ? project.longDescription
              : project.description
          }
          variant="primary"
          className="text-sm mb-4 opacity-80 min-h-[3rem] transition-all duration-300"
        />
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className={`px-2 py-1 rounded-md text-xs font-medium border ${
                theme === "dark"
                  ? "border-gray-600 text-gray-300 bg-gray-700/50"
                  : "border-gray-300 text-gray-600 bg-gray-50"
              }`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span
              className={`px-2 py-1 rounded-md text-xs font-medium ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
        <div className="flex gap-2">
          {project.demoUrl && (
            <Button
              label="View Demo"
              onClick={() => window.open(project.demoUrl, "_blank")}
              className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 rounded-lg transition-all duration-300 text-sm font-medium"
            />
          )}
          {project.githubUrl && (
            <Button
              label="Code"
              onClick={() => window.open(project.githubUrl, "_blank")}
              className={`px-4 py-2 border rounded-lg transition-all duration-300 text-sm font-medium ${
                theme === "dark"
                  ? "border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white"
                  : "border-gray-300 text-gray-700 hover:bg-gray-700 hover:text-white"
              }`}
            />
          )}
        </div>
      </div>
    </div>
  );
  return (
    <div className={`min-h-screen app ${theme} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-indigo-900/10"></div>
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 ${
              theme === "dark" ? "bg-white/10" : "bg-gray-400/20"
            } rounded-full animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="px-6 md:px-20">
          <Navbar />
          <section
            className={`py-20 text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <Heading
              label="My Projects"
              level={1}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
            />
            <Paragraph
              label="A showcase of my work as a software developer - from concept to deployment"
              variant="primary"
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-80"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              <div className="text-center">
                <div
                  className={`text-3xl font-bold mb-2 ${
                    theme === "dark" ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  {projects.length}
                </div>
                <div className="text-sm opacity-70">Total Projects</div>
              </div>
              <div className="text-center">
                <div
                  className={`text-3xl font-bold mb-2 ${
                    theme === "dark" ? "text-purple-400" : "text-purple-600"
                  }`}
                >
                  {featuredProjects.length}
                </div>
                <div className="text-sm opacity-70">Featured Works</div>
              </div>
              <div className="text-center">
                <div
                  className={`text-3xl font-bold mb-2 ${
                    theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                  }`}
                >
                  {new Set(projects.flatMap((p) => p.technologies)).size}
                </div>
                <div className="text-sm opacity-70">Technologies Used</div>
              </div>
            </div>
          </section>
          {featuredProjects.length > 0 && (
            <section className="py-16">
              <div className="text-center mb-12">
                <Heading
                  label="Featured Projects"
                  level={2}
                  className="text-3xl md:text-4xl font-bold mb-4"
                />
                <Paragraph
                  label="Highlighted works that showcase my best skills and creativity"
                  variant="primary"
                  className="text-lg opacity-70"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {featuredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            </section>
          )}
          <section className="py-16">
            <div className="text-center mb-12">
              <Heading
                label="All Projects"
                level={2}
                className="text-3xl md:text-4xl font-bold mb-6"
              />
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105"
                        : theme === "dark"
                        ? "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600"
                        : "bg-white/50 text-gray-700 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {category}
                    <span className={`ml-2 text-xs opacity-70`}>
                      (
                      {category === "All"
                        ? projects.length
                        : projects.filter((p) => p.category === category)
                            .length}
                      )
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <div className="text-4xl mb-4">🔍</div>
                <Heading
                  label="No projects found"
                  level={3}
                  className="text-2xl mb-4"
                />
                <Paragraph
                  label={`No projects found in the ${selectedCategory} category.`}
                  variant="primary"
                  className="opacity-70"
                />
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Projects;
