import React from "react";
import Logo from "../../assets/logo.svg";
import { useLocation, useParams } from "react-router-dom";
import { Footer as FooterDiv } from "flowbite-react";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="w-full bg-[#1995AD] text-white shadow">
      <div className="w-full flex flex-col items-center border-t-[1px] gap-1 md:flex-row md:justify-around px-5 py-2 overflow-y-hidden">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-20" alt="Logo" />
          </a>
          <ul className="flex items-center mb-6 text-sm font-medium text-white sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Sobre nosotros
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Términos y condiciones
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Preguntas frecuentes
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto lg:my-6" />
        <span className="block text-sm text-white sm:text-center">
          © 2024{" "}
          <a href="#" className="hover:underline">
            Contrátame
          </a>
          . Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
