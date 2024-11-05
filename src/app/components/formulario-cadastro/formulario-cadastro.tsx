"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import imgCadastro from "@/app/assets/cadastro.svg";
import close from "@/app/assets/close-black.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext, SignUpData } from "@/app/contexts/authentication-context";

interface CadastroProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

const schema = yup.object().shape({
  name: yup.string().required("O campo nome é obrigatório"),
  email: yup
    .string()
    .email("Dado incorreto. Revise e digite novamente")
    .required("O campo e-mail é obrigatório"),
  password: yup
    .string()
    .min(8, "A senha deve ter pelo menos 8 dígitos")
    .required("O campo senha é obrigatório"),
  terms: yup
    .boolean()
    .isTrue()
    .required("Aceite os termos de Política de Privacidade"),
});

const Cadastro: React.FC<CadastroProps> = ({ isOpen, onClose }) => {
  const { signUp } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const handleSignUp = async (data: SignUpData) => {
    try {
      await signUp(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === " ") { // Barra de espaço
      event.preventDefault(); // Evita que a página role ao pressionar espaço
      setTerms(!terms);
    }
  };
  
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
        <form className="grid gap-6 mt-8" onSubmit={handleSubmit(handleSignUp)}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-md font-bold">
              Nome
            </label>
            <input
              {...register("name")}
              type="name"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`bg-white ${
                errors.name?.message
                  ? "border-my-dark-red"
                  : "border-my-input-border"
              } border-2 px-4 py-3 rounded-lg ${
                errors.name?.message
                  ? "outline-my-dark-red"
                  : "outline-my-green"
              }`}
              placeholder="Digite seu nome completo"
            />
            <p className="text-my-dark-red text-sm">{errors.name?.message}</p>
          </div>
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
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <div
            className={`flex items-center gap-4 mt-2 ${
              errors.terms?.message
                ? "border-my-dark-red"
                : "border-transparent"
            } border-2`}
          >
            <input
              {...register("terms")}
              type="checkbox"
              id="terms"
              name="terms"
              checked={terms}
              tabIndex={-1}
              onChange={(e) => setTerms(e.target.checked)}
              className="appearance-none -mr-3"
            />
            <label htmlFor="terms" className="text-md leading-5 flex items-center gap-3 cursor-pointer">
            <span
              tabIndex={0}
              aria-checked={terms}
              onKeyDown={handleKeyDown}
              className={`w-8 aspect-square border-2 border-my-green rounded transition-colors focus:bg-my-green  ${
                terms ? 'bg-my-green' : 'bg-transparent focus:opacity-50'
              }`}
            >
              {terms && (
                <svg
                  className="w-4 h-4 text-white mx-auto my-auto"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </span>
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
