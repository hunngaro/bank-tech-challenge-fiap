"use client"
import Image from "next/image";
import intagramIcon from "@/assets/instagram.svg";
import whatsappIcon from "@/assets/whatsapp.svg";
import youtubeIcon from "@/assets/youtube.svg";
import LogoIcon from "@//assets/logo-branca.svg";

import { usePathname } from 'next/navigation';


export default function Footer() {
  const pathname = usePathname();
  const showFooter = pathname === '/' || pathname === '/not' ? true : false;

  return (
    <footer className={`bg-black md:pt-11 md:pb-14 py-6 px-16 md:px-[60px]" ${showFooter ? 'block' : 'hidden'} `}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white text-[16px]">Serviços</h3>
            <a href="#" className="text-white">
              Conta corrente
            </a>
            <a href="#" className="text-white">
              Conta PJ
            </a>
            <a href="#" className="text-white">
              Cartão de crédito
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white text-[16px]">Contato</h3>
            <p className="text-white">0800 004 250 08</p>
            <a href="mailto:meajuda@bytebank.com.br" className="text-white">
              meajuda@bytebank.com.br
            </a>
            <a href="mailto:ouvidoria@bytebank.com.br" className="text-white">
              ouvidoria@bytebank.com.br
            </a>
          </div>

          <div className="flex flex-col lg:items-center gap-6">
            <h3 className="font-bold text-white text-[16px]">
              Desenvolvido por Alura
            </h3>
            <Image src={LogoIcon} alt="The icon from ByteBank"></Image>
            <div className="flex items-center gap-6">
              <a href="#">
                <Image src={intagramIcon} alt="The icon from Instagram"></Image>
              </a>
              <a href="#">
                <Image src={whatsappIcon} alt="The icon from Whatsapp"></Image>
              </a>
              <a href="#">
                <Image src={youtubeIcon} alt="The icon from Youtube"></Image>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
