"use client";
import React, { useState } from "react";
import Image from "next/image";
import imgCadastro from "@/app/assets/cadastro.svg";
interface CadastroProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

const Cadastro: React.FC<CadastroProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [setShowModal] = useState(false);
  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center "
      id="wrapper"
      onClick={handleClose}
    >
      <div className="xl:w-6/12 w-5/6 h-screen flex flex-col bg-my-light-gray">
        <button
          className="text-black text-xl place-self-end p-4"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="flex flex-col text-black p-2 rounded justify-center items-center ">
          <Image
            src={imgCadastro}
            alt="An image of a woman beside a laptop with a locker"
            className="max-sm:w-60 xl:w-[260px]"
          ></Image>
          <p className="py-8 text-xl font-bold">
            Preencha os campos abaixo para criar sua conta corrente!
          </p>
        </div>
        <div className="flex justify-start xl:ml-32 md:ml-20 w-3/4  p-8 ">
          <form action="#">
            <div>
              <label htmlFor="name" className="block mb-2">
                <div className="text-black font-bold">Nome</div>
              </label>
              <input
                type="name"
                name="name"
                id="name"
                className="bg-white border-gray-300 mb-10 p-2 rounded-lg md:w-80"
                placeholder="Digite seu nome Completo"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                <div className="text-black font-bold">Email</div>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-white border-gray-300 mb-10 p-2 rounded-lg md:w-80"
                placeholder="Digite seu E-mail"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2">
                <div className="text-black font-bold">Senha</div>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="bg-white border-gray-300 p-2 rounded-lg"
                placeholder="Digite sua senha"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Cadastro;