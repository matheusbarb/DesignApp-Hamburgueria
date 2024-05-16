import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import Carticon from "./Carticon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/*LINKS DA ESQUERDA*/}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Página Inicial</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contato</Link>
      </div>
      {/*LOGO*/}
      <div className="text-xl md:font-bold md:text-center">
        <Link href="/">Eli Hamburgueria</Link>
      </div>
      {/*MOBILE MENU*/}
      <div className="md:hidden">
        <Menu />
      </div>

      {/*LINKS DA DIREITA*/}
      <div className="hidden md:flex gap-4 items-center flex-1 p-4 justify-end ">
        {/*IMAGEM TELEFONE*/}
        <div className="md: absolute top-1 r-2 lg:static flex items-center gap-2 cursor-pointer bg-white  px-3 rounded-md ">
          <Image className=" invert" src="/temporary/whatsapp.png" alt="" width={38} height={35} />
          <span className="text-l">1298806-9971</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/pedidos">Pedidos</Link>
        )}
        <Carticon />
      </div>
    </div>
  );
};

export default Navbar;
