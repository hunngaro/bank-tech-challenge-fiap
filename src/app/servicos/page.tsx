import Image from "next/image";
import pixels from "@/app/assets/pixels-servicos.svg";
import emprestimo from "@/app/assets/icone-emprestimo.svg";
import cartoes from "@/app/assets/cartoes.svg";
import doacoes from "@/app/assets/doacoes.svg";
import pix from "@/app/assets/pix.svg";
import seguros from "@/app/assets/seguros.svg";
import credito from "@/app/assets/credito-celular.svg";
import { ServiceCard } from "@/app/components/service-card/service-card";

export default function Servicos() {
  return (
    <section className="bg-my-services-gray rounded-lg md:px-4 lg:px-8 px-6 py-8 relative mt-6">
      <Image
        src={pixels}
        className="absolute right-0 top-0 w-[146px] md:w-auto"
        alt=""
      />
      <Image
        src={pixels}
        className="absolute left-0 bottom-0 w-[146px] rotate-180"
        alt=""
      />
      <h1 className="hidden md:block text-[25px] font-bold relative">
        Confira os serviços disponíveis
      </h1>
      <h1 className="block md:hidden text-[25px] font-bold relative">
        Nova transação
      </h1>

      <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-7 mt-8 relative">
        <ServiceCard title="Empréstimo" icon={emprestimo} />
        <ServiceCard title="Meus cartões" icon={cartoes} />
        <ServiceCard title="Doações" icon={doacoes} />
        <ServiceCard title="Pix" icon={pix} />
        <ServiceCard title="Seguros" icon={seguros} />
        <ServiceCard title="Crédito celular" icon={credito} />
      </div>
    </section>
  );
}
