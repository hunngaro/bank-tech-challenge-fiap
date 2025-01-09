import DefaultLayout from "@/layouts/default-layout";
import NovaTransacao from "@/components/nova-transacao/nova-transacao";
import Saldo from "@/components/saldo/saldo";
import { ReactElement } from "react";
import GraficoDash from "@/components/grafico-dash/grafico-dash";
import { AuthWrapper } from "@/components/auth-wrapper/auth-wrapper";
import { GetServerSidePropsContext } from "next";

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
      <AuthWrapper>{page}</AuthWrapper>
    </DefaultLayout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies = context.req.cookies;
  const user = cookies.user ? JSON.parse(cookies.user) : null;

  if (!user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
