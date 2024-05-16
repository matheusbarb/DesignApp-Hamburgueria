"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "Terça-feira pede um X-bacon",
    image: "/temporary/elihamburgueria.jpg",
  },

  {
    id: 2,
    title: "Quarta-feira pede um X-Egg",
    image: "/temporary/elihamburgueria.jpg",
  },

  {
    id: 3,
    title: "Quinta-feira pede um X-Frango",
    image: "/temporary/elihamburgueria.jpg",
  },

  {
    id: 4,
    title: "Sexta-feira pede um X-Tudo",
    image: "/temporary/elihamburgueria.jpg",
  },

  {
    id: 5,
    title: "Sábado pede um X-Salada",
    image: "/temporary/elihamburgueria.jpg",
  },

  {
    id: 6,
    title: "Domingo pede Eli Hamburgueria!",
    image: "/temporary/elihamburgueria.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex flex-col h-[calc(100vh-6rem)]  md:h-[calc(100vh-9rem)] lg:flex-row ">
      {/* TEXTO */}
      <div className=" flex-1 flex  items-center justify-center flex-col gap-8 text-red-500 font-bold  ">
        <h1 className=" text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <Link href="/menu">
          <button className="bg-red-500 text-white py-4 px-8 rounded-md ">
            CARDÁPIO ONLINE
          </button>
        </Link>
      </div>
      {/* IMAGEM */}
      <div className="w-full flex-1 relative ">
        <Image
          src={data[currentSlide].image}
          alt=""
          className=" object-cover"
          fill
        />
      </div>
    </div>
  );
};

export default Slider;
