import { formatDate, formatToReais } from "@/utils/format";
import { useState } from "react";
import Image from "next/image";
import lapis from "@/assets/lapis.svg";
import lixeira from "@/assets/lixeira.svg";
import { ModalDeposito } from "../modal-deposito/modal-deposito";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { removeTransaction } from "@/features/deposito/deposito-thunks";

export default function CardTransaction() {
  const dispatch = useAppDispatch();
  const depositos = useAppSelector((state) => state.deposito.depositos);
  const [openModalId, setOpenModalId] = useState<string | null>(null);

  return (
    <div>
      <div className="flex flex-col gap-4">
        {!depositos.length && (
          <h2 className="text-xl">
            Ainda <b>não há</b> registro de transações.
          </h2>
        )}
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
              <strong className="first-letter:capitalize">
                {deposito.label}
              </strong>
            </div>
            <div className="flex flex-col">
              <small>Valor</small>
              <strong>{formatToReais(deposito.valor)}</strong>
            </div>
            <div className="flex flex-col">
              <small>Data da transação</small>
              <strong>{formatDate(deposito.data)}</strong>
            </div>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="bg-my-dark-green p-2 rounded-full cursor-pointer"
                onClick={() => setOpenModalId(deposito.id)}
              >
                <Image src={lapis} alt="" />
              </button>
              <button
                type="button"
                className="bg-my-dark-green p-2 rounded-full cursor-pointer"
                onClick={() => dispatch(removeTransaction(String(deposito.id)))}
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
