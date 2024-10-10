'use client'
import Image from "next/image";
import Icon from "@/app/assets/logo-icon.svg"
import Cadastro from "../formulario-cadastro/formulario-cadastro";
import { useState } from "react";
import Login from "../modal-login/modal-login";
export default function Header() {
    const [showModal, setShowModal] = useState(false);
    const [showModalLog, setShowModalLog] = useState(false);
    return (
        <header className="flex justify-center items-center gap-14 p-4">
            <div className="flex col">
                <Image src={Icon} alt="logo do Banco" className=" md: mr-2 " />
                <h1 className="text-my-green text-2xl flex mr-9 md:hidden lg:block"> Bytebank</h1>
            </div>
            <div className="flex max-md:hidden gap-3 lg:mr-96">
                <a href="#" className="text-my-green font-semibold hover:underline">Sobre</a>

                <a href="#" className="text-my-green font-semibold hover:underline"> Serviços</a>
            </div>
            <div className=" max-md:hidden">
                <button className="border-2 border-my-green bg-my-green rounded-md p-2 mr-5 hover:opacity-70 hover:transition-opacity " onClick={() =>
                    setShowModal(true)}>Abrir minha conta
                </button>

                <button className="border-2 border-my-green rounded-md p-2 hover:opacity-55 hover:transition-opacity text-my-green" onClick={() =>
                    setShowModalLog(true)}>Já tenho conta
                </button>
            </div>
            <Cadastro isOpen={showModal} onClose={() => setShowModal(false)} />
            <Login isOpenLog={showModalLog} onCloseLog={() => setShowModalLog(false)} />
        </header>

    );
}