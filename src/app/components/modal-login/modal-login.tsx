"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import imgLogin from "@/app/assets/login.svg";
import close from "@/app/assets/close-black.svg";
import { AuthContext } from "@/app/contexts/authentication-context";
import { useRouter } from "next/navigation";

interface LoginProps {
  isOpenLog: boolean;
  onCloseLog: VoidFunction;
}

const Login: React.FC<LoginProps> = ({ isOpenLog, onCloseLog }) => {
  if (!isOpenLog) return null;
  const {login} = useContext(AuthContext)
  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('');

  const router = useRouter();
  const [loginFail, setLoginFail] = useState<string>('')
  
  async function isLogged(){
    let logged = await login(email, password);
    
    if(logged) {
      router.push("/dashboard"); 
      onCloseLog()
    }
      else{
        setLoginFail('Ops login falhou, tente novamente.')
      }
  }


  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="fixed size-full" id="wrapper" onClick={onCloseLog}></div>
      <div className="z-10 text-black w-[313px] md:w-[597px] lg:w-[792px] h-full py-8 px-4 md:px-[76px] lg:px-[102px] overflow-auto bg-my-light-gray relative">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white border-my-input-border border-2 px-4 py-3 rounded-lg outline-my-green"
              placeholder="Digite seu email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-md font-bold">
              Senha
            </label>
            <p></p>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="bg-white border-my-input-border border-2 px-4 py-3 rounded-lg outline-my-green"
              placeholder="Digite sua senha"
              
            />
          </div>
        </form>
        <a href="#" className="text-my-green underline block mt-2">
          Esqueci a senha!
        </a>
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            onClick={isLogged}
            className="bg-my-green hover:bg-black transition-all text-white font-bold rounded-lg w-36 py-[14px]"
          >
            Acessar
          </button>
        </div>
        { loginFail.length > 1 && <span>{loginFail}</span> }
      </div>
    </div>
  );
};
export default Login;
