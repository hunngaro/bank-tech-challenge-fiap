"use client";
import BoxInside from "@/ui/BoxInside";
import Card from "../card/card";
import { useAppSelector } from "@/lib/hooks";

export default function Cards() {
  const cartoes = useAppSelector((state) => state.meusCartoes.cartoes);

  return (
    <BoxInside title="Meus cartões">
      {cartoes.length ? (
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
