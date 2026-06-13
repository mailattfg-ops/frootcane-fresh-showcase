import type { Metadata } from "next";
import { Cal_Sans, Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans-ui",
  subsets: ["latin"],
});

const calSans = Cal_Sans({
  variable: "--font-slab-ui",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Frootcane — Fresh Sugarcane Juice",
  description:
    "Frootcane offers freshly pressed sugarcane juice made from 100% natural ingredients. Pure energy, no preservatives. Fresh, clean, and full of flavour.",
  icons: {
    icon: "/Frootcane-with-trade-mark.png",
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
        className={`${geist.variable} ${calSans.variable} antialiased selection:bg-green-600/30 selection:text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
