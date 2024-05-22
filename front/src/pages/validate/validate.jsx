import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyUser } from "../../axios/axios.user";

const Validation = () => {
  const [validationCode, setValidationCode] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await verifyUser(email, validationCode);

      alert("Código validado correctamente");
      navigate("/login");
    } catch (error) {
      alert(`Error al validar el código: ${error.response.data.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h3 className="text-black text-2xl m-4">
        Se ha enviado un código de validación a tu email.
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          type="email"
          placeholder="Correo Electrónico"
          className="shadow appearance-none border m-4 border-[#1995AD] rounded w-full py-2 px-3 text-black leading-tight focus:border-[#2aa0b8]"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          className="shadow appearance-none border m-4 border-[#1995AD] rounded w-full py-2 px-3 text-black leading-tight focus:border-[#2aa0b8]"
          placeholder="Ingrese el código de validación"
          value={validationCode}
          onChange={(e) => setValidationCode(e.target.value)}
          required
        />
        <button
          type="submit"
          className="m-4 text-white bg-[#1995AD] hover:bg-[#2aa0b8] hover:underline font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2"
        >
          Validar
        </button>
      </form>
    </div>
  );
};

export default Validation;
