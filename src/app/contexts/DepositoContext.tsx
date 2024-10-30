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
}

export const DepositoContext = createContext<DepositoContextProps>(
  {} as DepositoContextProps
);

interface Props {
  children: ReactNode;
}

interface depositos {
  id: number;
  label: string;
  idUser: number;
  valor: number;
  data: string;
}

export function DepositoProvider({ children }: Props) {
  const [depositos, setDepositos] = useState<depositos[]>([]);

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
    <DepositoContext.Provider value={{ depositos }}>
      {children}
    </DepositoContext.Provider>
  );
}
