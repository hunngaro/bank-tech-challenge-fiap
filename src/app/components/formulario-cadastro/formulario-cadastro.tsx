"use client";
import React from "react";
import Image from "next/image";
import imgCadastro from "@/app/assets/cadastro.svg";
import close from "@/app/assets/close.svg";

interface CadastroProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

const Cadastro: React.FC<CadastroProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
      <div
        className="fixed  inset-0 flex justify-center items-center  "
        id="wrapper"
        onClick={handleClose}
      ></div>
      <div className="z-10 xl:w-5/12 w-5/6 h-full py-8 overflow-auto flex flex-col bg-my-light-gray max-sm:overflow-y-auto relative">
        <button className="absolute right-4 top-4" onClick={() => onClose()}>
          <Image src={close} alt="" />
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
        <div className="flex justify-start xl:ml-20 md:ml-20 w-3/4  p-8 ">
          <form action="#">
            <div>
              <label htmlFor="name" className="block mb-2">
                <div className="text-black font-bold">Nome</div>
              </label>
              <input
                type="name"
                name="name"
                id="name"
                className="bg-white  border-gray-200 border-2 mb-10 p-2 rounded-lg md:w-80"
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
                className="bg-white  border-gray-200 border-2 mb-10 p-2 rounded-lg md:w-80"
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
                className="bg-white border-gray-200 border-2 p-2 rounded-lg"
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
