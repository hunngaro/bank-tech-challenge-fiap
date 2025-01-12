import { formatDate, formatToReais } from "@/utils/format";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import lapis from "@/assets/lapis.svg";
import lixeira from "@/assets/lixeira.svg";
import { ModalDeposito } from "../modal-deposito/modal-deposito";
import { removeTransaction } from "@/features/deposito/deposito-thunks";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import toast from "react-hot-toast";

export default function CardTransaction() {
  const dispatch = useAppDispatch();
  const depositos = useAppSelector((state) => state.deposito.depositos);
  const [openModalId, setOpenModalId] = useState<string | null>(null);

  const handleRemoveTransaction = (transactionId: string) => {
    dispatch(removeTransaction(transactionId))
      .unwrap()
      .catch((error) => {
        toast.error(error);
      });
  };

  //scroll infinito
  const [visibleCount, setVisibleCount] = useState(4); // Quantidade inicial de itens visíveis
  const observerRef = useRef<HTMLDivElement | null>(null);

  const visibleItems = depositos.slice(0, visibleCount);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Incrementa mais x itens quando o último item visível entra na viewport
          setVisibleCount((prev) => Math.min(prev + 4, depositos.length));
        }
      },
      {
        root: null, // Usa o viewport padrão
        rootMargin: "0px", // Gatilho ao estar completamente visível
        threshold: 1.0, // 100% visível
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [depositos]); // Reexecuta se `depositos` mudar

  return (
    <div>
      <div className="flex flex-col gap-4">
        {!depositos.length && (
          <h2 className="text-xl">
            Ainda <b>não há</b> registro de transações.
          </h2>
        )}
        {visibleItems.map((deposito) => (
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
                onClick={() => handleRemoveTransaction(String(deposito.id))}
              >
                <Image src={lixeira} alt="" />
              </button>
            </div>
          </div>
        ))}
        {visibleCount < depositos.length && (
          <div ref={observerRef} className="h-36 bg-transparent"></div>
        )}
      </div>
    </div>
  );
}
