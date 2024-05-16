import {  gourmets  } from "@/data";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Categoria = () => {
  return (
    <div className="flex flex-wrap  text-red-500 ">
      {gourmets.map(item => (
        <Link className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group" href={`/produtos/${item.id}`} key={item.id}>
          {/*IMAGE CONTAINER*/}
          {item.img &&  (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain"
              />
            </div>
          )}
          {/*TEXT CONTAINER*/}
          <div className="flex items-center justify-between font-bold">
            <h1 className=" text-lg uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-lg">{item.price}</h2>
            <button  className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">Carrinho</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categoria;
