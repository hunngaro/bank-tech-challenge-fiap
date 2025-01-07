"use client";
import React, { useState } from "react";
import Image from "next/image";
import imgLogin from "@/assets/login.svg";
import close from "@/assets/close-black.svg";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "@/features/auth/auth-thunks";
import { useAppDispatch } from "@/lib/hooks";

interface LoginProps {
  isOpenLog: boolean;
  onCloseLog: VoidFunction;
}

interface LoginData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Dado incorreto. Revise e digite novamente")
    .required("O campo e-mail é obrigatório"),
  password: yup
    .string()
    .min(8, "A senha deve ter pelo menos 8 dígitos")
    .required("O campo senha é obrigatório"),
});

const Login: React.FC<LoginProps> = ({ isOpenLog, onCloseLog }) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const router = useRouter();

  async function isLogged({ email, password }: LoginData) {
    try {
      await dispatch(login({ email, password }));
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }

  if (!isOpenLog) return null;

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
        <form
          id="login-form"
          className="grid gap-6 mt-8"
          onSubmit={handleSubmit(isLogged)}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-md font-bold">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`bg-white ${
                errors.email?.message
                  ? "border-my-dark-red"
                  : "border-my-input-border"
              } border-2 px-4 py-3 rounded-lg ${
                errors.email?.message
                  ? "outline-my-dark-red"
                  : "outline-my-green"
              }`}
              placeholder="Digite seu email"
            />
            <p className="text-my-dark-red text-sm">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-md font-bold">
              Senha
            </label>
            <input
              {...register("password")}
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className={`bg-white ${
                errors.password?.message
                  ? "border-my-dark-red"
                  : "border-my-input-border"
              } border-2 px-4 py-3 rounded-lg ${
                errors.password?.message
                  ? "outline-my-dark-red"
                  : "outline-my-green"
              }`}
              placeholder="Digite sua senha"
            />
            <p className="text-my-dark-red text-sm">
              {errors.password?.message}
            </p>
          </div>
        </form>
        <a href="#" className="text-my-green underline block mt-2">
          Esqueci a senha!
        </a>
        <div className="flex justify-center mt-8">
          <button
            form="login-form"
            type="submit"
            className="bg-my-green hover:bg-black transition-all text-white font-bold rounded-lg w-36 py-[14px]"
          >
            Acessar
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
