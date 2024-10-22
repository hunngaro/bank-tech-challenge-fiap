"use client";
import BoxInside from "@/app/ui/BoxInside";
import Card from "../card/card";


export default function Cards() {
    return (
        <BoxInside>
            <h2 className="text-2xl font-bold pb-8 relative z-10 text-black">Meus cartões</h2>
            <div className="flex flex-col gap-8 justify-between z-10 relative">
                <Card name="Joana Fonseca Gomes" funcoes="Débito/Crédito" typeCard="Cartão físico" number="**********" />
                <Card name="Joana Fonseca Gomes" funcoes="Débito" typeCard="Cartão digital" number="**********" />
            </div>
        </BoxInside>
    )
}
