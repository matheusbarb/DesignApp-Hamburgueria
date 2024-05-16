import React from "react";
import Image from "next/image";

const PaginaCarrinho = () => {
   
        return (
            <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
              {/* PRODUCTS CONTAINER */}
              <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
                {/* SINGLE ITEM */}
                <div className="flex items-center justify-between mb-4">
                  <Image src="/temporary/gourmet.jpg" alt="" width={100} height={100} />
                  <div className="">
                    <h1 className="uppercase text-xl font-bold">X-Burguer</h1>
                    
                  </div>
                  <h2 className="font-bold">R$14.00</h2>
                  <span className="cursor-pointer">X</span>
                </div>
                {/* SINGLE ITEM */}
                <div className="flex items-center justify-between mb-4">
                  <Image src="/temporary/gourmet.jpg" alt="" width={100} height={100} />
                  <div className="">
                    <h1 className="uppercase text-xl font-bold">X-Burguer</h1>
                    
                  </div>
                  <h2 className="font-bold">R$14.00</h2>
                  <span className="cursor-pointer">X</span>
                </div>
                {/* SINGLE ITEM */}
                <div className="flex items-center justify-between mb-4">
                  <Image src="/temporary/gourmet.jpg" alt="" width={100} height={100} />
                  <div className="">
                    <h1 className="uppercase text-xl font-bold">X-Burguer</h1>
                    
                  </div>
                  <h2 className="font-bold">R$14.00</h2>
                  <span className="cursor-pointer">X</span>
                </div>
              </div>
              {/* PAYMENT CONTAINER */}
              <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
                <div className="flex justify-between">
                  <span className="">Subtotal (3 items)</span>
                  <span className="">R$42.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="">Taxa de entrega</span>
                  <span className="text-red-500">R$5.00</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between">
                  <span className="">TOTAL</span>
                  <span className="font-bold">R$49.00</span>
                </div>
                <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
                  CONCLUIR PEDIDO
                </button>
              </div>
            </div>
          );
        };
    


export default PaginaCarrinho