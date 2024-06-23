"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Fragment, useEffect } from 'react';

const inter = Inter({ subsets: ["latin"] });

const AOSProvider = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <Fragment>{children}</Fragment>;
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-[90%] mx-auto`}>
        <Navbar />
        <AOSProvider>{children}</AOSProvider>
        <Footer />
      </body>
    </html>
  );
}
