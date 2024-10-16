'use client'
import Image from "next/image";
import page404 from "@/app/assets/404.svg"


export default function Home() {
    return (

        <div className="bg-gradient-to-t from-white to-cyan-900 md:h-screen ">
            <div className=" flex my-6 flex-col justify-center items-center">
                <h1 className="text-black xl:w-1/3 font-semibold p-6 md:text-[28px] text-center">Ops! Não encontramos a página... </h1>
                <p className="text-black p-4">E olha que exploramos o universo procurando por ela!
                    Que tal voltar e tentar novamente?</p>
                <button className="bg-my-orange rounded-md w-[144px] h-[50px] mb-8 hover:opacity-70 hover:transition-opacity font-semibold">Voltar ao Inicio</button>
                <Image
                    src={page404}
                    alt="A picture of styled error 404 information"
                    className="lg:w-2/3 lg:max-w-2xl max-w-80" />
            </div>
        </div>
    );
}