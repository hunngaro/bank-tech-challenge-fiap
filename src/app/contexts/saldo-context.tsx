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

interface SaldoContextProps {
  saldos: saldos[];
  addSaldo: (data: SaldoData) => Promise<void>;
}

export const SaldoContext = createContext<SaldoContextProps>(
  {} as SaldoContextProps
);

interface Props {
  children: ReactNode;
}

interface ContaInvestimentos {
  rendaFixa: number;
  rendaVariavel: number;
}
interface saldos {
  id: string;
  idUser: string;
  contaCorrente: number;
  contaInvestimentos: ContaInvestimentos[];
}

interface SaldoData {
  idUser: string;
  contaCorrente: number;
  contaInvestimentos: Array<[]>;
}

export function SaldoProvider({ children }: Props) {
  const { user } = useContext(AuthContext);
  const [saldos, setSaldos] = useState<saldos[]>([]);

  const addSaldo = async (data: SaldoData) => {
    try {
      const response = await fetch("http://localhost:3001/saldos", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      setSaldos((saldos) => [
        ...saldos,
        {
          id: responseData.id,
          idUser: responseData.idUser,
          contaCorrente: responseData.contaCorrente,
          contaInvestimentos: responseData.contaInvestimentos,
        },
      ]);
    } catch (error) {
      throw error;
    }
  };

  const fetchData = async (
    endpoint: string,
    setState: Dispatch<SetStateAction<saldos[]>>
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
    fetchData(`saldos?idUser=${user?.id}`, setSaldos);
  }, [user]);

  return (
    <SaldoContext.Provider value={{ saldos, addSaldo }}>
      {children}
    </SaldoContext.Provider>
  );
}
