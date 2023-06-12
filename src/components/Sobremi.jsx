// Importa React, la imagen de avatar y los iconos de FontAwesome
import React from "react";
import avatar from "../assets/avatar2b.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faReact } from "@fortawesome/free-brands-svg-icons";

// Define el componente Sobremi y pasa varias props a él
const Sobremi = ({ darkMode, animateClicked }) => {
  // Devuelve una expresión JSX
  return (
    <div
      id="sobremi"
      className={`pt-5 about ${darkMode ? "bg-black" : "bg-white"} ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      {/* Un div con una clase y un párrafo con varias clases y elementos secundarios */}
      <div className="">
        <p className="text-5xl font-bold my-10 span">
          {/* Un span con una clase que se aplica condicionalmente en función del valor de darkMode */}
          <span className={`${darkMode ? "animate" : "animateb"}`}></span>
          Sobre <span className="text-blue-700 font-bold">mi</span>
          {/* Un span con una clase que se aplica condicionalmente en función del valor de animateClicked */}
          <span
            className={`  ${
              darkMode
                ? animateClicked && "animate"
                : animateClicked && "animateb"
            }`}
          ></span>
        </p>
      </div>

      {/* Un div con una clase y varios elementos secundarios */}
      <div className=" about-img">
        {/* Un span con una clase que se aplica condicionalmente en función del valor de darkMode */}
        <span className={`${darkMode ? "animate2" : "animate2b"}`}></span>
        {/* Una imagen con una clase y una fuente de imagen */}
        <img className="span" src={avatar} alt="Luis" />
        {/* Un span con una clase que se aplica condicionalmente en función del valor de darkMode */}
        <span className={` ${darkMode ? " circle" : " circlew"}`}>
          {/* Dos iconos de FontAwesome con varias clases que se aplican condicionalmente en función del valor de darkMode */}
          <FontAwesomeIcon
            icon={faReact}
            className={`${
              darkMode
                ? "text-black bg-white border rounded-full icono p-2"
                : "text-white bg-black border rounded-full icono p-2"
            }`}
          />
          <FontAwesomeIcon
            icon={faJs}
            className={`${
              darkMode
                ? "text-black bg-white border rounded-full icono2 p-2"
                : "text-white bg-black border rounded-full icono2 p-2"
            }`}
          />
        </span>

        {/* Un span con una clase que se aplica condicionalmente en función del valor de animateClicked */}
        <span
          className={`  ${
            darkMode
              ? animateClicked && "animate2"
              : animateClicked && "animate2b"
          }`}
        ></span>
      </div>
      {/* Un div con varias clases y un párrafo con varias clases y elementos secundarios */}
      <div className="w-3/5 my-10">
        <p className="text-5xl font-bold  text-center mb-5 span">
          {/* Un span con una clase que se aplica condicionalmente en función del valor de darkMode */}
          <span className={`${darkMode ? "animatex" : "animatexb"}`}></span>
          Frontend Developer
          {/* Un span con una clase que se aplica condicionalmente en función del valor de animateClicked */}
          <span
            className={`  ${
              darkMode
                ? animateClicked && "animatex"
                : animateClicked && "animatexb"
            }`}
          ></span>
        </p>
        <p className="text-gray-400 font-bold span">
          {/* Un span con una clase que se aplica condicionalmente en función del valor de darkMode */}
          <span className={`${darkMode ? "animate" : "animateb"}`}></span>
          {/* Un texto que describe al desarrollador */}
          Mi nombre completo es Luis Gregorio Castillo Licon, como desarrollador
          frontend, mi objetivo es crear interfaces de usuario atractivas y
          funcionales que satisfagan las necesidades de los usuarios. Me
          apasiona trabajar en equipo y colaborar con diseñadores y
          desarrolladores para crear soluciones innovadoras y de alta calidad.
          {/* Un span con una clase que se aplica condicionalmente en función del valor de animateClicked */}
          <span
            className={`  ${
              darkMode
                ? animateClicked && "animate"
                : animateClicked && "animateb"
            }`}
          ></span>
        </p>
      </div>
    </div>
  );
};

// Exporta el componente Sobremi como la exportación predeterminada del módulo
export default Sobremi;
