import { RootState } from "../../store";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Text/Heading";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/javascript.svg";
import react from "../../assets/react.svg";
import redux from "../../assets/redux.svg";
import tailwindcss from "../../assets/tailwind-css.svg";
import express from "../../assets/Express.svg";
import mongodb from "../../assets/MongoDB.svg";
import typescript from "../../assets/TypeScript.svg";
import java from "../../assets/Java.svg";
import cs from "../../assets/cs.svg";
import figma from "../../assets/Figma.svg";
import canva from "../../assets/Canva.svg";
import git from "../../assets/Git.svg";
import github from "../../assets/GitHub.svg";
import vscode from "../../assets/vscode.svg";
import { redirectToWebsite } from "../../utils";

const Services = () => {
  const theme = useSelector((state: RootState) =>
    state.interaction.isLightMode ? "light" : "dark"
  );
  return (
    <div className={`pl-20 pr-20 h-screen app ${theme}`}>
      <Navbar />
      <div className="pt-10">
        <Heading
          label="From Concept to Code—Let’s Build Something Brilliant"
          level={1}
          className="text-white text-4xl font-bold pb-7 text-center"
        />
        <Heading
          label="Core Technologies"
          level={1}
          className="text-white text-2xl font-bold pb-7 text-center"
        />
        <div className="h-20 flex justify-center items-center rounded-lg flex-row gap-x-7">
          <div className="h-full hover:scale-105 transition-all duration-300 cursor-pointer">
            <img
              src={html}
              alt=""
              className="h-16 w-16"
              onClick={() =>
                redirectToWebsite(
                  "https://developer.mozilla.org/en-US/docs/Web/HTML"
                )
              }
            />
          </div>
          <div className="h-full hover:scale-105 transition-all duration-300 cursor-pointer">
            <img
              src={css}
              alt=""
              className="h-16 w-16"
              onClick={() =>
                redirectToWebsite(
                  "https://developer.mozilla.org/en-US/docs/Web/CSS"
                )
              }
            />
          </div>
          <div className="h-full hover:scale-105 transition-all duration-300 cursor-pointer">
            <img
              src={js}
              alt=""
              className="h-16 w-16"
              onClick={() =>
                redirectToWebsite(
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                )
              }
            />
          </div>
          <div className="h-full hover:scale-105 transition-all duration-300 cursor-pointer">
            <img
              src={react}
              alt=""
              className="h-16 w-16"
              onClick={() =>
                redirectToWebsite(
                  "https://reactjs.org/docs/getting-started.html"
                )
              }
            />
          </div>
          <div className="h-full hover:scale-105 transition-all duration-300 cursor-pointer">
            <img
              src={redux}
              alt=""
              className="h-16 w-16"
              onClick={() =>
                redirectToWebsite(
                  "https://redux.js.org/introduction/getting-started"
                )
              }
            />
          </div>
          <div className="h-full hover:scale-105 transition-all duration-300 cursor-pointer">
            <img
              src={tailwindcss}
              alt=""
              className={
                theme === "light"
                  ? "h-16 w-16"
                  : "h-16 w-16 filter brightness-0 invert"
              }
              onClick={() => redirectToWebsite("https://tailwindcss.com/docs")}
            />
          </div>
          <div className="h-full hover:scale-105 transition-all duration-300 cursor-pointer">
            <img
              src={express}
              alt=""
              className={
                theme === "light"
                  ? "h-16 w-16"
                  : "h-16 w-16 filter brightness-0 invert"
              }
              onClick={() => redirectToWebsite("https://expressjs.com/")}
            />
          </div>
          <div className="h-full hover:scale-105 transition-all duration-300 cursor-pointer">
            <img
              src={mongodb}
              alt=""
              className="h-16 w-16"
              onClick={() => redirectToWebsite("https://www.mongodb.com/docs/")}
            />
          </div>
          <div className="h-full hover:scale-105 transition-all duration-300 cursor-pointer">
            <img
              src={typescript}
              alt=""
              className="h-16 w-16"
              onClick={() =>
                redirectToWebsite("https://www.typescriptlang.org/docs/")
              }
            />
          </div>
          <div className="h-full hover:scale-105 transition-all duration-300 cursor-pointer">
            <img
              src={java}
              alt=""
              className="h-16 w-16"
              onClick={() =>
                redirectToWebsite(
                  "https://www.oracle.com/java/technologies/javase-jdk11-docs.html"
                )
              }
            />
          </div>
          <div className="h-full hover:scale-105 transition-all duration-300 cursor-pointer">
            <img
              src={cs}
              alt=""
              className="h-16 w-16"
              onClick={() =>
                redirectToWebsite(
                  "https://learn.microsoft.com/en-us/dotnet/csharp/"
                )
              }
            />
          </div>
        </div>
        <div className="pt-5">
          <Heading
            label="Design & UX "
            level={1}
            className="text-white text-2xl font-bold pb-7 text-center"
          />
          <div className="h-20 flex justify-center items-center rounded-lg flex-row gap-x-7">
            <div className="h-full hover:scale-105 transition-all duration-300 cursor-pointer">
              <img
                src={figma}
                alt=""
                className="h-16 w-16"
                onClick={() => redirectToWebsite("https://www.figma.com/")}
              />
            </div>
            <div className="h-full hover:scale-105 transition-all duration-300 cursor-pointer">
              <img
                src={canva}
                alt=""
                className="h-16 w-16"
                onClick={() => redirectToWebsite("https://www.canva.com/")}
              />
            </div>
          </div>
        </div>
        <div className="pt-5">
          <Heading
            label="Tools and Platforms"
            level={1}
            className="text-white text-2xl font-bold pb-7 text-center"
          />
          <div className="h-20 flex justify-center items-center rounded-lg flex-row gap-x-7">
            <div className="h-full hover:scale-105 transition-all duration-300 cursor-pointer">
              <img src={git} alt="" className="h-16 w-16" />
            </div>
            <div className="h-full hover:scale-105 transition-all duration-300 cursor-pointer">
              <img
                src={github}
                alt=""
                className={
                  theme === "light"
                    ? "h-16 w-16"
                    : "h-16 w-16 filter brightness-0 invert"
                }
                onClick={() => redirectToWebsite("https://github.com/")}
              />
            </div>
            <div className="h-full hover:scale-105 transition-all duration-300 cursor-pointer">
              <img
                src={vscode}
                alt=""
                className="h-16 w-16"
                onClick={() =>
                  redirectToWebsite("https://code.visualstudio.com/")
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
