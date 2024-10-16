"use client";
import { useState } from "react";

export default function Saldo() {
    const [saldo, setSaldo] = useState<number>(2500);
    const [showValue, setShowValue] = useState<boolean>(true);

    const formatToBRL = (value: number) => {
        return value.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });
    };

    const toggleValueVisibility = () => {
        setShowValue((prev) => !prev); 
    };

    const formatarData = (): string => {
        const diasDaSemana = [
          "Domingo",
          "Segunda-feira",
          "Terça-feira",
          "Quarta-feira",
          "Quinta-feira",
          "Sexta-feira",
          "Sábado"
        ];
        
        const hoje = new Date();
        const diaSemana = diasDaSemana[hoje.getDay()];
        const dia = String(hoje.getDate()).padStart(2, '0');
        const mes = String(hoje.getMonth() + 1).padStart(2, '0');
        const ano = hoje.getFullYear();
    
        return `${diaSemana}, ${dia}/${mes}/${ano}`;
    };

    return (
        <div className="bg-my-blue w-full p-6 md:flex justify-between pb-36 rounded-lg text-white">
            <div>
                <h2 className="text-2xl mb-4">Olá, Joana! :)</h2>
                <p>{formatarData()}</p>
            </div>

            <div className="mt-12 md:mr-6 lg:mr-20">
                <p className="font-bold text-xl flex items-center relative align-middle gap-6 cursor-pointer w-fit" onClick={toggleValueVisibility}>
                    Saldo
                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.24231 5.24219C8.7371 4.7474 9.32304 4.5 10.0001 4.5C10.6772 4.5 11.2631 4.7474 11.7579 5.24219C12.2527 5.73698 12.5001 6.32292 12.5001 7C12.5001 7.67708 12.2527 8.26302 11.7579 8.75781C11.2631 9.2526 10.6772 9.5 10.0001 9.5C9.32304 9.5 8.7371 9.2526 8.24231 8.75781C7.74752 8.26302 7.50012 7.67708 7.50012 7C7.50012 6.32292 7.74752 5.73698 8.24231 5.24219ZM7.03137 9.96875C7.86471 10.776 8.85429 11.1797 10.0001 11.1797C11.146 11.1797 12.1225 10.776 12.9298 9.96875C13.7631 9.13542 14.1798 8.14583 14.1798 7C14.1798 5.85417 13.7631 4.8776 12.9298 4.07031C12.1225 3.23698 11.146 2.82031 10.0001 2.82031C8.85429 2.82031 7.86471 3.23698 7.03137 4.07031C6.22408 4.8776 5.82043 5.85417 5.82043 7C5.82043 8.14583 6.22408 9.13542 7.03137 9.96875ZM4.41418 2.46875C6.08085 1.32292 7.94283 0.75 10.0001 0.75C12.0574 0.75 13.9194 1.32292 15.5861 2.46875C17.2527 3.61458 18.4506 5.125 19.1798 7C18.4506 8.875 17.2527 10.3854 15.5861 11.5312C13.9194 12.6771 12.0574 13.25 10.0001 13.25C7.94283 13.25 6.08085 12.6771 4.41418 11.5312C2.74752 10.3854 1.5496 8.875 0.820435 7C1.5496 5.125 2.74752 3.61458 4.41418 2.46875Z" fill="#fff"/>
                    </svg>
                </p>
                <div className="w-48 h-[2px] rounded-lg mt-3 bg-white"></div>

                <p className="my-2">Conta Corrente</p>
                <p className="text-3xl">{showValue ? formatToBRL(saldo) : 'R$ *******'}</p>
            </div>
        </div>
    )
}

