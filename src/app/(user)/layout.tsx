import Footer from "@/component/layout/client/footer";
import Header from "@/component/layout/client/header/desktop-header";
import Banner from "@/section/client/main/hero-section";
import PageTransition from "@/component/transitions/PageTransition";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Banner />
      <PageTransition>
        {children}
      </PageTransition>
      <Footer />
    </>
  );
}
