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

  
  const { user } = useContext(AuthContext)


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
    <DepositoContext.Provider value={{ depositos }}>
      {children}
    </DepositoContext.Provider>
  );
}
