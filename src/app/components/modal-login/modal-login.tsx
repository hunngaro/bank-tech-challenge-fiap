"use client";
import React from "react";
import Image from "next/image";
import imgLogin from "@/app/assets/login.svg";
import close from "@/app/assets/close-black.svg";

interface LoginProps {
  isOpenLog: boolean;
  onCloseLog: VoidFunction;
}

const Login: React.FC<LoginProps> = ({ isOpenLog, onCloseLog }) => {
  if (!isOpenLog) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="fixed size-full" id="wrapper" onClick={onCloseLog}></div>
      <div className="z-10 w-[313px] md:w-[597px] lg:w-[792px] h-full py-8 px-4 md:px-[76px] lg:px-[102px] overflow-auto bg-my-light-gray relative">
        <button className="absolute right-4 top-4" onClick={onCloseLog}>
          <Image src={close} alt="" />
        </button>
        <Image
          src={imgLogin}
          alt="An image of a woman beside a laptop with a locker"
          className="mt-6 mx-auto md:mt-auto"
        />
        <h2 className="text-xl text-center font-bold mt-8">Login</h2>
        <form className="grid gap-6 mt-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-md font-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-white border-my-input-border border-2 px-4 py-3 rounded-lg"
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
              className="bg-white border-my-input-border border-2 px-4 py-3 rounded-lg"
              placeholder="Digite sua senha"
            />
          </div>
        </form>
        <a href="#" className="text-my-green underline block mt-2">
          Esqueci a senha
        </a>
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-my-green text-white font-bold rounded-lg w-36 py-[14px]"
          >
            Acessar
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
