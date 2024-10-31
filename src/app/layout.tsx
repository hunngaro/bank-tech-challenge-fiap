import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/Footer/footer";
import { LoggedHeader } from "./components/logged-header/logged-header";
import { DepositoProvider } from "./contexts/DepositoContext";
import { SaldoProvider } from "./contexts/saldo-context";
import { CartoesProvider } from "./contexts/meusCartoes";

export const metadata: Metadata = {
  title: "ByteBank",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLogged = true;

  return (
    <html lang="pt-BR">
      <body>
        <main className="flex flex-col h-screen overflow-x-hidden">
          {isLogged ? <LoggedHeader /> : <Header />}
          <DepositoProvider>
            <SaldoProvider>
              <CartoesProvider>
                {children}
              </CartoesProvider>
            </SaldoProvider>
          </DepositoProvider>
          <Footer />
        </main>
      </body>
    </html>
  );
}
