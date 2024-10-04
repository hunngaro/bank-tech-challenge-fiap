import Image from "next/image";
import Icon from "@/app/assets/logo-icon.svg"
export default function Header() {
    return (
        <header className="flex justify-center p-4">
            <Image src={Icon} alt="logo do Banco" className=""/>
            <h1 className="text-my-green text-2xl flex mr-9 gap-2  "> Bytebank</h1>
            <button className="bg-my-green rounded-md p-1 mr-5 max-sm:hidden">Abrir minha conta

            </button>
            <button className="border-2 border-my-green rounded-md p-1 max-sm:hidden text-my-green">Já tenho conta
            </button>
        </header>

    );
}