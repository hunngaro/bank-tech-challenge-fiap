import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/header";
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
    <html lang="en">
      <body>
        <main className="flex flex-col">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
