import React, { useState, useEffect } from "react";
import CardsServices from "../../components/cards/CardsServices";
import Filter from "../../components/header/Filter";
import Loading from "../../components/loading/Loading";
import Hero from "../../components/hero/Hero";
import { getWorkerUsers } from "../../axios/axios.user";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const workerUsers = await getWorkerUsers();
        setAllUsers(workerUsers);
        setFilteredUsers(workerUsers);
        setVisibleUsers(workerUsers.slice(0, 6)); // Mostrar solo las primeras 6 tarjetas
      } catch (error) {
        console.error("Error fetching worker users:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleFilterChange = (category) => {
    setSelectedCategory(category);

    const usersToShow = allUsers.filter((user) =>
      category === "todos" ? true : user.worker.category === category
    );

    setFilteredUsers(usersToShow);
    setVisibleUsers(usersToShow.slice(0, 6)); // Mostrar solo las primeras 6 tarjetas
  };

  const handleLoadMoreClick = () => {
    const currentIndex = visibleUsers.length;
    const nextUsers = filteredUsers.slice(currentIndex, currentIndex + 6); // Obtener las siguientes 6 tarjetas
    setVisibleUsers([...visibleUsers, ...nextUsers]);
  };

  return (
    <>
      <Hero />

      <div className="py-12">
        <h2 className="text-3xl font-bold mb-8">
          Los empleados recomendados más cerca de tu zona
        </h2>

        <Filter onFilterChange={handleFilterChange} />

        <Loading loading={loading}>
          <CardsServices users={visibleUsers} />
        </Loading>

        {visibleUsers.length < filteredUsers.length && (
          <div className="flex justify-center">
            <button
              onClick={handleLoadMoreClick}
              className="text-white bg-[#1995AD] hover:bg-[#2aa0b8] hover:underline font-medium rounded-lg text-sm px-10 py-2.5 mt-8"
            >
              Ver más trabajadores
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
