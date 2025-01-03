import "@/styles/globals.css";
import CustomHeader from "@/components/custom-header/custom-header";
import Footer from "@/components/footer/footer";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import ReduxProvider from "@/app/provider";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ReduxProvider>
      <main className="flex flex-col h-screen overflow-x-hidden">
        <CustomHeader />
        {getLayout(<Component {...pageProps} />)}
        <Footer />
      </main>
    </ReduxProvider>
  );
}
