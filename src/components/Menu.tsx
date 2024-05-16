"use client";
import React, { useState } from "react";
import Link from "next/link";
import Carticon from "./Carticon";
import Image from "next/image";

const links = [
  { id: 1, title: "PÁGINA INICIAL", url: "/" },
  { id: 2, title: "MENU", url: "/menu" },
  { id: 3, title: "CONTATO", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  //USUARIO TEMPORARIO
  const user = false;
  return (
    <div>
      {!open ? (
        <Image
          src="/temporary/open.png"
          alt=""
          width={30}
          height={30}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/temporary/close.png"
          alt=""
          width={30}
          height={30}
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              LOGIN
            </Link>
          ) : (
            <Link href="/pedidos" onClick={() => setOpen(false)}>
              PEDIDOS
            </Link>
          )}

          <Link href="/carrinho" onClick={() => setOpen(false)}>
            <Carticon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
