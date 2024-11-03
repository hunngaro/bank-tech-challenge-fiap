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
    id: number;
    idUser: number;
    contaCorrente: number;
    contaInvestimentos: ContaInvestimentos[];
}






export function SaldoProvider({ children }: Props) {
    const { user } = useContext(AuthContext)

    const [saldos, setSaldos] = useState<saldos[]>([]);
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
        <SaldoContext.Provider value={{ saldos }}>
            {children}
        </SaldoContext.Provider>
    )

}
