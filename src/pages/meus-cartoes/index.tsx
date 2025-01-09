import { AuthWrapper } from "@/components/auth-wrapper/auth-wrapper";
import Cards from "@/components/cards/cards";
import Saldo from "@/components/saldo/saldo";
import DefaultLayout from "@/layouts/default-layout";
import { GetServerSidePropsContext } from "next";
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
