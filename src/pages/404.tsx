"use client";
import Image from "next/image";
import page404 from "@/assets/404.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Custom404() {
  const storageUser = Cookies.get("user");
  const router = useRouter();

  if (storageUser) {
    router.push("/dashboard");
  }

  return (
    <div className="bg-gradient-to-t from-white to-cyan-900 md:h-screen pb-20 md:pb-72">
      <div className="container max-w-[612px] w-full mx-auto px-6 flex mt-10 flex-col justify-center gap-6 items-center">
        <h1 className="text-black font-semibold text-[25px] text-center">
          Ops! Não encontramos a página...
        </h1>
        <p className="text-black text-center">
          E olha que exploramos o universo procurando por ela! <br /> Que tal
          voltar e tentar novamente?
        </p>
        <Link
          href="/"
          className="bg-my-orange hover:bg-black transition-all font-bold text-white p-[14px] rounded-lg"
        >
          Voltar ao Inicio
        </Link>
        <Image
          src={page404}
          alt="A picture of styled error 404 information"
          className="lg:w-2/3 lg:max-w-2xl max-w-80 mt-2"
        />
      </div>
    </div>
  );
}
