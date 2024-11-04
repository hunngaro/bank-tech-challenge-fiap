import type { Metadata } from "next";
import "./globals.css";
import { DepositoProvider } from "./contexts/deposito-context";
import { SaldoProvider } from "./contexts/saldo-context";
import { CartoesProvider } from "./contexts/meus-cartoes-context";
import { AuthProvider } from "./contexts/authentication-context";
import CustomHeader from "./components/custom-header/custom-header";
import Footer from "./components/Footer/footer";

export const metadata: Metadata = {
  title: "ByteBank",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <main className="flex flex-col h-screen overflow-x-hidden">
          <SaldoProvider>
            <AuthProvider>
              <CustomHeader />
              <DepositoProvider>
                <CartoesProvider>{children}</CartoesProvider>
              </DepositoProvider>
              <Footer />
            </AuthProvider>
          </SaldoProvider>
        </main>
      </body>
    </html>
  );
}
