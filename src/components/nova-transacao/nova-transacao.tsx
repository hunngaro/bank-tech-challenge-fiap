"use client";
import { FormEvent, useState } from "react";
import { getToday, inputFormatedToReais } from "@/utils/format";
import BoxInside from "@/ui/BoxInside";

import Image from "next/image";

import ilustracao from "@/assets/ilustracao2.svg";
import {
  addNewTransaction,
  TransactionData,
} from "@/features/deposito/deposito-thunks";
import { useAppDispatch } from "@/lib/hooks";
import toast from "react-hot-toast";
import { FileUpload } from "../file-upload/file-upload";

export default function NovaTransacao() {
  const dispatch = useAppDispatch();
  const [typeTransaction, setTypeTransaction] = useState("");
  const [value, setValue] = useState<string>("R$ 0,00");
  const [date, setDate] = useState<string>(getToday());
  const [documents, setDocuments] = useState<File[]>([]);

  const handleAddNewTransaction = async (event: FormEvent) => {
    event.preventDefault();
    const valueTransaction =
      typeof value == "string" ? +value.replace(/\D/g, "") : value;

    const data: TransactionData = {
      typeTransaction,
      valueTransaction,
      date,
      documentsUrl: documents,
    };
    await dispatch(addNewTransaction(data))
      .unwrap()
      .then(() => {
        setTypeTransaction("");
        setValue("R$ 0,00");
        setDate(getToday());
        setDocuments([]);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);

      if (documents.length + selectedFiles.length > 3) {
        toast.error(
          "Você pode selecionar até no máximo 3 recibos ou documentos."
        );
        return;
      }

      setDocuments((prevImages) => [...prevImages, ...selectedFiles]);
    }
  };

  const handleRemoveFile = (fileToRemove: File) => {
    const newFiles = documents.filter(
      (document) => document.name !== fileToRemove.name
    );
    setDocuments(newFiles);
  };

  return (
    <BoxInside title=" Nova transação">
      <div className="mb-56 md:mb-20">
        <div className="absolute w-[280px] md:w-auto right-6 bottom-6 md:block lg:hidden block z-10">
          <Image src={ilustracao} alt="" />
        </div>
        <form
          onSubmit={handleAddNewTransaction}
          className="relative z-10 flex flex-col gap-4 "
        >
          <div className="w-full max-w-80 relative">
            <select
              id="typeTransaction"
              name="typeTransaction"
              value={typeTransaction}
              onChange={(e) => setTypeTransaction(e.target.value)}
              className="selectNewTransaction w-full h-12 pl-4 pr-10 border-[1px] focus:border-my-green border-my-blue rounded-lg text-black appearance-none outline-none"
              required
            >
              <option value="" hidden>
                Selecione o tipo de transação
              </option>
              <option value="cambio">Câmbio de Moeda</option>
              <option value="doc/ted">DOC/TED</option>
              <option value="emprestimo">Empréstimo e Financiamento</option>
              <option value="deposito">Depósito</option>
              <option value="debito">Débito</option>
              <option value="credito">Crédito</option>
            </select>
            <svg
              className="absolute right-5 top-1/2 -translate-y-1/2"
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.3125 0.598145H13.6875L7 7.28564L0.3125 0.598145Z"
                fill="#004D61"
              />
            </svg>
          </div>

          <div>
            <label htmlFor="value">Data da transação:</label>
            <br />
            <input
              id="date"
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="py-3 w-full max-w-64 mt-3 border-[1px] border-my-blue focus:border-my-green rounded-lg text-black text-center outline-none flex justify-center"
              required
            />
          </div>

          <div>
            <label htmlFor="value">Valor:</label>
            <br />
            <input
              id="value"
              type="text"
              name="value"
              value={value}
              onChange={(e) => setValue(inputFormatedToReais(e))}
              className="py-3 w-full max-w-64 mt-3 border-[1px] border-my-blue focus:border-my-green rounded-lg text-black text-center outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="value">Documentos relacionados:</label>
            <br />
            <FileUpload
              files={documents}
              onFileChange={handleFileChange}
              onRemoveFile={handleRemoveFile}
              className="block mt-3"
            />
          </div>

          <button
            type="submit"
            className="bg-my-blue hover:bg-black transition-all text-white py-3 rounded-lg max-w-64"
          >
            Concluir transação
          </button>
        </form>
      </div>
      <style jsx>{`
        /* icone do select  */
        .selectNewTransaction::after {
          content: "";
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          width: 14px;
          height: 8px;
          z-index: 1000;
          background: url("data:image/svg+xml,%3Csvg%20width%3D%2214%22%20height%3D%228%22%20viewBox%3D%220%200%2014%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0.3125%200.598145H13.6875L7%207.28564L0.3125%200.598145Z%22%20fill%3D%22%23004D61%22%2F%3E%3C%2Fsvg%3E")
            no-repeat center;
        }
      `}</style>
    </BoxInside>
  );
}
