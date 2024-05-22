import React, { useState, useEffect } from "react";
import { Select, TextInput, Textarea } from "flowbite-react";
import { createWorker } from "../../axios/axios.user";
import { useAuth } from "../../context/AuthContext";
import { uploadFile } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

function FormService() {
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedProvinceName, setSelectedProvinceName] = useState("");
  const [localities, setLocalities] = useState([]);
  const [selectedLocality, setSelectedLocality] = useState("");
  const [selectedLocalityName, setSelectedLocalityName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const { currentUser, updateCurrentUserWithWorkerData } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await fetch(
          "https://apis.datos.gob.ar/georef/api/provincias?campos=nombre"
        );
        const data = await response.json();
        setProvinces(
          data.provincias.map((province) => ({
            id: province.id,
            nombre: province.nombre,
          }))
        );
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchProvinces();
  }, []);

  useEffect(() => {
    const fetchLocalities = async () => {
      if (selectedProvince) {
        try {
          const response = await fetch(
            `https://apis.datos.gob.ar/georef/api/municipios?provincia=${selectedProvince}&campos=nombre`
          );
          const data = await response.json();
          setLocalities(
            data.municipios.map((locality) => ({
              id: locality.id,
              nombre: locality.nombre,
            }))
          );
        } catch (error) {
          console.error("Error fetching localities:", error);
        }
      }
    };

    fetchLocalities();
  }, [selectedProvince]);

  useEffect(() => {
    const selectedProvinceData = provinces.find(
      (province) => province.id === selectedProvince
    );
    if (selectedProvinceData) {
      setSelectedProvinceName(selectedProvinceData.nombre);
    }
  }, [selectedProvince, provinces]);

  useEffect(() => {
    const selectedLocalityData = localities.find(
      (locality) => locality.id === selectedLocality
    );
    if (selectedLocalityData) {
      setSelectedLocalityName(selectedLocalityData.nombre);
    }
  }, [selectedLocality, localities]);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value.toLowerCase());
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fileAvatar = await uploadFile(selectedFile);
      const result = await createWorker({
        _id: currentUser?._id,
        category,
        fileAvatar,
        desc: description,
        province: {
          provinceId: selectedProvince,
          provinceName: selectedProvinceName,
        },
        city: {
          cityId: selectedLocality,
          cityName: selectedLocalityName,
        },
        address,
      });

      updateCurrentUserWithWorkerData({
        ...currentUser,
        worker: {
          ...currentUser.worker,
          category,
          fileAvatar,
          desc: description,
          provinceName: selectedProvinceName,
          cityName: selectedLocalityName,
          address,
        },
      });
      

      alert("Te has registrado como trabajador correctamente");
      navigate("/profile");
      console.log("Trabajador registrado con éxito:", result);
    } catch (error) {
      console.error("Error al registrar el trabajador:", error);
    }
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <h3 className="text-xl font-bold my-5">
        ¡Registrate como trabajador y conecta con gente de tu zona!
      </h3>

      <div className="max-w-md mb-4">
        <Select
          id="province"
          value={selectedProvince}
          onChange={(e) => setSelectedProvince(e.target.value)}
          required
        >
          <option value="" disabled>
            Selecciona tu provincia
          </option>
          {provinces.map((province) => (
            <option key={province.id} value={province.id}>
              {province.nombre}
            </option>
          ))}
        </Select>
      </div>
      <div className="mb-4">
        {" "}
        <Select
          id="city"
          value={selectedLocality}
          onChange={(e) => setSelectedLocality(e.target.value)}
          required
        >
          <option value="" disabled>
            Selecciona tu localidad
          </option>
          {localities.map((locality) => (
            <option key={locality.id} value={locality.id}>
              {locality.nombre}
            </option>
          ))}
        </Select>
      </div>
      <div className="my-4">
        <TextInput
          id="address"
          type="text"
          value={address}
          onChange={handleAddressChange}
          placeholder="Agrega una dirección (opcional)"
          required
          shadow
        />
      </div>
      <div className="max-w-md mb-4">
        <Select
          id="category"
          value={category}
          onChange={handleCategoryChange}
          required
        >
          <option value="" disabled defaultValue>
            Selecciona tu oficio
          </option>
          <option value="gasista">Gasista</option>
          <option value="plomero">Plomero</option>
          <option value="albanil">Albañil</option>
          <option value="mecanico">Mecánico</option>
          <option value="electricista">Electricista</option>
          <option value="carpintero">Carpintero</option>
        </Select>
      </div>

      <div className="mb-4">
        <Textarea
          id="desc"
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Agrega una descripción"
          required
        />
      </div>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">
                Click en Seleccionar Archivo
              </span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>

          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="multiple_files"
          >
            Selecciona una imagen de perfil.
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            type="file"
            onChange={handleFileChange}
          />
        </label>
      </div>
      <p
        id="floating_helper_text"
        className="mt-2 text-xs text-gray-500 dark:text-gray-400"
      >
        {" "}
        Respetando las{" "}
        <a
          href="#"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          Reglas y comunidad
        </a>
        .
      </p>

      <button
        type="submit"
        className="text-white bg-[#1995AD] hover:bg-[#2aa0b8] hover:underline font-medium rounded-lg text-sm px-10 py-2.5 me-2 my-7"
      >
        Registrarme
      </button>
    </form>
  );
}

export default FormService;
