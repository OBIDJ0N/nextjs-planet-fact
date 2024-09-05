import type { Metadata } from "next";
import { Antonio, League_Spartan } from "next/font/google";
import "./globals.css";
import Layout from "./custom-layout";

const antonio = Antonio({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-antonio",
});
const spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "600"],  
  variable: "--font-spartan",
});

export const metadata: Metadata = {
  title: "The planets",
  description: "The planets site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel='shortcut icon' href={'/next.svg'} type='image/x-icon' />
      <body className={`${antonio.variable} ${spartan.variable} relative bg-purple after:absolute after:w-[2px] after:h-[2px] after:-top-[2px] custom-shadow after:bg-white`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
