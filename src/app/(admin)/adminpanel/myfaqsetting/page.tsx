"use client";
import { useEffect, useState } from "react";
import { TitleContainer } from "@/components/Layout/AdminLayout/Layout.styles";
import { H1 } from "@/components/Typography/Heading.styles";
import Loading from "@/app/(user)/loading";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import FAQsBody from "@/components/Main/AdminMain/Faq/FAQsBody";
import { MainContentContainer } from "@/styles/components/layout/Layout.styles";

export default function FAQsPage() {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getFaq = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/mmdblogsapi/faq?populate=*`, {
          cache: "no-store",
        });
        const result = await res.json();
        setData(result.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getFaq();
  }, []);

  return (
    <MainContentContainer>
      <TitleContainer>
        <H1>CÀI ĐẶT HỎI VÀ ĐÁP (FAQ)</H1>
      </TitleContainer>

      {loading ? (
        <FlexContainer $justify="center">
          <Loading />
        </FlexContainer>
      ) : (
        <FAQsBody faqs={data} />
      )}
    </MainContentContainer>
  );
}
