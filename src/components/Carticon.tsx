import Image from "next/image";
import Link from "next/link";
import React from "react";

const Carticon = () => {
  return (
    <Link href="/carrinho" className="flex items-center gap-3">
      <div className=" relative w-12 h-12 md:w-8 md:h-8">
        <Image src="/temporary/carrinho.png" alt="" fill />
      </div>

      <span>CARRINHO (3)</span>
    </Link>
  );
};

export default Carticon;
