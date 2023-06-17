import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import MainNavigation from "@/components/MainNavigation";
import AuthContextProvider from "@/context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthContextProvider>
        <MainNavigation />
        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  );
}
