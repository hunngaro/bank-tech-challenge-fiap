import "@/styles/globals.css";
import CustomHeader from "@/components/custom-header/custom-header";
import Footer from "@/components/footer/footer";
import { AuthProvider } from "@/contexts/authentication-context";
import { DepositoProvider } from "@/contexts/deposito-context";
import { CartoesProvider } from "@/contexts/meus-cartoes-context";
import { SaldoProvider } from "@/contexts/saldo-context";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <main className="flex flex-col h-screen overflow-x-hidden">
      <AuthProvider>
        <SaldoProvider>
          <CustomHeader />
          <DepositoProvider>
            <CartoesProvider>
              {/* <Layout> */}
                {getLayout(<Component {...pageProps} />)}
              {/* </Layout> */}
            </CartoesProvider>
          </DepositoProvider>
          <Footer />
        </SaldoProvider>
      </AuthProvider>
    </main>
  );
}
