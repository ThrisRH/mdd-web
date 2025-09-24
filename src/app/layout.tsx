import type { Metadata } from "next";
import "./globals.css";
import Banner from "@/components/Main/banner";
import { Lora, Inter } from "next/font/google";
import Header from "@/components/Layout/Header/Header";
import { InfoProvider } from "@/context/InfoContext";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Layout/Footer/Footer";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import { auth } from "@/auth";
import SessionWrapper from "@/components/Main/SessionWrapper";

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
  metadataBase: new URL("http://localhost:3000"),
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
            <InfoProvider>
              <Header />
              <Banner />
              {children}
              <Footer />
            </InfoProvider>
          </SessionWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
