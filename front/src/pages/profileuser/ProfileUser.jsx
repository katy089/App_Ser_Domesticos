import React, { useState, useEffect } from "react";
import { getUserData } from "../../axios/axios.user";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "flowbite-react";
import { FaWhatsapp } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    content: "Excelente servicio, muy recomendado!",
    author: "Nombre del Reseñador",
    date: "2024-02-25",
  },
  {
    id: 2,
    content: "Excelente servicio, muy recomendado!",
    author: "Nombre del Reseñador",
    date: "2024-02-25",
  },
  {
    id: 3,
    content: "Excelente servicio, muy recomendado!",
    author: "Nombre del Reseñador",
    date: "2024-02-25",
  },
];

const ProfileUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData(id);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        console.log("Detailed error information:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchUserData();
    }
  }, [id]);

  const handleContactButtonClick = () => {
    window.open(`https://wa.me/${userData?.phone}`, "_blank");
  };

  if (isLoading) return <div>Loading...</div>;
  if (!userData) return <div>Error loading user profile</div>;

  return (
    <div className="container mx-auto p-10">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex flex-col items-center space-x-5 mb-4 tablet:flex-row ">
          <img
            className="h-24 w-24 object-cover rounded-full"
            src={
              userData.worker.fileAvatar || "https://via.placeholder.com/150"
            }
            alt="Foto del usuario"
          />
          <div className="text-left">
            <p className="text-xl text-gray-800 font-bold mb-1">
              {userData.name || "Nombre de Usuario"}
            </p>
            <p className="text-base text-gray-500 font-normal">
              <span className="font-bold">Zona de Residencia:</span>{" "}
              {userData.worker.cityName},{" "}
              {userData.worker.provinceName || "No disponible"}
            </p>
            <p className="text-base text-gray-500 font-normal">
              <span className="font-bold">Email:</span>{" "}
              {userData.email || "Correo electrónico no disponible"}
            </p>

            <p className="text-base text-gray-500 font-normal">
              <span className="font-bold">Oficio:</span>{" "}
              {userData.worker?.category || "No especificado"}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6 mt-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Reseñas</h2>
        <div className="flex flex-wrap -mx-4">
          {reviews.slice(0, 3).map((review) => (
            <div key={review.id} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-4">
              <div className="bg-gray-100 p-6 rounded-lg h-full">
                <p className="text-gray-600">"{review.content}"</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm text-gray-500">
                    <span>Por: {review.author}</span>,{" "}
                    <span>Fecha: {review.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button
            type="button"
            className="text-white bg-[#1995AD] hover:bg-[#2aa0b8] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Ver más reseñas
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center m-10">
        <Button
          onClick={handleContactButtonClick}
          className="bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center py-2"
        >
          <FaWhatsapp className="text-xl mr-2" />
          Contactar por WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default ProfileUser;
