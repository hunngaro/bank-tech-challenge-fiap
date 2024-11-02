import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/Footer/footer";
import { LoggedHeader } from "./components/logged-header/logged-header";
import { DepositoProvider } from "./contexts/deposito-context";
import { SaldoProvider } from "./contexts/saldo-context";
import { CartoesProvider } from "./contexts/meus-cartoes-context";
import { AuthProvider } from "./contexts/authentication-context";

export const metadata: Metadata = {
  title: "ByteBank",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLogged = false;

  return (
    <html lang="pt-BR">
      <body>
        <main className="flex flex-col h-screen overflow-x-hidden">
        <AuthProvider>
          {isLogged ? <LoggedHeader /> : <Header />}
          <DepositoProvider>
            <SaldoProvider>
              <CartoesProvider>
                {children}
              </CartoesProvider>
            </SaldoProvider>
          </DepositoProvider>
          <Footer />
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
