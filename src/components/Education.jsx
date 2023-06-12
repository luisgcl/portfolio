// Importa React y la imagen del certificado
import React from "react";
import certificado from "../assets/certificado_henry.jpg";

// Define el componente Education y pasa varias props a él
const Education = ({ darkMode, animateClicked }) => {
  // Devuelve una expresión JSX
  return (
    <div
      id="education"
      className={`h-screen flex justify-center items-center ${
        darkMode ? "bg-black" : "bg-white"
      } ${darkMode ? "text-white" : "text-black"}`}
    >
      <div>
        <p className="text-5xl font-bold text-center py-5 span">
          {/* Un span con una clase que se aplica condicionalmente en función del valor de darkMode */}
          <span className={`${darkMode ? "animate" : "animateb"}`}></span>
          Educación
          {/* Un span con una clase que se aplica condicionalmente en función del valor de animateClicked */}
          <span
            className={`  ${
              darkMode
                ? animateClicked && "animate"
                : animateClicked && "animateb"
            }`}
          ></span>
        </p>
        {/* Un div con varias clases y dos divs secundarios */}
        <div className="flex p-4 gap-5 span">
          {/* Un div con varias clases y varios párrafos con clases y elementos secundarios */}
          <div
            className={`border-2 p-4 education ${
              darkMode ? "border-white" : "border-black"
            } rounded-lg w-1/2`}
          >
            {/* Un span con una clase que se aplica condicionalmente en función del valor de darkMode */}
            <span className={`${darkMode ? "animate" : "animateb"}`}></span>
            <p className="text-xl font-bold py-4">
              Título:{" "}
              <span className="text-gray-500">Ingeniero en Informática</span>
            </p>
            <p className="text-xl font-bold py-4">
              Universidad:{" "}
              <span className="text-gray-500">Rómulo Gallegos</span>
            </p>
            <p className="text-xl font-bold py-4">
              Año: <span className="text-gray-500">2018</span>
            </p>
            <p className="text-xl font-bold py-4">
              País: <span className="text-gray-500">Venezuela</span>
            </p>
            {/* Un span con una clase que se aplica condicionalmente en función del valor de animateClicked */}
            <span
              className={`  ${
                darkMode
                  ? animateClicked && "animate"
                  : animateClicked && "animateb"
              }`}
            ></span>
          </div>
          {/* Un div con varias clases y varios párrafos con clases y elementos secundarios */}
          <div
            className={`border-2 p-4 rounded-lg education span ${
              darkMode ? "border-white" : "border-black"
            } w-1/2`}
          >
            {/* Un span con una clase que se aplica condicionalmente en función del valor de darkMode */}
            <span className={`${darkMode ? "animate" : "animateb"}`}></span>
            <p className="text-xl font-bold py-4">
              BootCamp: <span className="text-gray-500">soyHenry</span>
            </p>
            <p className="text-xl font-bold py-4">
              FullStack Web Developer:{" "}
              <span className="text-gray-500">
                700 horas de cursado teórico-práctico. 2022.
              </span>
            </p>
            <p className="flex-wrap text-xl font-bold flex items-center py-4">
              Certificado:
              {/* Un enlace con varias clases y una fuente de imagen */}
              <a
                target="_blanck"
                className="md:mx-5"
                href="https://certificates.soyhenry.com/cert?id=4940e434-d6fc-456b-85f5-c70eb3eb8307"
              >
                <img
                  className="h-32  md:w-44"
                  src={certificado}
                  alt="Certificado"
                />
              </a>
            </p>
            {/* Un span con una clase que se aplica condicionalmente en función del valor de animateClicked */}
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
    </div>
  );
};

// Exporta el componente Education como la exportación predeterminada del módulo
export default Education;
