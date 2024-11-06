"use client";
import CardTransaction from "../components/card-transaction/card-transaction";
import Saldo from "../components/saldo/saldo";
import BoxInside from "../ui/BoxInside";

export default function InvestimentPage() {
  return (
    <div className="flex flex-col gap-8">
      <Saldo />
      <BoxInside title="Lista de transações">
        <CardTransaction />
      </BoxInside>
    </div>
  );
}
