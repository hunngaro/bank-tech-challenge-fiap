import avatar from "@/app/assets/avatar.svg";
import menu from "@/app/assets/menu.svg";
import Image from "next/image";
import { BurgerMenu } from "../burger-menu/burger-menu";

export function LoggedHeader() {
  return (
    <header className="bg-my-dark-green">
      <div className="container mx-auto py-7">
        <div className="flex lg:justify-end md:justify-end sm:justify-between justify-between items-center lg:gap-10 md:gap-4">
          <strong className="text-white text-sm lg:block md:block sm:hidden hidden">
            Joana da Silva Oliveira
          </strong>
          <BurgerMenu className="w-[172px] absolute bg-[#E4EDE3] left-0 top-0 p-6 lg:hidden md:hidden sm:block hidden" />
          <button className="lg:hidden md:hidden sm:block" type="button">
            <Image src={menu} alt="" />
          </button>
          <button type="button">
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
