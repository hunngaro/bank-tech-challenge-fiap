"use client";
import Image from "next/image";
import Icon from "@/assets/logo-icon.svg";
import IconMobile from "@/assets/logo-icon-mobile.svg";
import menu from "@/assets/menu-green.svg";
import Cadastro from "../formulario-cadastro/formulario-cadastro";
import { useState } from "react";
import Login from "../modal-login/modal-login";
import { BurgerMenu } from "@/components/burger-menu/burger-menu";
import { Link } from "@/ui/NavLinks";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [showModalLog, setShowModalLog] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className="bg-black px-6 md:px-[60px]">
      <Cadastro isOpen={showModal} onClose={() => setShowModal(false)} />
      <Login
        isOpenLog={showModalLog}
        onCloseLog={() => setShowModalLog(false)}
      />
      <div className="container mx-auto flex items-center justify-between h-24">
        <div className="flex w-full justify-between md:justify-normal items-center md:gap-14 lg:gap-[72px]">
          <BurgerMenu
            className={`left-0 top-0 bg-black ${isOpen ? "!block" : "!hidden"}`}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <ul className="flex flex-col gap-4 mt-2">
              <Link href="#" text="Sobre" textColor="text-white" />
              <Link
                href="#"
                text="Serviços"
                textColor="text-white"
                hasBorder={false}
              />
            </ul>
          </BurgerMenu>
          <button
            type="button"
            className="block sm:block md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Image src={menu} alt="" />
          </button>
          <div className="flex gap-1 items-center">
            <Image
              src={Icon}
              className="w-7 h-7 hidden md:block lg:block"
              height={27}
              width={27}
              alt="logo do Banco"
            />
            <Image
              src={IconMobile}
              className="w-7 h-7 block md:hidden"
              height={27}
              width={27}
              alt="logo do Banco"
            />
            <h1 className="text-my-green text-2xl italic gap-2 flex md:hidden lg:block">
              Bytebank
            </h1>
          </div>
          <nav className="hidden md:block lg:block">
            <ul className="flex items-center md:gap-6 lg:gap-10">
              <li>
                <a href="#" className="text-my-green font-semibold text-lg">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="text-my-green font-semibold text-lg">
                  Serviços
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center md:gap-4 lg:gap-6">
          <button
            className="bg-my-green hover:bg-my-red transition-all h-12 w-[180px] text-white font-semibold rounded-lg max-sm:hidden hidden lg:inline"
            onClick={() => setShowModal(true)}
          >
            Abrir minha conta
          </button>
          <button
            className="bg-my-green hover:bg-my-red transition-all h-12 md:w-36 lg:w-[180px] text-white font-semibold rounded-lg max-sm:hidden hidden md:inline lg:hidden"
            onClick={() => setShowModal(true)}
          >
            Abrir conta
          </button>
          <button
            className="h-12 md:w-36 lg:w-[180px] border-2 text-my-green font-semibold rounded-lg border-my-green hidden md:block"
            onClick={() => setShowModalLog(true)}
          >
            Já tenho conta
          </button>
        </div>
      </div>
    </header>
  );
}
