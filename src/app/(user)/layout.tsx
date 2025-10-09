import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/UserLayout/Header/Header";
import Banner from "@/components/Main/banner";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Banner />
      {children}
      <Footer />
    </>
  );
}
