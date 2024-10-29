"use client";
import React from "react";
import Image from "next/image";
import imgCadastro from "@/app/assets/cadastro.svg";
import close from "@/app/assets/close-black.svg";

interface CadastroProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

const Cadastro: React.FC<CadastroProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="fixed size-full" id="wrapper" onClick={onClose}></div>
      <div className="z-10 text-black w-[313px] md:w-[597px] lg:w-[792px] h-full py-8 px-4 md:px-[76px] lg:px-[102px] overflow-auto bg-my-light-gray relative">
        <button className="absolute right-4 top-4" onClick={onClose}>
          <Image src={close} alt="" />
        </button>
        <Image
          src={imgCadastro}
          alt="An image of a woman beside a laptop with a locker"
          className="mt-6 mx-auto md:mt-auto"
        />
        <h2 className="text-xl font-bold mt-8">
          Preencha os campos abaixo para criar sua conta corrente!
        </h2>
        <form className="grid gap-6 mt-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-md font-bold">
              Nome
            </label>
            <input
              type="name"
              name="name"
              id="name"
              className="bg-white border-my-input-border border-2 px-4 py-3 rounded-lg outline-my-green"
              placeholder="Digite seu nome completo"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-md font-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-white border-my-input-border border-2 px-4 py-3 rounded-lg outline-my-green"
              placeholder="Digite seu email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-md font-bold">
              Senha
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-white border-my-input-border border-2 px-4 py-3 rounded-lg md:w-2/3 lg:w-1/2 outline-my-green"
              placeholder="Digite sua senha"
            />
          </div>
          <div className="flex items-center gap-4 mt-2">
            <input
              type="checkbox"
              id="accept-terms"
              name="accept-terms"
              className="size-6"
            />
            <label htmlFor="accept-terms" className="text-md leading-5">
              Li e estou ciente quanto às condições de tratamento dos meus dados
              conforme descrito na Política de Privacidade do banco.
            </label>
          </div>
          <div className="flex justify-center mt-2">
            <button
              type="submit"
              className="bg-my-red hover:bg-black transition-all text-white font-bold rounded-lg w-36 py-[14px]"
            >
              Criar conta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Cadastro;
