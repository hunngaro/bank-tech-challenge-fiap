import DefaultLayout from "@/layouts/default-layout";
import NovaTransacao from "@/components/nova-transacao/nova-transacao";
import Saldo from "@/components/saldo/saldo";
import { ReactElement } from "react";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8">
      <Saldo />
      <NovaTransacao />
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
