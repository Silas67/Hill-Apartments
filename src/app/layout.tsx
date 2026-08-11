import type { Metadata } from "next";
import "./globals.css";
import { Lora, Montserrat, Manrope, Anton } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
  weight: "400",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OG Winners Homes | Real Estate in Abuja & Lagos",
  description:
    "OG Winners Homes helps buyers, sellers and investors find and manage property across Abuja and Lagos — from first homes to income-generating portfolios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable}  ${lora.variable} ${montserrat.variable} ${anton.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
