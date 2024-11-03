"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface DepositoContextProps {
  depositos: depositos[];
  addNewTransaction: (transactionData: TransactionData) => Promise<void>
  removeTransaction: (transactionId: string) => Promise<void>
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
  typeTransaction: string
  value: number
  date: string
}

export function DepositoProvider({ children }: Props) {
  const [depositos, setDepositos] = useState<depositos[]>([]);

  const addNewTransaction = async (transactionData: TransactionData) => {
    try {
      const data: depositos = {
        id: String(Math.random()),
        idUser: 2,
        label: transactionData.typeTransaction,
        valor: transactionData.value,
        data: transactionData.date
      }
      await fetch('http://localhost:3001/depositos', {
        method: 'POST',
        body: JSON.stringify(data)
      })
      setDepositos((depositos => [...depositos, data]))
    } catch (error) {
      throw error
    }
  }

  const removeTransaction = async (transactionId: string) => {
    try {
      await fetch(`http://localhost:3001/depositos/${transactionId}`, {
        method: 'DELETE',
      })
      const newTransactions = depositos.filter((deposito) => deposito.id !== transactionId)
      setDepositos(newTransactions)
    } catch (error) {
      throw error
    }
  }

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
    fetchData("depositos?idUser=2", setDepositos);
  }, []);

  return (
    <DepositoContext.Provider value={{ depositos, addNewTransaction, removeTransaction }}>
      {children}
    </DepositoContext.Provider>
  );
}
