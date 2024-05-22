import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import "../../style/componentsStyle/Register.css";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../axios/axios.user";
import { useAuth } from "../../context/AuthContext";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [registeredUser, setRegisteredUser] = useState(null);
  const { login } = useAuth();
  const [phoneError, setPhoneError] = useState("");
  const navigate = useNavigate("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña es demasiado corta");
      return;
    }

    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError("El número de teléfono solo puede contener números.");
      return;
    } else {
      setPhoneError("");
    }

    try {
      const data = await createUser(name, email, phone, password);

      alert("Te has registrado correctamente");
      navigate("/validate");
    } catch (error) {
      console.error("Error en el registro", error);
      if (error.response && error.response.status === 400) {
        alert(
          "El correo electrónico ya está registrado. Por favor, utiliza otro correo."
        );
      } else {
        alert(
          "Algo sucedió mal durante el registro. Por favor, inténtalo de nuevo."
        );
      }

      setError("Error al registrar. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="p-5">
        <h3 className="text-2xl font-bold p-5">REGISTRATE</h3>
        <TextInput
          id="name"
          type="text"
          placeholder="Nombre"
          required
          shadow
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="pt-3">
          <TextInput
            id="email"
            type="email"
            placeholder="Correo Electrónico"
            required
            shadow
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="pt-3">
          <TextInput
            id="password"
            type="password"
            placeholder="Contraseña"
            required
            shadow
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="pt-3">
          <TextInput
            id="repeat-password"
            type="password"
            placeholder="Repetir Contraseña"
            required
            shadow
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>
        <div className="pt-3">
          <TextInput
            id="phone"
            type="phone"
            placeholder="Número de teléfono"
            required
            shadow
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex gap-2 p-4">
          <Checkbox id="agree" required />
          <Label htmlFor="agree" className="flex">
            Acepto los&nbsp;
            <Link
              href="#"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              términos y condiciones
            </Link>
          </Label>
        </div>
        <button
          onSubmit={handleSubmit}
          type="submit"
          className="text-white bg-[#1995AD] hover:bg-[#2aa0b8] hover:underline font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2"
        >
          Registrarme
        </button>
      </div>
    </form>
  );
}

export default Register;
