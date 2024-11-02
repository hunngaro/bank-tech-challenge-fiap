'use client'
import Image from "next/image";
import edit from "@/app/assets/lapis.svg";
import trash from "@/app/assets/lixeira.svg";
import { useContext } from "react";
import { DepositoContext } from "@/app/contexts/deposito-context";
import { formatDate, formatPrice, getLongMonth } from "@/app/utils/format";

export function Extract() {
  const { depositos } = useContext(DepositoContext)

  return (
    <aside className="bg-[#F5F5F5] rounded-lg py-8 px-6 mt-8 lg:mt-0">
      <div className="w-60 mx-auto lg:w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-black font-bold text-[25px]">Extrato</h1>
          <div className="flex items-center gap-4">
            <button type="button" className="bg-my-blue rounded-full p-2">
              <Image src={edit} alt="" />
            </button>
            <button type="button" className="bg-my-blue rounded-full p-2">
              <Image src={trash} alt="" />
            </button>
          </div>
        </div>
        <section className="grid gap-6 mt-6">
          {depositos.map((deposito) => (
            <div key={deposito.id} className="grid gap-2 pb-2">
              <strong className="text-my-green text-[13px] font-semibold capitalize">
                {getLongMonth(deposito.data)}
              </strong>
              <div className="flex justify-between items-center">
                <p className="text-black">{deposito.label}</p>
                <span className="text-[13px] text-my-extract-date-color">
                  {formatDate(deposito.data)}
                </span>
              </div>
              <strong className="text-black font-semibold">{formatPrice(deposito.valor)}</strong>
              <hr className="w-3/4 border-b-[1px] border-b-my-green" />
            </div>
          ))}
        </section>
      </div>
    </aside>
  );
}
