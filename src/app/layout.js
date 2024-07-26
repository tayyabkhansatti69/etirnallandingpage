import { Roboto_Condensed } from "next/font/google";

import "./globals.css";

const inter = Roboto_Condensed({ 
  subsets: ["latin"],
weight:["300","400","500","700"] });

export const metadata = {
  title: "eiternal",
  description: "An app that helps you to stress out oranizing while you are prcessing a grief   ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
