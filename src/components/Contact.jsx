import React from "react";
import cv from "../assets/CV_image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Contact = ({ darkMode, animateClicked }) => {
  return (
    <>
      <div
        id="contact"
        className={` sm:flex-wrap md:flex justify-between items-center px-32 ${
          darkMode ? "bg-black" : "bg-white"
        } ${darkMode ? "text-white" : "text-black"}`}
      >
        <div className=" md:mt-72 span">
          <span className={`${darkMode ? "animate" : "animateb"}`}></span>
          <p className="text-5xl font-bold p-2">Contacto</p>
          <p className="text-2xl font-bold p-2">Email:</p>
          <p className="p-2">
            <a href="mailto:luischneyder@gmail.com">luischneyder@gmail.com</a>
          </p>
          <p className="text-2xl font-bold p-2">Curriculum:</p>
          <div className="w-40 mt-2 mb-2 border-2 rounded-md border-black">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1Ok6OCEJV2I3cmpoghFOF2wjCcTLK2bNp/view"
            >
              <img src={cv} alt="CV imagen" />
            </a>
          </div>
          <span
            className={`  ${
              darkMode
                ? animateClicked && "animate"
                : animateClicked && "animateb"
            }`}
          ></span>
        </div>

        <div className="span">
          <span className={`${darkMode ? "animate" : "animateb"}`}></span>
          <p className="text-5xl font-bold p-2">Mis redes:</p>
          <div className="flex justify-center items-center py-4">
            <a
              className="text-3xl px-2"
              target="_blank"
              href="https://www.linkedin.com/in/luis-castillo-b59529185/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a
              className="text-3xl px-2"
              target="_blank"
              href="https://github.com/luisgcl"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              className="text-3xl px-2"
              target="_blank"
              href="https://www.facebook.com/luisowow"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>

          <span
            className={`  ${
              darkMode
                ? animateClicked && "animate"
                : animateClicked && "animateb"
            }`}
          ></span>
        </div>
      </div>

      <div className="span">
        <span className={`${darkMode ? "animate" : "animateb"}`}></span>
        <hr className={`mx-20 ${darkMode ? "border-white" : "border-black"}`} />
        <footer
          className={` p-2 text-center ${darkMode ? "bg-black" : "bg-white"}  ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Hecho por Luis Castillo | 2023
        </footer>
        <span
          className={`  ${
            darkMode
              ? animateClicked && "animate"
              : animateClicked && "animateb"
          }`}
        ></span>
      </div>
    </>
  );
};

export default Contact;
