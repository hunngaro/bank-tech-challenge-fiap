import Cards from "@/components/cards/cards";
import Saldo from "@/components/saldo/saldo";
import DefaultLayout from "@/layouts/default-layout";
import { ReactElement } from "react";

export default function MyCards() {
  return (
    <div className="flex flex-col gap-8">
      <Saldo />
      <Cards />
    </div>
  );
}

MyCards.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}

