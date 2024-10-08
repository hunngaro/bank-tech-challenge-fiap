'use client'
import Image from "next/image";
import Icon from "@/app/assets/logo-icon.svg"
import Cadastro from "../formulario-cadastro/formulario-cadastro";
import { useState } from "react";
export default function Header() {
    const [showModal, setShowModal] = useState(false);
    return (
        <header className="flex justify-center p-4">
            <Image src={Icon} alt="logo do Banco" className=" md: mr-4 " />
            <h1 className="text-my-green text-2xl flex mr-9 gap-2  md:hidden lg:block"> Bytebank</h1>
            <button className="bg-my-green rounded-md p-1 mr-5 hover:opacity-70 hover:transition-opacity max-sm:hidden" onClick={() =>
                setShowModal(true)}>Abrir minha conta

            </button>
            <button className="border-2 border-my-green rounded-md p-1 hover:opacity-55 hover:transition-opacity max-sm:hidden text-my-green">Já tenho conta
            </button>
            <Cadastro isOpen={showModal} onClose={() => setShowModal(false)} />
        </header>

    );
}