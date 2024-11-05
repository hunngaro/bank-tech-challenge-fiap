"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { AuthContext } from "./authentication-context";

interface DepositoContextProps {
  depositos: depositos[];
  addNewTransaction: (transactionData: TransactionData) => Promise<void>;
  updateTransaction: (
    transactionId: string,
    transactionData: TransactionData
  ) => Promise<void>;
  removeTransaction: (transactionId: string) => Promise<void>;
}

export const DepositoContext = createContext<DepositoContextProps>(
  {} as DepositoContextProps
);

interface Props {
  children: ReactNode;
}

export interface depositos {
  id: string;
  label: string;
  idUser: number;
  valor: number;
  data: string;
}

export interface TransactionData {
  typeTransaction: string;
  valueTransaction: number ;
  date: string;
 }

export function DepositoProvider({ children }: Props) {
  const { user } = useContext(AuthContext);
  const [depositos, setDepositos] = useState<depositos[]>([]);

  const addNewTransaction = async (transactionData: TransactionData) => {
    try {
      const data: depositos = {
        id: String(Math.random()),
        idUser: user!.id,
        label: transactionData.typeTransaction,
        valor: transactionData.valueTransaction,
        data: transactionData.date,
      };
      await fetch("http://localhost:3001/depositos", {
        method: "POST",
        body: JSON.stringify(data),
      });
      setDepositos((depositos) => [...depositos, data]);
    } catch (error) {
      throw error;
    }
  };

  const updateTransaction = async (
    transactionId: string,
    transactionData: TransactionData
  ) => {
    try {
      const data: depositos = {
        id: transactionId,
        idUser: user!.id,
        label: transactionData.typeTransaction,
        valor: transactionData.valueTransaction,
        data: transactionData.date,
      };
      await fetch(`http://localhost:3001/depositos/${transactionId}`, {
        method: "PUT",
        body: JSON.stringify(data),
      });
      setDepositos((currentDepositos) =>
        currentDepositos.map((deposito) =>
          deposito.id === transactionId ? data : deposito
        )
      );
    } catch (error) {
      throw error;
    }
  };

  const removeTransaction = async (transactionId: string) => {
    try {
      await fetch(`http://localhost:3001/depositos/${transactionId}`, {
        method: "DELETE",
      });
      const newTransactions = depositos.filter(
        (deposito) => deposito.id !== transactionId
      );
      setDepositos(newTransactions);
    } catch (error) {
      throw error;
    }
  };

  const fetchData = async (
    endpoint: string,
    setState: Dispatch<SetStateAction<depositos[]>>
  ) => {
    try {
      const response = await fetch(`http://localhost:3001/${endpoint}`);
      const data = await response.json();
      setState(data);
    } catch (error) {
      console.error(`Erro ao buscar ${endpoint}:`, error);
    }
  };

  useEffect(() => {
    // Buscar depositos pelo id do usuario
    fetchData(`depositos?idUser=${user?.id}`, setDepositos);
  }, [user]);

  return (
    <DepositoContext.Provider
      value={{
        depositos,
        addNewTransaction,
        updateTransaction,
        removeTransaction,
      }}
    >
      {children}
    </DepositoContext.Provider>
  );
}
