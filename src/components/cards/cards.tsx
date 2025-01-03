"use client";
import { useState, useEffect } from "react";

import BoxInside from "@/ui/BoxInside";
import Card from "../card/card";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { fetchMeusCartoes } from "@/features/meus-cartoes/meus-cartoes-thunks";

export default function Cards() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch()
  const cartoes = useAppSelector((state) => state.meusCartoes.cartoes);
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (user?.id) {
      dispatch(fetchMeusCartoes(user.id)).finally(() => setIsLoading(false))
    }
  }, [user, dispatch]);

  return (
    <BoxInside title="Meus cartões">
      {isLoading ? (
        <p>Carregando...</p>
      ) : cartoes.length ? (
        cartoes.map((card) => (
          <Card
            key={card.id}
            name={card.nameCartao}
            status={card.status}
            funcoes={card.function}
            typeCard={card.type}
            number={card.number}
          />
        ))
      ) : (
        <p className="text-xl">
          Você ainda <b> não possui</b> cartão.
        </p>
      )}
    </BoxInside>
  );
}
