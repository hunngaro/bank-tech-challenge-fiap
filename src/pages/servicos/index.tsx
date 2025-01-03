import { AuthWrapper } from "@/components/auth-wrapper/auth-wrapper";
import Saldo from "@/components/saldo/saldo";
import Servico from "@/components/servico/servico";
import DefaultLayout from "@/layouts/default-layout";
import { ReactElement } from "react";

export default function Servicos() {
  return (
    <div className="flex flex-col gap-8">
      <Saldo />
      <Servico />
    </div>
  );
}

Servicos.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      <AuthWrapper>{page}</AuthWrapper>
    </DefaultLayout>
  );
};
