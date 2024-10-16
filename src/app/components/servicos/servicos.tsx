"use client";
import Image from "next/image";
import BoxInside from "@/app/ui/BoxInside";

import iconEmprestimo from '@/app/assets/icone-emprestimo.svg';
import inconCartoes from '@/app/assets/cartoes.svg';
import inconDoacao from '@/app/assets/doacoes.svg';
import inconPix from '@/app/assets/pix.svg';
import inconSeguro from '@/app/assets/seguros.svg';
import inconCelular from '@/app/assets/icone-empréstimo-1.svg';

export default function Servicos() {
    return (
        <BoxInside>
            <h2 className="text-2xl font-bold pb-8 relative z-10 text-black">Confira os serviços  disponíveis</h2>
            <div className="flex flex-wrap gap-8 z-10 relative">
                <div className="p-5 w-full max-w-48 flex flex-col gap-7 justify-center items-center bg-white rounded-lg text-black">
                    <Image src={iconEmprestimo} alt="Ilustracao" width={60}/> 
                    <p className="pb-5">Empréstimo</p>
                </div>
                <div className="p-5 w-full max-w-48 flex flex-col gap-7 justify-center items-center bg-white rounded-lg text-black">
                    <Image src={inconCartoes} alt="Ilustracao" width={60}/> 
                    <p className="pb-5">Meus cartões</p>
                </div>
                <div className="p-5 w-full max-w-48 flex flex-col gap-7 justify-center items-center bg-white rounded-lg text-black">
                    <Image src={inconDoacao} alt="Ilustracao" width={60}/> 
                    <p className="pb-5">Doações</p>
                </div>

                <div className="p-5 w-full max-w-48 flex flex-col gap-7 justify-center items-center bg-white rounded-lg text-black">
                    <Image src={inconPix} alt="Ilustracao" width={60}/> 
                    <p className="pb-5">Pix</p>
                </div>
                <div className="p-5 w-full max-w-48 flex flex-col gap-7 justify-center items-center bg-white rounded-lg text-black">
                    <Image src={inconSeguro} alt="Ilustracao" width={60}/> 
                    <p className="pb-5">Seguros</p>
                </div>
                <div className="p-5 w-full max-w-48 flex flex-col gap-7 justify-center items-center bg-white rounded-lg text-black">
                    <Image src={inconCelular} alt="Ilustracao" width={60}/> 
                    <p className="pb-5">Crédito celular</p>
                </div>
            </div>
        </BoxInside>
    )
}
