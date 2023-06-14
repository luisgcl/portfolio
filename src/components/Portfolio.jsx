import React from "react";
import portfolio from "../assets/portfolio.png";
import movies from "../assets/movies.png";
import animes from "../assets/animes.png";
import criptos from "../assets/criptos.png";
import gastos from "../assets/gastos.png";
import pacientes from "../assets/pacientes.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Portfolio = ({ darkMode, animateClicked }) => {
  return (
    <div
      id="portfolio"
      className={` ${darkMode ? "bg-black" : "bg-white"}  ${
        darkMode ? "text-white" : "text-black"
      }
      `}
    >
      <p className="text-5xl font-bold text-center pt-14 pb-3 span">
        <span className={`${darkMode ? "animate" : "animateb"}`}></span>
        Proyectos
        <span
          className={`  ${
            darkMode
              ? animateClicked && "animate"
              : animateClicked && "animateb"
          }`}
        ></span>
      </p>

      <div className="  justify-center items-center gap-2 md:px-10 lg:px-32 sm:columns-1 md:columns-2 lg:columns-3">
        <div className="w-full  md:h-80 portfolio">
          <span className={`${darkMode ? "animate" : "animateb"}`}></span>
          <a target="_blank" href="https://portfolio-luisgcl.vercel.app/">
            <img
              className="w-full h-36 rounded-t-lg"
              src={portfolio}
              alt="img"
            />
          </a>
          <div className="px-3 flex flex-wrap justify-center items-center">
            <p className="text-2xl">Portfolio</p>
            <p className=" text-gray-500 pb-2 h-14">
              Portfolio personal que muestra mis datos y los diferentes
              proyectos realizados.
            </p>
            <p className="pb-3">Css, Javascript, React, Tailwind</p>
          </div>
          <a target="_blank" href="https://github.com/luisgcl/portfolio">
            <button
              className={`w-full p-2 rounded-lg ${
                darkMode ? "bg-gray-800" : " bg-gray-500"
              }`}
            >
              <FontAwesomeIcon className="px-2" icon={faGithub} />
              Github
            </button>
          </a>
          <span
            className={`  ${
              darkMode
                ? animateClicked && "animate"
                : animateClicked && "animateb"
            }`}
          ></span>
        </div>

        <div className="w-full  md:h-80 portfolio">
          <span className={`${darkMode ? "animate" : "animateb"}`}></span>
          <a target="_blank" href="https://movies-luisgcl.vercel.app/">
            <img className="w-full h-36 rounded-t-lg" src={movies} alt="img" />
          </a>
          <div className="px-3 flex flex-wrap justify-center items-center">
            <p className="text-2xl">Página de Películas</p>
            <p className="text-gray-500 pb-2 h-14">
              Página que muestra todas las películas antiguas, populares y
              próximas por salir.
            </p>
            <p className="pb-3  flex flex-wrap justify-center items-center">
              Javascript, React, Nextjs, Redux, Tailwind
            </p>
          </div>
          <a target="_blank" href="https://github.com/luisgcl/movies">
            <button
              className={`w-full p-2 rounded-lg ${
                darkMode ? "bg-gray-800" : " bg-gray-500"
              }`}
            >
              <FontAwesomeIcon className="px-2" icon={faGithub} />
              Github
            </button>
          </a>
          <span
            className={`  ${
              darkMode
                ? animateClicked && "animate"
                : animateClicked && "animateb"
            }`}
          ></span>
        </div>

        <div className="w-full  md:h-80 portfolio">
          <span className={`${darkMode ? "animate" : "animateb"}`}></span>
          <a target="_blank" href="https://new-anime.vercel.app/">
            <img className="w-full h-36 rounded-t-lg" src={animes} alt="img" />
          </a>
          <div className="px-3 flex flex-wrap justify-center items-center">
            <p className="text-2xl">Página de Animes</p>
            <p className="text-gray-500 pb-2 h-14">
              Página que muestra todos los diferentes tipos de animes y ovas
            </p>
            <p className="pb-3">Css, Javascript, React, Redux, Bootstrap</p>
          </div>
          <a target="_blank" href="https://github.com/luisgcl/new-anime">
            <button
              className={`w-full p-2 rounded-lg ${
                darkMode ? "bg-gray-800" : " bg-gray-500"
              }`}
            >
              <FontAwesomeIcon className="px-2" icon={faGithub} />
              Github
            </button>
          </a>
          <span
            className={`  ${
              darkMode
                ? animateClicked && "animate"
                : animateClicked && "animateb"
            }`}
          ></span>
        </div>

        <div className="w-full  md:h-80 portfolio">
          <span className={`${darkMode ? "animate" : "animateb"}`}></span>
          <a target="_blank" href="https://musical-pie-1a70f9.netlify.app/">
            <img className="w-full h-36 rounded-t-lg" src={criptos} alt="img" />
          </a>
          <div className="px-3 flex flex-wrap justify-center items-center">
            <p className="text-2xl">Cotizador de Criptomonedas</p>
            <p className="text-gray-500 pb-2 h-14">
              Página en la que puedes ver los diferentes tipos de criptomonedas
              y su valor actual.
            </p>
            <p className="pb-3">Javascript, React, Styled Components.</p>
          </div>
          <a target="_blank" href="https://github.com/luisgcl/criptos-react">
            <button
              className={`w-full p-2 rounded-lg ${
                darkMode ? "bg-gray-800" : " bg-gray-500"
              }`}
            >
              <FontAwesomeIcon className="px-2" icon={faGithub} />
              Github
            </button>
          </a>
          <span
            className={`  ${
              darkMode
                ? animateClicked && "animate"
                : animateClicked && "animateb"
            }`}
          ></span>
        </div>

        <div className="w-full  md:h-80 portfolio">
          <span className={`${darkMode ? "animate" : "animateb"}`}></span>
          <a
            target="_blank"
            href="https://glistening-alpaca-dec7b9.netlify.app/"
          >
            <img className="w-full h-36 rounded-t-lg" src={gastos} alt="img" />
          </a>
          <div className="px-3 flex flex-wrap justify-center items-center">
            <p className="text-2xl">Control de Presupuesto</p>
            <p className="text-gray-500 pb-2 h-14">
              Página en la que puedes llevar el control de los gastos de un
              presupuesto.
            </p>
            <p className="pb-3">Javascript, React, Styled Components.</p>
          </div>
          <a target="_blank" href="https://github.com/luisgcl/control-gastos">
            <button
              className={`w-full p-2 rounded-lg ${
                darkMode ? "bg-gray-800" : " bg-gray-500"
              }`}
            >
              <FontAwesomeIcon className="px-2" icon={faGithub} />
              Github
            </button>
          </a>
          <span
            className={`  ${
              darkMode
                ? animateClicked && "animate"
                : animateClicked && "animateb"
            }`}
          ></span>
        </div>

        <div className="w-full  md:h-80 portfolio">
          <span className={`${darkMode ? "animate" : "animateb"}`}></span>
          <a
            target="_blank"
            href="https://stalwart-nasturtium-3c924d.netlify.app/"
          >
            <img
              className="w-full h-36 rounded-t-lg"
              src={pacientes}
              alt="img"
            />
          </a>
          <div className="px-3 flex flex-wrap justify-center items-center">
            <p className="text-2xl">Administrador de pacientes.</p>
            <p className="text-gray-500 pb-2 h-14">
              Página que administra los pacientes de una veterinaria ficticia.
            </p>
            <p className="pb-3">
              Javascript, React, Tailwindcss, LocalStorage.
            </p>
          </div>
          <a
            target="_blank"
            href="https://github.com/luisgcl/citas-react-actualizado"
          >
            <button
              className={`w-full p-2 rounded-lg ${
                darkMode ? "bg-gray-800" : " bg-gray-500"
              }`}
            >
              <FontAwesomeIcon className="px-2" icon={faGithub} />
              Github
            </button>
          </a>
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

export default Portfolio;
