'use client'
import React from "react";
import Image from "next/image";
import imgCadastro from "@/app/assets/cadastro.svg"


interface CadastroProps {
    isOpen: boolean;
    onClose: VoidFunction;
}

const Cadastro: React.FC<CadastroProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const handleClose = () => {
        onClose();
    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center ">
            <div className="fixed  inset-0 flex justify-center items-center  " id="wrapper" onClick={handleClose}></div>
            <div className=" z-10 xl:w-5/12 w-5/6 h-screen flex flex-col bg-my-light-gray max-md:overflow-y-auto max-md:px-4 items-center">
                <button className="text-black text-xl place-self-end md:p-4" onClick={() => onClose()}>X
                </button>
                <div className="flex flex-col justify-center text-black items-center ">
                    <Image
                        src={imgCadastro}
                        alt="An image of a woman beside a laptop with a locker"
                        className="max-sm:w-60 xl:w-[260px] ">
                    </Image>
                    <p className="py-8  text-xl font-bold">Preencha os campos abaixo para criar sua conta corrente!</p>

                </div>
                <div className="flex justify-start xl:ml-10  w-3/4 ">
                    <form action="#">
                        <div>
                            <label htmlFor="name" className="block mb-2"
                            >
                                <div className="text-black font-bold"  >Nome</div>
                            </label>
                            <input
                                type="name"
                                name="name"
                                id="name"
                                className="bg-white  border-gray-200 border-2 mb-6 p-2 rounded-lg md:w-80" placeholder="Digite seu nome Completo" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2"
                            >
                                <div className="text-black font-bold"  >Email</div>
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-white  border-gray-200 border-2 mb-6 p-2 rounded-lg md:w-80" placeholder="Digite seu E-mail" />
                        </div>
                        <div className="mb-8">
                            <label htmlFor="password" className="block mb-2"
                            >
                                <div className="text-black font-bold"  >Senha</div>
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="bg-white border-gray-200 border-2 p-2 rounded-lg" placeholder="Digite sua senha" />
                        </div>
                        <div className="text-black flex gap-2 mb-8 p-2">
                            <input type="checkbox" className="w-6 borde-2 border-my-green"></input>
                            <p> Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco.</p>
                        </div>
                        <div className="flex items-center justify-center">
                            <button type="submit" className="bg-my-orange rounded-md w-[144px] h-[50px] mb-8 hover:opacity-70 hover:transition-opacity">Criar conta</button>
                        </div>
                    </form>
                </div >
            </div >

        </div >
    );
};
export default Cadastro;
