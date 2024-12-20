"use client";
import BoxInside from "@/app/ui/BoxInside";
import emprestimo from "@/app/assets/icone-emprestimo.svg";
import cartoes from "@/app/assets/cartoes.svg";
import doacoes from "@/app/assets/doacoes.svg";
import pix from "@/app/assets/pix.svg";
import seguros from "@/app/assets/seguros.svg";
import credito from "@/app/assets/credito-celular.svg";
import { ServiceCard } from "@/app/components/service-card/service-card";
import Link from "next/link";

export default function Servico() {
    return (
      <BoxInside title="Confira os serviços disponíveis">
        {/* <h1 className="hidden md:block text-[25px] font-bold relative">
          Confira os serviços disponíveis
        </h1>
        <h1 className="block md:hidden text-[25px] font-bold relative">
          Nova transação
        </h1> */}

      <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-7 mt-8 relative z-10">
        <ServiceCard title="Empréstimo" icon={emprestimo} />
        <Link href="/meus-cartoes">
          <ServiceCard title="Meus cartões" icon={cartoes} />
        </Link>
        <ServiceCard title="Doações" icon={doacoes} />
        <ServiceCard title="Pix" icon={pix} />
        <ServiceCard title="Seguros" icon={seguros} />
        <ServiceCard title="Crédito celular" icon={credito} />
      </div>
    </BoxInside>
  )
}
