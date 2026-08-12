import type { Metadata } from "next";
import "./globals.css";
import { Lora, Montserrat, Manrope, Anton } from "next/font/google";
import { company, siteUrl } from "@/components/constants";
import StructuredData from "@/components/sections/StructuredData";

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

const description =
  "OG Winners Homes helps buyers, sellers and investors find and manage property across Abuja and Lagos — from first homes to income-generating portfolios.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OG Winners Homes | Real Estate in Abuja & Lagos",
    // Child pages set only their own title; this appends the brand.
    template: "%s | OG Winners Homes",
  },
  description,
  applicationName: company.name,
  keywords: [
    "real estate Abuja",
    "real estate Lagos",
    "property for sale Nigeria",
    "houses for rent Abuja",
    "OG Winners Homes",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: company.name,
    title: "OG Winners Homes | Real Estate in Abuja & Lagos",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "OG Winners Homes | Real Estate in Abuja & Lagos",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
