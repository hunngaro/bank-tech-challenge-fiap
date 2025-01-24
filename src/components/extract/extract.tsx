"use client";
import Image from "next/image";
import edit from "@/assets/lapis.svg";
import trash from "@/assets/lixeira.svg";
import { formatDate, formatToReais, getLongMonth } from "@/utils/format";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";

export function Extract() {
  const depositos = useAppSelector((state) => state.deposito.depositos);

  return (
      <div className="w-60 mx-auto lg:w-full">
        <div className="flex justify-between items-center ">
          <h1 className="text-black font-bold text-[25px]">Extrato</h1>
          <Link href="/transacoes" className="flex items-center gap-4">
            <button type="button" className="bg-my-blue rounded-full p-2">
              <Image src={edit} alt="" />
            </button>
            <button type="button" className="bg-my-blue rounded-full p-2">
              <Image src={trash} alt="" />
            </button>
          </Link>
        </div>
        <section className="grid gap-6 mt-6">
          {depositos.map((deposito) => (
            <div key={deposito.id} className="grid gap-2 pb-2">
              <strong className="text-my-green text-[13px] font-semibold capitalize">
                {getLongMonth(deposito.data)}
              </strong>
              <div className="flex justify-between items-center">
                <p className="text-black first-letter:capitalize">
                  {deposito.label}
                </p>
                <span className="text-[13px] text-my-extract-date-color">
                  {formatDate(deposito.data)}
                </span>
              </div>
              <strong className="text-black font-semibold">
                {formatToReais(deposito.valor)}
              </strong>
              <hr className="w-3/4 border-b-[1px] border-b-my-green" />
            </div>
          ))}
        </section>
      </div>
  );
}
