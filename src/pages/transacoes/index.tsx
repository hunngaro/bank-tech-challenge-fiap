"use client";
import { AuthWrapper } from "@/components/auth-wrapper/auth-wrapper";
import CardTransaction from "@/components/card-transaction/card-transaction";
import Saldo from "@/components/saldo/saldo";
import DefaultLayout from "@/layouts/default-layout";
import BoxInside from "@/ui/BoxInside";
import { GetServerSidePropsContext } from "next";
import { ReactElement } from "react";

export default function TransactionsPage() {
  return (
    <div className="flex flex-col gap-8">
      <Saldo />
      <BoxInside title="Lista de transações">
        <CardTransaction />
      </BoxInside>
    </div>
  );
}

TransactionsPage.getLayout = function getLayout(page: ReactElement) {
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
