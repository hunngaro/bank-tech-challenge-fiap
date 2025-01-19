"use client";
import { AuthWrapper } from "@/components/auth-wrapper/auth-wrapper";
import Saldo from "@/components/saldo/saldo";
import {
  removeTransaction,
  TransactionData,
  updateTransaction,
} from "@/features/deposito/deposito-thunks";
import DefaultLayout from "@/layouts/default-layout";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { lazy, ReactElement, Suspense, useEffect, useState } from "react";
import toast from "react-hot-toast";

const CardTransaction = lazy(() => import("remoteApp/CardTransaction"));

export default function TransactionsPage() {
  const dispatch = useAppDispatch();
  const depositos = useAppSelector((state) => state.deposito.depositos);
  const [isClient, setIsClient] = useState(false);

  const handleUpdateTransaction = async (
    transactionId: string,
    transactionData: TransactionData
  ) => {
    await dispatch(
      updateTransaction({
        transactionId,
        transactionData,
      })
    )
      .unwrap()
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleRemoveTransaction = (transactionId: string) => {
    dispatch(removeTransaction(transactionId))
      .unwrap()
      .catch((error) => {
        toast.error(error);
      });
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <Head>
        <title>ByteBank | Transações</title>
      </Head>
      <Saldo />
      {isClient && (
        <Suspense fallback={<div>Carregando...</div>}>
          <CardTransaction
            depositos={depositos}
            onRemoveTransaction={handleRemoveTransaction}
            onUpdateTransaction={handleUpdateTransaction}
          />
        </Suspense>
      )}
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
