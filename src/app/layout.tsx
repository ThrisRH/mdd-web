import type { Metadata } from "next";
import "./globals.css";
import { Lora, Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import { auth } from "@/auth";
import SessionWrapper from "@/components/Main/SessionWrapper";
import ReduxProvider from "./providers/redux_provider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // các trọng số muốn dùng
  variable: "--font-inter", // tạo biến CSS để dùng trong globals.css hoặc tailwind
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // các trọng số muốn dùng
  variable: "--font-lora", // tạo biến CSS để dùng trong globals.css hoặc tailwind
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
        <StyledComponentsRegistry>
          <SessionWrapper session={session}>
            <ReduxProvider>{children}</ReduxProvider>
          </SessionWrapper>
          <ToastContainer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
