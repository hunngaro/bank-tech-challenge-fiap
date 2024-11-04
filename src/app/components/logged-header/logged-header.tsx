"use client";
import avatar from "@/app/assets/avatar.svg";
import menu from "@/app/assets/menu.svg";
import Image from "next/image";
import { BurgerMenu } from "../burger-menu/burger-menu";
import { useContext, useState } from "react";
import { Link, NavLinks } from "@/app/ui/NavLinks";
import { AuthContext } from "@/app/contexts/authentication-context";

export function LoggedHeader() {
  const [isOpenAppMenu, setIsOpenAppMenu] = useState(false);
  const [isOpenProfileMenu, setIsOpenProfileMenu] = useState(false);

  const { logout, user } = useContext(AuthContext);

  return (
    <header className="bg-my-dark-green">
      <div className="flex py-7 px-6 md:px-[60px] lg:px-0">
        <div className="container mx-auto flex lg:justify-end md:justify-end sm:justify-between justify-between items-center lg:gap-10 md:gap-4 md:relative">
          <strong className="text-white text-sm lg:block md:block sm:hidden hidden">
            {user?.name}
          </strong>
          <BurgerMenu
            className="left-0 top-0"
            isOpen={isOpenAppMenu}
            onClose={() => setIsOpenAppMenu(false)}
          >
            <NavLinks
              className="grid gap-4 mt-4"
              onClick={() => setIsOpenAppMenu(false)}
            />
          </BurgerMenu>
          <button
            className="lg:hidden md:hidden block"
            type="button"
            onClick={() => setIsOpenAppMenu(true)}
          >
            <Image src={menu} alt="" />
          </button>
          <BurgerMenu
            className={`right-0 top-[-28px] bg-black ${
              isOpenProfileMenu ? "!block" : "!hidden"
            }`}
            isOpen={isOpenProfileMenu}
            onClose={() => setIsOpenProfileMenu(false)}
          >
            <ul className="flex flex-col gap-4 mt-2">
              <Link
                href="/profile"
                text="Minha conta"
                textColor="text-white"
                onClick={() => setIsOpenProfileMenu(false)}
              />
              <Link
                href="/servicos"
                text="Configurações"
                textColor="text-white"
                onClick={() => setIsOpenProfileMenu(false)}
              />
              <Link
                href="/"
                text="Sair"
                hasBorder={false}
                textColor="text-white"
                onClick={logout}
              />
            </ul>
          </BurgerMenu>
          <button type="button" onClick={() => setIsOpenProfileMenu(true)}>
            <Image
              src={avatar}
              alt="Imagem que representa o avatar do usuário"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
