import { DepositoContext } from "@/app/contexts/deposito-context";
import { formatDate, formatToReais } from "@/app/utils/format";
import { useContext, useState } from "react";
import Image from "next/image";
import lapis from "@/app/assets/lapis.svg";
import lixeira from "@/app/assets/lixeira.svg";
import { ModalDeposito } from "../modal-deposito/modal-deposito";

export default function CardTransaction() {
  const { depositos, removeTransaction } = useContext(DepositoContext);
  const [openModalId, setOpenModalId] = useState<string | null>(null);

  return (
    <div>
      <div className="flex flex-col gap-4">
        {depositos.map((deposito) => (
          <div
            key={deposito.id}
            className="flex md:grid grid-cols-4 flex-col md:flex-row justify-between md:items-center gap-2 bg-white py-2 px-4 rounded-lg"
          >
            <ModalDeposito
              isOpen={openModalId === deposito.id}
              onClose={() => setOpenModalId(null)}
              deposito={deposito}
            />
            <div className="flex flex-1 flex-col">
              <small>Tipo</small>
              <strong>{deposito.label}</strong>
            </div>
            <div className="flex flex-col">
              <small>Valor</small>
              <strong>{formatToReais(deposito.valor)}</strong>
            </div>
            <div className="flex flex-col">
              <small>Data da transação</small>
              <strong>{formatDate(deposito.data)}</strong>
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                className="bg-my-dark-green p-2 rounded-full"
                onClick={() => setOpenModalId(deposito.id)}
              >
                <Image src={lapis} alt="" />
              </button>
              <button
                type="button"
                className="bg-my-dark-green p-2 rounded-full"
                onClick={() => removeTransaction(String(deposito.id))}
              >
                <Image src={lixeira} alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
