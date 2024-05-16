import { menu } from "@/data";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const MenuPage = () => {
  return (
    <div className=" p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem) md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.tipo}`}
          key={category.id}
          className="w-full h-1/3 bg-cover p-10 md:h-1/2"
          style={{backgroundImage: `url(${category.img})`}}
          
        >
        
          <div className=" text-white w-1/2 text-left">
            <h1 className=" text-3xl font-bold text-white uppercase">
              {category.title}
            </h1>
            <p className=" md:text-md text-lg p-4 font-light">
              
            </p>
            <button className=" 2xl:block uppercase p-3 rounded-md bg-red-500 px-3 lg:px-6">
              FAZER PEDIDO
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
