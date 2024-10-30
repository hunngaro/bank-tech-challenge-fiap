import { useEffect, useState } from "react";

interface depositos {
    id: number;
    label: string;
    idUser: number;
    valor: number;
    data: string
}


export  default function CardTransaction () {
    const [depositos, setDepositos] = useState<depositos[]>([]); 

    const fetchData = async (endpoint: any, setState: any) => {
      try {
        const response = await fetch(`http://localhost:3001/${endpoint}`);
        const data = await response.json();
        setState(data);
      } catch (error) {
        console.error(`Erro ao buscar ${endpoint}:`, error);
      }
    };
   
  
    useEffect(() => {
      fetchData("depositos", setDepositos);
    }, []);

    return (
        
        <table className="z-10 relative w-full">
          <tbody>
            {depositos.length ? (
                 depositos.map(res =>( 
                <tr key={res.id} >
                    <td className="flex justify-between w-full">
                        <span>Tipo: {res?.label}</span>
                        <span>Valor: {res?.valor}</span>
                        <span> Data: {res?.data}</span>
                    </td>
                </tr>
                 ))
            ) : null}
            </tbody>
        </table>

    )
}