"use client";
import { useContext, useState, useEffect } from "react";
import { CartoesContext } from "@/app/contexts/meus-cartoes-context";

import BoxInside from "@/app/ui/BoxInside";
import Card from "../card/card";


export default function Cards() {
    const [isLoading, setIsLoading] = useState(true);
    const { cartoes } = useContext(CartoesContext)

    useEffect(() => {
        if (cartoes) {
          setIsLoading(false);
        }
    }, [cartoes]);
    
    
    return (
        <BoxInside title="Meus cartões">
            {isLoading ? (
                <p>Carregando...</p>
            ) : (
                cartoes.length ? (
                    cartoes.map(card => (
                        <Card key={card.id} name={card.nameCartao} status={card.status} funcoes={card.function} typeCard={card.type} number={card.number} />
                    ))
                    ) : (
                    <p>Você ainda não possui cartão.</p>
                    )
                )
            }
        </BoxInside>
    )
}
