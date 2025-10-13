"use client";
import { EmptyWrapper, OAuthArea } from "@/components/Auth/Auth.styles";
import SignInGoogle from "@/components/Auth/LogWithGoogle";
import SignInStrapi from "@/components/Auth/LogWithStrapi";
import { FlexContainer } from "@/styles/components/layout/FlexContainer.styles";

export default function LoginPage() {
  return (
    <EmptyWrapper>
      <FlexContainer
        $flexDirection="column"
        $gap={12}
        $width="50%"
        $height="auto"
        $padding="36px 0px"
      >
        <SignInStrapi />
        <OAuthArea>
          <SignInGoogle />
        </OAuthArea>
      </FlexContainer>
    </EmptyWrapper>
  );
}
