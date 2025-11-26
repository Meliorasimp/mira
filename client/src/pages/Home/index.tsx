import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Text/Heading";
import Paragraph from "../../components/Text/Paragraph";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import image from "../../assets/dp.jpg";
import "../../index.css";

const Home = () => {
  const theme = useSelector((state: RootState) =>
    state.interaction.isLightMode ? "light" : "dark"
  );

  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTech, setCurrentTech] = useState(0);

  const techStack = [
    "React",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "Express",
    "GraphQL",
    "Docker",
    "C#",
    "ASP.NET",
    "PostgreSQL",
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techStack.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [techStack.length]);

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "C:UsersmelioDownloadsLimlengcoMeinardResume.pdf";
    link.download = "LimlengcoMeinardResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`min-h-screen app ${theme} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-indigo-900/10"></div>
      <div className="absolute inset-0 overflow-hidden w-1/2">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 ${
              theme === "dark" ? "bg-white/20" : "bg-gray-400/30"
            } rounded-full animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10">
        <div className="px-6 md:px-20">
          <Navbar />
          <main className="min-h-[85vh] w-[80vw] flex flex-col lg:flex-row items-center justify-between mx-auto py-12 gap-12">
            <div
              className={`flex-1 max-w-2xl transform transition-all duration-1000 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="mb-8">
                <div
                  className={`text-lg font-medium mb-4 ${
                    theme === "dark" ? "text-purple-300" : "text-purple-600"
                  }`}
                >
                  👋 Hi there, I'm
                </div>
                <Heading
                  label="Meinard Legashki Limlengco"
                  level={1}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight"
                />
                <div className="text-2xl md:text-3xl font-semibold mb-6">
                  <span
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }
                  >
                    Fullstack Developer specializing in{" "}
                  </span>
                  <span
                    className={`${
                      theme === "dark" ? "text-blue-400" : "text-blue-600"
                    } transition-all duration-500`}
                  >
                    {techStack[currentTech]}
                  </span>
                </div>
              </div>
              <Paragraph
                label="I'm a passionate software engineer who builds scalable web applications using the MERN stack. I love turning innovative ideas into functional, user-friendly solutions that make a real difference."
                variant="tertiary"
                className="text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
              />
              <div className="grid grid-cols-3 gap-6 mb-8 py-6 border-y border-gray-300/20">
                <div className="text-center">
                  <div
                    className={`text-2xl font-bold ${
                      theme === "dark" ? "text-purple-400" : "text-purple-600"
                    }`}
                  >
                    0+
                  </div>
                  <div className="text-sm opacity-70">Years Experience</div>
                </div>
                <div className="text-center">
                  <div
                    className={`text-2xl font-bold ${
                      theme === "dark" ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    2+
                  </div>
                  <div className="text-sm opacity-70">Projects Built</div>
                </div>
                <div className="text-center">
                  <div
                    className={`text-2xl font-bold ${
                      theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                    }`}
                  >
                    100%
                  </div>
                  <div className="text-sm opacity-70">Dedicated</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  label="Get In Touch"
                  onClick={handleContactClick}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium text-lg"
                />
                <Button
                  label="Download CV"
                  onClick={handleDownloadCV}
                  className={`px-8 py-3 border-2 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium text-lg ${
                    theme === "dark"
                      ? "border-gray-400 text-gray-300 hover:bg-gray-300 hover:text-gray-800"
                      : "border-gray-600 text-gray-700 hover:bg-gray-600 hover:text-white"
                  }`}
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <span
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Tech Stack:
                </span>
                {[
                  "React",
                  "Node.js",
                  "TypeScript",
                  "MongoDB",
                  "Express",
                  "GraphQL",
                  "Docker",
                  "C#",
                  "ASP.NET",
                  "PostgreSQL",
                ].map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      theme === "dark"
                        ? "border-gray-600 text-gray-300 bg-gray-800/50"
                        : "border-gray-300 text-gray-700 bg-gray-100"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div
              className={`flex-shrink-0 transform transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full blur-lg"></div>
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-white/10 overflow-hidden">
                  <img
                    src={image}
                    alt="Meinard Legashki Limlengco - Fullstack Developer"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-blue-900/30 rounded-full"></div>
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-2xl shadow-lg animate-bounce">
                  ⚛️
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center text-2xl shadow-lg animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                >
                  🚀
                </div>
                <div className="absolute top-1/2 -left-8 w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-lg shadow-lg animate-pulse">
                  💡
                </div>
              </div>
            </div>
          </main>
        </div>

        <section
          id="contact"
          className={`py-20 mt-20 ${
            theme === "dark"
              ? "bg-gradient-to-t from-purple-900/20 to-transparent"
              : "bg-gradient-to-t from-gray-100 to-transparent"
          }`}
        >
          <div className="px-6 md:px-20 max-w-4xl mx-auto text-center">
            <Heading
              label="Ready to collaborate?"
              level={2}
              className="text-3xl md:text-4xl font-bold mb-6"
            />
            <Paragraph
              label="I'm always excited to work on new projects and help bring innovative ideas to life. Let's create something amazing together!"
              variant="primary"
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                label="View My Work"
                onClick={() => (window.location.href = "/projects")}
                className={`px-8 py-3 border-2 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium text-lg ${
                  theme === "dark"
                    ? "border-gray-400 text-gray-300 hover:bg-gray-300 hover:text-gray-800"
                    : "border-gray-600 text-gray-700 hover:bg-gray-600 hover:text-white"
                }`}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
