import Investiment from "@/components/investiment/investiment";
import Saldo from "@/components/saldo/saldo";
import DefaultLayout from "@/layouts/default-layout";
import { ReactElement } from "react";

export default function InvestimentPage() {
  return (
    <div className="flex flex-col gap-8">
      <Saldo />
      <Investiment />
    </div>
  );
}

InvestimentPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}
