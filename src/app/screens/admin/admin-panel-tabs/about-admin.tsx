"use client";
import Loading from "@/app/(user)/loading";
import AboutBody from "@/section/admin/About/about-wrapper";
import NotFound from "@/section/client/main/not-found";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import { MainContentContainer } from "@/styles/components/layout/Layout.styles";
import { AboutState } from "@/types/about";
import React, { useEffect, useState } from "react";
import { TitleContainer } from "./styled";

type Props = {
  about: AboutState;
};
const AboutScreen = ({ about }: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    console.log(about);
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
        <h1>CÀI ĐẶT MÔ TẢ BẢN THÂN</h1>
      </TitleContainer>

      <AboutBody about={about} />
    </MainContentContainer>
  );
};

export default AboutScreen;
