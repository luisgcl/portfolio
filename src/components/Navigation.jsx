// Importa los ganchos useEffect y useRef de la biblioteca React y el archivo de audio "impossible.mp3"
import React, { useEffect, useRef } from "react";
import player from "../audio/impossible.mp3";

// Define el componente Navigation y pasa varias props a él
const Navigation = ({
  darkMode,
  setDarkMode,
  animateClicked,
  setAnimateClicked,
}) => {
  // Define una función que cambia el modo oscuro y agrega o elimina la clase "dark" del cuerpo del documento
  function toggleDarkMode() {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  }

  // Define una función que establece animateClicked en true y luego lo establece en false después de 3 segundos.
  function handleClick() {
    setAnimateClicked(true);
    setTimeout(() => {
      setAnimateClicked(false);
    }, 3000);
  }

  // Crea una referencia a un elemento de audio utilizando el gancho useRef
  const audioRef = useRef(null);

  // Define una función que reproduce el audio cuando se monta el componente
  const playAudio = () => {
    audioRef.current.play();
  };

  // Utiliza el gancho useEffect para llamar a la función playAudio cuando se monta el componente
  useEffect(() => {
    playAudio();
  }, []);

  // Devuelve una expresión JSX envuelta en un fragmento vacío
  return (
    <>
      {/* Un elemento de audio con una referencia a la variable audioRef y una fuente de audio */}
      <audio ref={audioRef} src={player} loop />
      {/* Un elemento nav con varias clases y varios elementos secundarios */}
      <nav
        className={`fixed pt-5 flex justify-between md:w-full md:px-10 md:pt-4 ${
          darkMode ? "text-white" : "text-black"
        } z-10  `}
      >
        {/* Un div con una clase de "hidden sm:block p-2 span" y varios elementos secundarios */}
        <div onClick={playAudio} className=" hidden xl:block p-2 span">
          {/* Un span con una clase que se aplica condicionalmente en función del valor de darkMode */}
          <span className={`${darkMode ? "animate" : "animateb"}`}></span>
          {/* Un enlace con una clase y un controlador de eventos onClick que llama a la función handleClick */}
          <a href="#" className="" onClick={handleClick}>
            Schneyder.
            {/* Un span con una clase que se aplica condicionalmente en función del valor de animateClicked */}
            <span
              className={`  ${
                darkMode
                  ? animateClicked && "animate"
                  : animateClicked && "animateb"
              }`}
            ></span>
          </a>
        </div>
        {/* Un div con varias clases y varios elementos secundarios, incluyendo una lista de enlaces */}
        <div
          className={`md:mt-0 sm:mt-5 px-0 flex gap-4 text-white md:p-2 span ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          {/* Un span con una clase que se aplica condicionalmente en función del valor de darkMode */}
          <span className={`${darkMode ? "animate" : "animateb"}`}></span>
          {/* Una lista de enlaces con varias clases y controladores de eventos onClick que llaman a la función handleClick */}
          <ul
            className={` p-2 border rounded-xl ${
              darkMode ? "bg-black" : "bg-white"
            }  text-xs md:text-xl flex gap-3 md:gap-4 text-white span ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <span className={` ${animateClicked && "animate"}`}></span>
            <li onClick={playAudio}>
              <a
                className={`sm:p-0  md:p-2  ${
                  darkMode ? "text-white navigation" : "text-black navigationw"
                }`}
                href="#inicio"
                onClick={handleClick}
              >
                Inicio
              </a>
            </li>
            <li onClick={playAudio}>
              <a
                className={`sm:p-0 md:p-2  ${
                  darkMode ? "text-white navigation" : "text-black navigationw"
                }`}
                href="#sobremi"
                onClick={handleClick}
              >
                Sobremi
              </a>
            </li>
            <li onClick={playAudio}>
              <a
                className={`sm:p-0 md:p-2  ${
                  darkMode ? "text-white navigation" : "text-black navigationw"
                }`}
                href="#education"
                onClick={handleClick}
              >
                Educación
              </a>
            </li>
            <li onClick={playAudio}>
              <a
                className={`sm:p-0 md:p-2 ${
                  darkMode ? "text-white navigation" : "text-black navigationw"
                }`}
                href="#skills"
                onClick={handleClick}
              >
                Habilidades
              </a>
            </li>
            <li onClick={playAudio}>
              <a
                className={`sm:p-0 md:p-2 ${
                  darkMode ? "text-white navigation" : "text-black navigationw"
                }`}
                href="#portfolio"
                onClick={handleClick}
              >
                Portfolio
              </a>
            </li>
            <li onClick={playAudio}>
              <a
                className={`sm:p-0 md:p-2 ${
                  darkMode ? "text-white navigation" : "text-black navigationw"
                }`}
                href="#contact"
                onClick={handleClick}
              >
                Contacto
              </a>
            </li>
            {/* Un span con una clase que se aplica condicionalmente en función del valor de animateClicked */}
            <span
              className={`  ${
                darkMode
                  ? animateClicked && "animate"
                  : animateClicked && "animateb"
              }`}
            ></span>
          </ul>
        </div>
        {/* Un div con varias clases y un botón que llama a la función toggleDarkMode */}
        <div
          className={`hidden xl:block border-2 rounded-full md:p-4  ${
            darkMode ? "" : "border-black"
          }`}
        >
          <button onClick={toggleDarkMode}>
            {/* Un span con una clase de "animate" */}
            <span className="animate"></span>
            {/* Un ternario que muestra un emoji de sol o luna en función del valor de darkMode */}
            {darkMode ? "☀" : "🌙"}
            {/* Un span con una clase que se aplica condicionalmente en función del valor de animateClicked */}
            <span
              className={` ${
                darkMode
                  ? animateClicked && "animate"
                  : animateClicked && "animateb"
              }`}
            ></span>
          </button>
        </div>
      </nav>
    </>
  );
};

// Exporta el componente Navigation como la exportación predeterminada del módulo
export default Navigation;
