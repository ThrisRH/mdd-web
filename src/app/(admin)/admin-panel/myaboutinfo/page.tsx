"use client";
import { useEffect, useState } from "react";
import { TitleContainer } from "@/components/Layout/AdminLayout/Layout.styles";
import Loading from "@/app/(user)/loading";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import AboutBody from "@/components/Main/AdminMain/About/AboutBody";
import { MainContentContainer } from "@/styles/components/layout/Layout.styles";
import { Text } from "@/styles/theme/typography";
import { handleError } from "@/utils/HandleError";

export default function AboutPage() {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getFaq = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `/mmdblogsapi/about?populate[author][populate]=avatar&populate[author][populate]=contact`
        );
        const result = await res.json();
        setData(result.data);
      } catch (err) {
        handleError();
      } finally {
        setLoading(false);
      }
    };

    getFaq();
  }, []);

  return (
    <MainContentContainer>
      <TitleContainer>
        <Text $variant="h1">CÀI ĐẶT MÔ TẢ BẢN THÂN</Text>
      </TitleContainer>

      {loading ? (
        <FlexContainer $justify="center">
          <Loading />
        </FlexContainer>
      ) : (
        <AboutBody about={data} />
      )}
    </MainContentContainer>
  );
}
