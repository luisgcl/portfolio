import React from "react";
import nexti from "../assets/nextimg.png";
import tailwind from "../assets/tailwindimg.png";
import redux from "../assets/reduximg.png";
import firebase from "../assets/firebaseimg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
  faBootstrap,
  faGitAlt,
  faGithub,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";

const Skills = ({ darkMode, animateClicked }) => {
  return (
    <div
      id="skills"
      className={`h-screen md:pt-40 pb-10  gap-4 ${
        darkMode ? "bg-black" : "bg-white"
      }  ${darkMode ? "text-white" : "text-black"}`}
    >
      <p className="text-4xl text-center font-bold pb-6 span">
        <span className={`${darkMode ? "animate" : "animateb"}`}></span>
        Habilidades
        <span
          className={`  ${
            darkMode
              ? animateClicked && "animate"
              : animateClicked && "animateb"
          }`}
        ></span>
      </p>
      <div className="flex flex-wrap gap-4 justify-center span">
        <div className="bg-gray-400 rounded-md about w-1/6 education">
          <span className={`${darkMode ? "animate" : "animateb"}`}></span>
          <div className="bg-black p-2 text-center rounded-md w-16">
            <FontAwesomeIcon
              icon={faHtml5}
              className={`h-10 ${darkMode ? "text-white" : "text-gray-400"}`}
            />
          </div>
          <p className="text-xs md:text-xl font-bold px-3 mt-2 text-center">
            Html
          </p>
          <span
            className={`  ${
              darkMode
                ? animateClicked && "animate"
                : animateClicked && "animateb"
            }`}
          ></span>
        </div>

        <div className="bg-gray-400 w-1/6 rounded-md  about education span">
          <span className={`${darkMode ? "animate" : "animateb"}`}></span>
          <div className="bg-black p-2 text-center rounded-md w-16">
            <FontAwesomeIcon
              icon={faCss3Alt}
              className={`h-10 ${darkMode ? "text-white" : "text-gray-400"}`}
            />
          </div>
          <p className="text-xs md:text-xl font-bold px-3 mt-2 text-center">
            Css
          </p>
          <span
            className={`  ${
              darkMode
                ? animateClicked && "animate"
                : animateClicked && "animateb"
            }`}
          ></span>
        </div>

        <div className=" bg-gray-400  w-1/6 rounded-md  about education span">
          <span className={`${darkMode ? "animate" : "animateb"}`}></span>
          <div className="bg-black p-2 text-center rounded-md w-16">
            <FontAwesomeIcon
              icon={faJs}
              className={`h-10 ${darkMode ? "text-white" : "text-gray-400"}`}
            />
          </div>
          <p className="text-xs md:text-xl font-bold px-3 mt-2 text-center">
            Javascript
          </p>
          <span
            className={`  ${
              darkMode
                ? animateClicked && "animate"
                : animateClicked && "animateb"
            }`}
          ></span>
        </div>

        <div className="bg-gray-400 w-1/6 rounded-md about education span">
          <span className={`${darkMode ? "animate" : "animateb"}`}></span>
          <div className="bg-black p-2 text-center rounded-md w-16">
            <FontAwesomeIcon
              icon={faReact}
              className={`h-10 ${darkMode ? "text-white" : "text-gray-400"}`}
            />
          </div>
          <p className="text-xs md:text-xl font-bold px-3 mt-2 text-center">
            React
          </p>
          <span
            className={`  ${
              darkMode
                ? animateClicked && "animate"
                : animateClicked && "animateb"
            }`}
          ></span>
        </div>

        <div className="bg-gray-400 rounded-md about w-1/6 education span">
          <span className={`${darkMode ? "animate" : "animateb"}`}></span>
          <div className=" p-2 text-center rounded-md w-16">
            <img src={nexti} alt="nextjs" />
          </div>
          <p className="text-xs md:text-xl font-bold px-3 mt-2 text-center">
            Nextjs
          </p>
          <span
            className={`  ${
              darkMode
                ? animateClicked && "animate"
                : animateClicked && "animateb"
            }`}
          ></span>
        </div>

        <div className="bg-gray-400 w-1/6 rounded-md about education span">
          <span className={`${darkMode ? "animate" : "animateb"}`}></span>
          <div className="bg-gray-400 p-2 text-center rounded-md w-16">
            <img src={redux} alt="Redux" />
          </div>
          <p className="text-xs md:text-xl font-bold px-3 mt-2 text-center">
            Redux
          </p>
          <span
            className={`  ${
              darkMode
                ? animateClicked && "animate"
                : animateClicked && "animateb"
            }`}
          ></span>
        </div>

        <div className="bg-gray-400 rounded-md about w-1/6 education span">
          <span className={`${darkMode ? "animate" : "animateb"}`}></span>
          <div className="bg-black p-2 text-center rounded-md w-16">
            <FontAwesomeIcon
              icon={faBootstrap}
              className={`h-10 ${darkMode ? "text-white" : "text-gray-400"}`}
            />
          </div>
          <p className="text-xs md:text-xl font-bold px-3 mt-2 text-center">
            Bootstrap
          </p>
          <span
            className={`  ${
              darkMode
                ? animateClicked && "animate"
                : animateClicked && "animateb"
            }`}
          ></span>
        </div>

        <div className="bg-gray-400 rounded-md about w-1/6 education span">
          <span className={`${darkMode ? "animate" : "animateb"}`}></span>
          <div className={`bg-gray-400 p-2 text-center rounded-md w-16`}>
            <img src={tailwind} alt="Tailwindcss" />
          </div>
          <p className="text-xs md:text-xl font-bold px-3 mt-2 text-center">
            Tailwindcss
          </p>
          <span
            className={`  ${
              darkMode
                ? animateClicked && "animate"
                : animateClicked && "animateb"
            }`}
          ></span>
        </div>

        <div className="bg-gray-400 w-1/6 rounded-md about education span">
          <span className={`${darkMode ? "animate" : "animateb"}`}></span>
          <div className="bg-black p-2 text-center rounded-md w-16">
            <FontAwesomeIcon
              icon={faGitAlt}
              className={`h-10 ${darkMode ? "text-white" : "text-gray-400"}`}
            />
          </div>
          <p className="text-xs md:text-xl font-bold px-3 mt-2 text-center">
            Git
          </p>
          <span
            className={`  ${
              darkMode
                ? animateClicked && "animate"
                : animateClicked && "animateb"
            }`}
          ></span>
        </div>

        <div className="bg-gray-400 w-1/6 rounded-md about education span">
          <span className={`${darkMode ? "animate" : "animateb"}`}></span>
          <div className="bg-black p-2 text-center rounded-md w-16">
            <FontAwesomeIcon
              icon={faGithub}
              className={`h-10 ${darkMode ? "text-white" : "text-gray-400"}`}
            />
          </div>
          <p className="text-xs md:text-xl font-bold px-3 mt-2 text-center">
            GitHub
          </p>
          <span
            className={`  ${
              darkMode
                ? animateClicked && "animate"
                : animateClicked && "animateb"
            }`}
          ></span>
        </div>

        <div className="bg-gray-400 w-1/6 rounded-md about education span">
          <span className={`${darkMode ? "animate" : "animateb"}`}></span>
          <div className="bg-gray-400 p-2 text-center rounded-md w-16">
            <img src={firebase} alt="Firebase" />
          </div>
          <p className="text-xs md:text-xl font-bold px-3 mt-2 text-center">
            Firebase
          </p>
          <span
            className={`  ${
              darkMode
                ? animateClicked && "animate"
                : animateClicked && "animateb"
            }`}
          ></span>
        </div>

        <div className="bg-gray-400 w-1/6 rounded-md about education span">
          <span className={`${darkMode ? "animate" : "animateb"}`}></span>
          <div className="bg-gray-400 p-2 text-center rounded-md w-16">
            <FontAwesomeIcon
              icon={faWordpress}
              className={`h-10 text-black `}
            />
          </div>
          <p className="text-xs md:text-xl font-bold px-3 mt-2 text-center">
            WordPress
          </p>
          <span
            className={`  ${
              darkMode
                ? animateClicked && "animate"
                : animateClicked && "animateb"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
