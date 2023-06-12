import { useState } from "react";
import Sobremi from "./components/Sobremi";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
function App() {
  // Define dos variables de estado utilizando el gancho useState: darkMode y animateClicked. darkMode se inicializa en true, mientras que animateClicked se inicializa en false.
  const [darkMode, setDarkMode] = useState(true);
  const [animateClicked, setAnimateClicked] = useState(false);

  return (
    <>
      {/* Un div con un id de "inicio" y varias clases que se aplican condicionalmente en función del valor de darkMode. Este div contiene dos elementos secundarios: un componente Navigation y otro div */}
      <div
        id="inicio"
        className={`flex h-screen  ${darkMode ? "bg-black" : "bg-white"}  ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        {/* El componente Navigation con varias props pasadas a él */}
        <Navigation
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          animateClicked={animateClicked}
          setAnimateClicked={setAnimateClicked}
        />
        {/* Un div con una clase de "w-2/3" y varios elementos secundarios, incluyendo una foto de perfil, un nombre, un título de trabajo, una breve descripción y un botón para ver el CV del desarrollador */}
        <div
          className={`flex justify-center items-center w-3/5 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          <div className=" w-2/3 flex-wrap">
            <div className="">
              {/* Un span con una clase que se aplica condicionalmente en función del valor de darkMode */}
              <span className={`${darkMode ? "animatex" : "animatexb"}`}></span>
              <p className="text-3xl md:text-4xl font-bold font-sans my-5 span">
                Schneyder
                {/* Un span con una clase que se aplica condicionalmente en función del valor de animateClicked */}
                <span
                  className={`  ${
                    darkMode
                      ? animateClicked && "animatex"
                      : animateClicked && "animatexb"
                  }`}
                ></span>
              </p>
            </div>
            <div>
              {/* Un span con una clase que se aplica condicionalmente en función del valor de darkMode */}
              <span className={`${darkMode ? "animate" : "animateb"}`}></span>
              {/* Un párrafo con varias clases y un contenido de texto */}
              <p className="text-2xl md:text-5xl font-bold font-sans my-5 text-gray-700 slice span">
                Frontend Developer.
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
            <div>
              {/* Un span con una clase que se aplica condicionalmente en función del valor de darkMode */}
              <span className={`${darkMode ? "animate" : "animateb"}`}></span>
              {/* Un párrafo con varias clases y un contenido de texto */}
              <p className="md:text-xl font-bold font-sans text-gray-500 span">
                Desarrollador Frontend con experiencia en HTML, CSS y
                JavaScript. Apasionado por crear interfaces de usuario
                intuitivas y atractivas para mejorar la experiencia del usuario.
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
            {/* Un botón con varias clases y un enlace a un archivo PDF */}
            <button
              className={`bg-gray-900 text-white p-3 mt-5 rounded-2xl  navigationw span`}
            >
              {/* Un span con una clase que se aplica condicionalmente en función del valor de darkMode */}
              <span className={`${darkMode ? "animate" : "animateb"}`}></span>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1Ok6OCEJV2I3cmpoghFOF2wjCcTLK2bNp/view"
              >
                Ver CV 🗎
                {/* Un span con una clase que se aplica condicionalmente en función del valor de animateClicked */}
                <span
                  className={`  ${
                    darkMode
                      ? animateClicked && "animate"
                      : animateClicked && "animateb"
                  }`}
                ></span>
              </a>
            </button>
          </div>
        </div>

        {/* Un div con una clase de "w-2/5" y un elemento secundario que contiene una imagen. Las clases aplicadas a este div también se aplican condicionalmente en función del valor de darkMode. */}
        <div className={` w-2/5 pt-4 home ${darkMode ? "home" : "home2"}`}>
          <div className={darkMode ? "image" : "image2"}>
            {/* Un span con una clase que se aplica condicionalmente en función del valor de darkMode */}
            <span className={`${darkMode ? "animate2" : "animate2b"}`}></span>
            {/* Un span con una clase que se aplica condicionalmente en función del valor de animateClicked. */}
            <span
              className={`  ${
                darkMode
                  ? animateClicked && "animate2"
                  : animateClicked && "animate2b"
              }`}
            ></span>
          </div>
        </div>
      </div>
      {/* Los componentes Sobremi, Education, Skills, Portfolio y Contact se representan con sus respectivas props pasadas a ellos */}
      <Sobremi darkMode={darkMode} animateClicked={animateClicked} />
      <Education darkMode={darkMode} animateClicked={animateClicked} />
      <Skills darkMode={darkMode} animateClicked={animateClicked} />
      <Portfolio darkMode={darkMode} animateClicked={animateClicked} />
      <Contact darkMode={darkMode} animateClicked={animateClicked} />
    </>
  );
}

export default App;
