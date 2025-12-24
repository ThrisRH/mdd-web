"use client";
import Loading from "@/app/(user)/loading";
import NotFound from "@/section/client/main/not-found";
import { AboutState } from "@/types/about";
import React, { useEffect, useState } from "react";
import { TitleContainer } from "./styled";
import { FlexContainer, MainContentContainer } from "@/styles/layout";
import AboutBody from "@/section/admin/About/about-wrapper";

type Props = {
  about: AboutState;
};
const AboutScreen = ({ about }: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
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
