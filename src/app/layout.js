'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from "react-hot-toast";

import { ThirdwebProvider } from "@thirdweb-dev/react";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Chance Lottery",
  description: "Chance Lottery",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider activeChain="binance">
          {children}
          <Toaster></Toaster>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
