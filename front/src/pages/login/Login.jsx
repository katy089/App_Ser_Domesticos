import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../axios/axios.user";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();

  useEffect(() => {
    const storedRememberMe = localStorage.getItem("rememberMe") === "true";
    setRememberMe(storedRememberMe);

    if (storedRememberMe) {
      const storedEmail = localStorage.getItem("email");
      const storedPassword = localStorage.getItem("password");
      setEmail(storedEmail || "");
      setPassword(storedPassword || "");
    }
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(email, password);

      login(response.user);

      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
      } else {
        localStorage.removeItem("rememberMe");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }

      alert("Has iniciado sesión correctamente");
      navigate("/");
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      setError("Error al iniciar sesión, verifica tus credenciales");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6">
        <div className="mb-2 block">
          <h3 className="text-2xl font-bold p-5">INICIAR SESIÓN</h3>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Mail"
            required
          />
        </div>
        <div className="mb-2 block">
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Contraseña"
            required
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Recordarme
          </label>
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <button
          type="submit"
          className="text-white bg-[#1995AD] hover:bg-[#2aa0b8] hover:underline font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2"
        >
          Iniciar sesión
        </button>{" "}
      </form>
    </>
  );
};

export default Login;
