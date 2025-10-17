import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Text/Heading";
import Paragraph from "../../components/Text/Paragraph";
import Button from "../../components/Button";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import "../../index.css";

interface ContactMethod {
  icon: string;
  title: string;
  subtitle: string;
  value: string;
  action: () => void;
  color: string;
}

const Contacts = () => {
  const theme = useSelector((state: RootState) =>
    state.interaction.isLightMode ? "light" : "dark"
  );

  const [isVisible, setIsVisible] = useState(false);

  const contactMethods: ContactMethod[] = [
    {
      icon: "📧",
      title: "Email",
      subtitle: "Send me a direct message",
      value: "meliorasimp@gmail.com",
      action: () =>
        window.open(
          "mailto:meliorasimp@gmail.com?subject=Hello from your portfolio",
          "_blank"
        ),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🐙",
      title: "GitHub",
      subtitle: "Check out my code",
      value: "github.com/Meliorasimp",
      action: () => window.open("https://github.com/Meliorasimp", "_blank"),
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: "🐦",
      title: "Twitter",
      subtitle: "Follow my journey",
      value: "@legashki",
      action: () => window.open("https://x.com/legashki", "_blank"),
      color: "from-sky-500 to-blue-600",
    },
    {
      icon: "📍",
      title: "Location",
      subtitle: "Based in",
      value: "Philippines",
      action: () => {},
      color: "from-purple-500 to-indigo-600",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const ContactCard = ({
    method,
    index,
  }: {
    method: ContactMethod;
    index: number;
  }) => (
    <div
      className={`group relative p-6 rounded-2xl border backdrop-blur-sm transform transition-all duration-500 hover:scale-105 cursor-pointer ${
        theme === "dark"
          ? "bg-gray-800/50 border-gray-700/50 hover:border-purple-500/50"
          : "bg-white/70 border-gray-200/50 hover:border-purple-400/50"
      } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={method.action}
    >
      <div className="flex items-center space-x-4">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center text-white text-xl shadow-lg`}
        >
          {method.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1">{method.title}</h3>
          <p
            className={`text-sm opacity-70 mb-1 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {method.subtitle}
          </p>
          <p
            className={`text-sm font-medium ${
              theme === "dark" ? "text-purple-300" : "text-purple-600"
            }`}
          >
            {method.value}
          </p>
        </div>
        <div
          className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          →
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen app ${theme} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-indigo-900/10"></div>
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
            className={`py-20 text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <Heading
              label="Let's Connect"
              level={1}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent"
            />
            <Paragraph
              label="Ready to turn your ideas into reality? I'd love to hear from you!"
              variant="primary"
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-80"
            />
            <Paragraph
              label="Whether you have a project in mind, want to collaborate, or just want to say hello, don't hesitate to reach out. I typically respond within 24 hours."
              variant="primary"
              className="text-lg mb-12 max-w-2xl mx-auto opacity-70"
            />
          </section>
          <section className="py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Heading
                  label="Get In Touch"
                  level={2}
                  className="text-3xl md:text-4xl font-bold mb-4"
                />
                <Paragraph
                  label="Choose your preferred way to connect with me"
                  variant="primary"
                  className="text-lg opacity-70"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contactMethods.map((method, index) => (
                  <ContactCard
                    key={method.title}
                    method={method}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
          <section className="py-20 text-center">
            <div className="max-w-4xl mx-auto">
              <Heading
                label="Ready to Start Your Project?"
                level={2}
                className="text-3xl md:text-4xl font-bold mb-6"
              />
              <Paragraph
                label="Let's discuss how we can bring your vision to life. I'm excited to hear about your ideas!"
                variant="primary"
                className="text-lg mb-8 max-w-2xl mx-auto opacity-80"
              />

              <Button
                label="Let's Talk"
                onClick={() =>
                  window.open(
                    "mailto:your.email@example.com?subject=Ready to start a project!",
                    "_blank"
                  )
                }
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium text-lg"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
