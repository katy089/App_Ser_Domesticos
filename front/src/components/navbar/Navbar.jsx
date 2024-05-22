import Logo from "../../assets/logo.svg";
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function NavBar() {
  const { currentUser } = useAuth();

  return (
    <>
      <Navbar
        className="bg-[#1995AD] border-gray-200"
        fluid
      >
        <Navbar.Brand href="/">
          <img src={Logo} className="mr-3 h-16 sm:h-9 " alt="Contratame Logo" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          {currentUser ? (
            <>
              <Link
                to="/forms/services"
                className="text-white bg-[#1995AD] hover:bg-[#2aa0b8] hover:underline font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Publicar tu servicio
              </Link>
              <Link
                to={"/profile"}
                className="text-white bg-[#1995AD] hover:bg-[#2aa0b8] hover:underline font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                {currentUser.workerData
                  ? currentUser.workerData.name
                  : currentUser.name}
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white bg-[#1995AD] hover:bg-[#2aa0b8] hover:underline font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/register"
                className="text-white bg-[#1995AD] hover:bg-[#2aa0b8] hover:underline font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Registrar
              </Link>
            </>
          )}
        </div>
      </Navbar>
    </>
  );
}

export default NavBar;
