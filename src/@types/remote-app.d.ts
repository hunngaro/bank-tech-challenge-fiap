declare module "remoteApp/CardTransaction" {
  import React from "react";

  interface depositos {
    id: string;
    label: string;
    idUser: number;
    valor: number;
    data: string;
  }

  interface CardTransactionProps {
    depositos: depositos[];
    onRemoveTransaction: (transactionId: string) => void;
    onUpdateTransaction: (
      transactionId: string,
      transaction: TransactionData
    ) => Promise<void>;
  }

  const CardTransaction: React.FC<CardTransactionProps>;
  export default CardTransaction;
}
