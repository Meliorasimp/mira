import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Heading from "../../components/Text/Heading";
import Paragraph from "../../components/Text/Paragraph";
import { useNavigate } from "react-router-dom";
import "../../index.css";

const skills = [
  { name: "React/TypeScript", level: 90, category: "Frontend" },
  { name: "Node.js/Express", level: 85, category: "Backend" },
  { name: "MongoDB", level: 80, category: "Database" },
  { name: "Tailwind CSS", level: 95, category: "Styling" },
  { name: "Git/GitHub", level: 100, category: "Tools" },
  { name: "REST APIs", level: 87, category: "Integration" },
  { name: "Docker", level: 30, category: "DevOps" },
  { name: "Jest", level: 40, category: "Testing" },
  { name: "Redux", level: 90, category: "State Management" },
  { name: "ASP .NET Core", level: 10, category: "Backend" },
  { name: "WebSockets", level: 30, category: "Real-time" },
  { name: "Figma", level: 50, category: "Design & Prototyping" },
];

const About = () => {
  const navigate = useNavigate();
  const theme = useSelector((state: RootState) =>
    state.interaction.isLightMode ? "light" : "dark"
  );

  const [isVisible, setIsVisible] = useState(false);
  const [skillProgress, setSkillProgress] = useState<{ [key: string]: number }>(
    {}
  );

  const experiences = [
    {
      year: "2025",
      title: "Aspiring Fullstack Developer",
      company: "Freelance Projects",
      description:
        "Built scalable web applications for learning using modern tech stack.",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      const animatedProgress: { [key: string]: number } = {};
      skills.forEach((skill) => {
        animatedProgress[skill.name] = skill.level;
      });
      setSkillProgress(animatedProgress);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen app ${theme} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-indigo-900/10"></div>
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
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
            className={`py-20 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="max-w-4xl mx-auto text-center">
              <Heading
                label="About Me"
                level={1}
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
              />
              <Paragraph
                label="Passionate developer crafting digital experiences that make a difference"
                variant="primary"
                className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-80"
              />
            </div>
          </section>
          <section className="py-20">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div
                  className={`transform transition-all duration-1000 delay-300 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-8 opacity-0"
                  }`}
                >
                  <Heading
                    label="My Journey"
                    level={2}
                    className="text-3xl md:text-4xl font-bold mb-6"
                  />
                  <div className="space-y-6">
                    <Paragraph
                      label="I am a passionate software developer based in The Philippines, with a strong focus on creating exceptional web applications. My journey began with curiosity about how websites work, which quickly evolved into a deep love for coding and problem-solving."
                      variant="primary"
                      className="text-lg leading-relaxed"
                    />
                    <Paragraph
                      label="I specialize in both frontend and backend development, with expertise in the MERN stack. My approach combines technical proficiency with a keen eye for user experience, ensuring that every application I build is not only functional but also intuitive and engaging."
                      variant="primary"
                      className="text-lg leading-relaxed"
                    />
                    <Paragraph
                      label="I believe in continuous learning and staying updated with the latest technologies. This mindset has allowed me to adapt quickly to new challenges and deliver high-quality solutions that exceed expectations."
                      variant="primary"
                      className="text-lg leading-relaxed"
                    />
                  </div>
                </div>
                <div
                  className={`transform transition-all duration-1000 delay-500 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                >
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-lg"></div>
                    <div
                      className={`relative p-8 rounded-2xl border backdrop-blur-sm ${
                        theme === "dark"
                          ? "bg-gray-800/30 border-gray-700/50"
                          : "bg-white/50 border-gray-200/50"
                      }`}
                    >
                      <div className="text-center space-y-6">
                        <div
                          className={`text-5xl ${
                            theme === "dark" ? "text-blue-400" : "text-blue-600"
                          }`}
                        >
                          🚀
                        </div>

                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm opacity-70">
                              Lines of Code
                            </span>
                            <span
                              className={`font-bold ${
                                theme === "dark"
                                  ? "text-blue-400"
                                  : "text-blue-600"
                              }`}
                            >
                              10,000+
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm opacity-70">
                              Projects Completed
                            </span>
                            <span
                              className={`font-bold ${
                                theme === "dark"
                                  ? "text-purple-400"
                                  : "text-purple-600"
                              }`}
                            >
                              2+
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm opacity-70">
                              Technologies Mastered
                            </span>
                            <span
                              className={`font-bold ${
                                theme === "dark"
                                  ? "text-indigo-400"
                                  : "text-indigo-600"
                              }`}
                            >
                              1+
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm opacity-70">
                              Years of Learning
                            </span>
                            <span
                              className={`font-bold ${
                                theme === "dark"
                                  ? "text-green-400"
                                  : "text-green-600"
                              }`}
                            >
                              1+
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-20">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Heading
                  label="Technical Skills"
                  level={2}
                  className="text-3xl md:text-4xl font-bold mb-4"
                />
                <Paragraph
                  label="Technologies and tools I work with"
                  variant="primary"
                  className="text-lg opacity-70"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`transform transition-all duration-1000 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{skill.name}</span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            theme === "dark"
                              ? "bg-gray-700 text-gray-300"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {skill.category}
                        </span>
                      </div>
                      <span className="text-sm opacity-70">{skill.level}%</span>
                    </div>

                    <div
                      className={`w-full h-2 rounded-full ${
                        theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                      }`}
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out"
                        style={{
                          width: `${skillProgress[skill.name] || 0}%`,
                          transitionDelay: `${800 + index * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="py-20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Heading
                  label="Experience"
                  level={2}
                  className="text-3xl md:text-4xl font-bold mb-4"
                />
                <Paragraph
                  label="My professional journey and growth"
                  variant="primary"
                  className="text-lg opacity-70"
                />
              </div>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row gap-6 p-6 rounded-2xl border backdrop-blur-sm transform transition-all duration-1000 ${
                      theme === "dark"
                        ? "bg-gray-800/30 border-gray-700/50"
                        : "bg-white/50 border-gray-200/50"
                    } ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${1000 + index * 200}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg ${
                          theme === "dark"
                            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                            : "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        }`}
                      >
                        {exp.year}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">
                        {exp.title}
                      </h3>
                      <p
                        className={`text-sm mb-3 ${
                          theme === "dark"
                            ? "text-purple-300"
                            : "text-purple-600"
                        }`}
                      >
                        {exp.company}
                      </p>
                      <Paragraph
                        label={exp.description}
                        variant="primary"
                        className="text-base opacity-80"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="py-20">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Heading
                  label="What Drives Me"
                  level={2}
                  className="text-3xl md:text-4xl font-bold mb-4"
                />
                <Paragraph
                  label="The principles that guide my work and passion"
                  variant="primary"
                  className="text-lg opacity-70"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "💡",
                    title: "Innovation",
                    description:
                      "Always exploring new technologies and creative solutions to complex problems.",
                  },
                  {
                    icon: "🎯",
                    title: "Quality",
                    description:
                      "Committed to writing clean, maintainable code that stands the test of time.",
                  },
                  {
                    icon: "🤝",
                    title: "Collaboration",
                    description:
                      "Believing in the power of teamwork and knowledge sharing to create better solutions.",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className={`text-center p-8 rounded-2xl border backdrop-blur-sm transform transition-all duration-1000 hover:scale-105 ${
                      theme === "dark"
                        ? "bg-gray-800/30 border-gray-700/50 hover:border-purple-500/50"
                        : "bg-white/50 border-gray-200/50 hover:border-purple-400/50"
                    } ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${1400 + index * 200}ms` }}
                  >
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold mb-4">
                      {value.title}
                    </h3>
                    <Paragraph
                      label={value.description}
                      variant="primary"
                      className="text-base opacity-80"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="py-20 text-center">
            <div className="max-w-4xl mx-auto">
              <Heading
                label="Let's Build Something Amazing"
                level={2}
                className="text-3xl md:text-4xl font-bold mb-6"
              />
              <Paragraph
                label="I'm always excited to take on new challenges and collaborate on innovative projects. Let's connect and create something extraordinary together!"
                variant="primary"
                className="text-lg mb-8 max-w-2xl mx-auto opacity-80"
              />

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate("/projects")}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium text-lg"
                >
                  View My Work
                </button>
                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href =
                      "mailto:your.email@example.com?subject=Let's Connect!";
                    link.click();
                  }}
                  className={`px-8 py-3 border-2 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium text-lg ${
                    theme === "dark"
                      ? "border-gray-400 text-gray-300 hover:bg-gray-300 hover:text-gray-800"
                      : "border-gray-600 text-gray-700 hover:bg-gray-600 hover:text-white"
                  }`}
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
