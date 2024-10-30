"use client";
import CardTransaction from "../components/card-transaction/card-transaction";
import Saldo from "../components/saldo/saldo";
import BoxInside from "../ui/BoxInside";

export default function InvestimentPage() {
  return (
    <div className="flex flex-col gap-8">
      <Saldo />
      <BoxInside>
        <h2 className="text-2xl font-bold pb-8 relative z-10 text-black">
          Lista de transações
        </h2>
        <CardTransaction />
      </BoxInside>
    </div>
  );
}
