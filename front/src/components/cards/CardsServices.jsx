import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const CardsServices = ({ users }) => {
  return (
    <div className="grid gap-6 grid-flow-row tablet:grid-cols-2 laptop:grid-cols-3">
      {users.map((user) => (
        <div key={user._id} className="flex justify-center">
          <Card className="flex flex-col justify-between h-full w-full max-w-sm laptop:max-w-md mx-3">
            <div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                {user.worker.category.toUpperCase()}
              </h5>
              <div className="flex justify-center py-4">
                <img
                  className="h-24 w-24 object-cover rounded-full"
                  src={
                    user.worker.fileAvatar || "https://via.placeholder.com/150"
                  }
                  alt="Foto del usuario"
                />
              </div>
              <div className="px-4">
                <div className="space-y-1 font-medium dark:text-white text-center">
                  <div className="font-bold">{user.name}</div>
                  <div className="text-sm">
                    {user.worker.cityName},{" "}
                    {user.worker.provinceName || "No disponible"}.{" "}
                  </div>
                </div>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                  {user.worker.desc}
                </p>
              </div>
            </div>
            <div className="px-4 py-2">
              <Link to={`/profile/${user._id}`}>
                <button className="text-white bg-[#1995AD] hover:bg-[#2aa0b8] hover:underline font-medium rounded-lg text-sm px-10 py-2.5 w-full">
                  Ver Perfil
                </button>
              </Link>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CardsServices;
