import { DepositoContext } from "@/app/contexts/deposito-context";
import { formatDate, formatPrice } from "@/app/utils/format";
import { useContext } from "react";
import Image from "next/image";
import lapis from '@/app/assets/lapis.svg'
import lixeira from '@/app/assets/lixeira.svg'

export default function CardTransaction() {
  const { depositos, removeTransaction } = useContext(DepositoContext);

  return (
    <div className="flex flex-col gap-4">
      {depositos.map((deposito) => (
        <div key={deposito.id} className="flex flex-col md:flex-row justify-between md:items-center gap-2 bg-white py-2 px-4 rounded-lg">
          <div className="flex flex-col">
            <small>Tipo</small>
            <strong>{deposito.label}</strong>
          </div>
          <div className="flex flex-col">
            <small>Valor</small>
            <strong>{formatPrice(deposito.valor)}</strong>
          </div>
          <div className="flex flex-col">
            <small>Data da transação</small>
            <strong>{formatDate(deposito.data)}</strong>
          </div>
          <div className="flex gap-2">
            <button type="button" className="bg-my-dark-green p-2 rounded-full">
              <Image src={lapis} alt="" />
            </button>
            <button type="button" className="bg-my-dark-green p-2 rounded-full" onClick={() => removeTransaction(String(deposito.id))}>
              <Image src={lixeira} alt="" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
