import "@/styles/globals.css";
import CustomHeader from "@/components/custom-header/custom-header";
import Footer from "@/components/footer/footer";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import StoreProvider from "@/lib/store-provider";
import { Toaster } from "react-hot-toast";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <StoreProvider>
      <main className="flex flex-col h-screen overflow-x-hidden">
        <CustomHeader />
        {getLayout(<Component {...pageProps} />)}
        <Footer />
      </main>
      <Toaster />
    </StoreProvider>
  );
}
