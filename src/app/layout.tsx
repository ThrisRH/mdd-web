import type { Metadata } from "next";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { auth } from "@/auth";
import ReduxProvider from "./providers/redux-provider";
import StyledComponentsProvider from "./providers/styled-components-provider";
import { GlobalStyle } from "@/styles/global";
import localFont from "next/font/local";
import SessionWrapper from "./providers/session-provider";

const inter = localFont({
  src: "../../public/fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-lora",
  weight: "400 700",
  style: "normal",
  display: "swap",
});

const lora = localFont({
  src: "../../public/fonts/Lora-VariableFont_wght.ttf",
  variable: "--font-lora",
  weight: "400 700",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MDD Blog",
  description: "Trang blog của MDD",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <body className={`antialiased`}>
        <StyledComponentsProvider>
          <GlobalStyle />
          <SessionWrapper session={session}>
            <ReduxProvider>{children}</ReduxProvider>
          </SessionWrapper>
          <ToastContainer />
        </StyledComponentsProvider>
      </body>
    </html>
  );
}
