"use client";
import Loading from "@/app/(user)/loading";
import { TitleContainer } from "@/components/Layout/AdminLayout/Layout.styles";
import AboutBody from "@/components/Main/AdminMain/About/AboutBody";
import NotFound from "@/components/Main/NotFound";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import { MainContentContainer } from "@/styles/components/layout/Layout.styles";
import { Text } from "@/styles/theme/typography";
import { AboutState } from "@/types/about";
import React, { useEffect, useState } from "react";

type Props = {
  about: AboutState;
};
const AboutScreen = ({ about }: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (about) {
      setLoading(false);
    }
  }, [about]);

  if (loading) {
    return (
      <MainContentContainer>
        <FlexContainer $justify="center">
          <Loading />
        </FlexContainer>
      </MainContentContainer>
    );
  }

  if (!about.id) {
    return (
      <MainContentContainer>
        <FlexContainer $justify="center">
          <NotFound />
        </FlexContainer>
      </MainContentContainer>
    );
  }

  return (
    <MainContentContainer>
      <TitleContainer>
        <Text $variant="h1">CÀI ĐẶT MÔ TẢ BẢN THÂN</Text>
      </TitleContainer>

      <AboutBody about={about} />
    </MainContentContainer>
  );
};

export default AboutScreen;
