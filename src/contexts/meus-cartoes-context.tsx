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

interface CartoesContextProps {
    cartoes: cartoes[];
}

export const CartoesContext = createContext<CartoesContextProps>(
    {} as CartoesContextProps
);

interface Props {
    children: ReactNode;
}

interface cartoes {
    id: number;
    idUser: number;
    nameCartao: string,
    number: string,
    type: "fisico" | "digital",
    function: "credito" | "debito" | "credito-debito",
    status: boolean;
}



export function CartoesProvider({ children }: Props) {
    const { user } = useContext(AuthContext)

    const [cartoes, setCartoes] = useState<cartoes[]>([]);
    const fetchData = async (
        endpoint: string,
        setState: Dispatch<SetStateAction<cartoes[]>>
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
        fetchData(`cartoes?idUser=${user?.id}`, setCartoes);
    }, [user]);
    return (
        <CartoesContext.Provider value={{ cartoes }}>
            {children}
        </CartoesContext.Provider>
    )

}
