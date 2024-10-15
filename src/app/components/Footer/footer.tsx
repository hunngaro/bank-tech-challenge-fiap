import Image from "next/image";
import intagramIcon from "@/app/assets/instagram.svg"
import whatsappIcon from "@/app/assets/whatsapp.svg"
import youtubeIcon from "@/app/assets/youtube.svg"
import LogoIcon from "@/app//assets/logo-branca.svg"
export default function Footer() {
    return (
        <footer className="flex max-md:flex-col max-md:justify-start max-md:gap-6 max-md:px-10 md:justify-center md:items-center xl:gap-60 md:gap-20 p-3 bg-black md:text-xl">
            <div className="flex flex-col gap-2">
                <h3>Serviços</h3>
                <a href="#">Conta corrente</a>
                <a href="#">Conta PJ</a>
                <a href="#">Cartão de crédito</a>
            </div >
            <div className="flex flex-col gap-2">
                <p>0800 004 250 08</p>
                <a href="mailto:meajuda@bytebank.com.br">meajuda@bytebank.com.br</a>
                <a href="mailto:ouvidoria@bytebank.com.br">ouvidoria@bytebank.com.br</a>
            </div>

            <div className="flex flex-col">
                <p> Desenvolvido por Alura</p>
                <div className="flex my-3 gap-2"><Image src={LogoIcon} alt="The icon from ByteBank"></Image></div>
                <div className="flex gap-2">
                    <a href="#"><Image
                        src={intagramIcon}
                        alt="The icon from Instagram"></Image></a>
                    <a href="#"><Image
                        src={whatsappIcon}
                        alt="The icon from Whatsapp"></Image></a>
                    <a href="#"><Image
                        src={youtubeIcon}
                        alt="The icon from Youtube"></Image></a>
                </div>
            </div>
        </footer>

    );
}