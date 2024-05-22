import React, { useState, useEffect } from "react";
import { Carousel } from "flowbite-react";
import Hero1 from "../../assets/imgHero/hero1.png";
import Hero2 from "../../assets/imgHero/hero2.png";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";

const Hero = () => {
  const [animateTitle, setAnimateTitle] = useState(false);
  const { currentUser } = useAuth();

  useEffect(() => {
    // Agrega una animación después de que el componente se monte
    setAnimateTitle(true);
  }, []);

  return (
    <>
      <motion.h1
        className="text-3xl font-bold mt-3 text-center text-[#1977ad]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
        ¡Bienvenido{currentUser ? `, ${currentUser.name}` : ""}!
      </motion.h1>
      <div className="h-56 tablet:h-64 laptop:h-80 desktop:h-[40rem] mt-5 mx-3">
        <Carousel>
          <img
            src={Hero1}
            alt="..."
            style={{ width: "100%", height: "100%" }}
          />

          <img
            src={Hero2}
            alt="..."
            style={{ width: "100%", height: "100%" }}
          />
          {/* Agrega más imágenes aquí */}
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
