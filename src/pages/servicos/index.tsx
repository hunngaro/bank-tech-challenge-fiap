import { AuthWrapper } from "@/components/auth-wrapper/auth-wrapper";
import Saldo from "@/components/saldo/saldo";
import Servico from "@/components/servico/servico";
import DefaultLayout from "@/layouts/default-layout";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { ReactElement } from "react";

export default function Servicos() {
  return (
    <div className="flex flex-col gap-8">
      <Head>
        <title>ByteBank | Serviços</title>
      </Head>
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
