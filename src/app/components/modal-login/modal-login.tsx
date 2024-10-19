"use client";
import React from "react";
import Image from "next/image";
import imgLogin from "@/app/assets/login.svg";

interface LoginProps {
  isOpenLog: boolean;
  onCloseLog: VoidFunction;
}

const Login: React.FC<LoginProps> = ({ isOpenLog, onCloseLog }) => {
  if (!isOpenLog) return null;
  const handleCloseLog = () => {
    onCloseLog();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
      <div
        className="fixed  inset-0 flex justify-center items-center  "
        id="wrapper"
        onClick={handleCloseLog}
      ></div>
      <div className=" z-10 xl:w-5/12 w-5/6 h-screen flex flex-col bg-my-light-gray max-md:overflow-y-auto max-md:px-4 items-center ">
        <button
          className="text-black text-xl place-self-end md:p-4"
          onClick={() => onCloseLog()}
        >
          X
        </button>
        <div className="flex flex-col justify-center text-black items-center ">
          <Image
            src={imgLogin}
            alt="An image of a woman beside a laptop with a locker"
            className="max-sm:w-60 xl:w-[260px] "
          ></Image>
          <p className="py-8  text-xl font-bold">Login</p>
        </div>
        <div className="flex w-3/4 items-center justify-center ">
          <form action="#">
            <div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  <div className="text-black font-bold">Email</div>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-white  border-gray-200 border-2 mb-6 p-2 rounded-lg md:w-80"
                  placeholder="Digite seu E-mail"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="password" className="block mb-2">
                  <div className="text-black font-bold">Senha</div>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-white border-gray-200 border-2 p-2 rounded md:w-80"
                  placeholder="Digite sua senha"
                />
              </div>
              <a href="#" className="text-my-green underline text-lg">
                Esqueci a senha!
              </a>
            </div>
            <div className="flex items-center justify-center mt-8">
              <button
                type="submit"
                className="bg-my-green rounded-md w-[144px] h-[50px] mb-8 hover:opacity-70 hover:transition-opacity"
              >
                Acessar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
