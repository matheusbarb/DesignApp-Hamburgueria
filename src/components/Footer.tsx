import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between text-[10px]">
      <Link href="/" className="font-bold text-xl">
        ELI HAMBURGUERIA
      </Link>
      <p> TODOS OS DIREITOS RESERVADOS</p>
    </div>
  );
};

export default Footer;
