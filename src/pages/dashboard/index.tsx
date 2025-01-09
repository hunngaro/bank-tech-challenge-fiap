import DefaultLayout from "@/layouts/default-layout";
import NovaTransacao from "@/components/nova-transacao/nova-transacao";
import Saldo from "@/components/saldo/saldo";
import { ReactElement } from "react";
import GraficoDash from "@/components/grafico-dash/grafico-dash";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8">
      <Saldo />
      <NovaTransacao />
      <GraficoDash/>
    </div>
  );
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}
