"use client";
import { EmptyWrapper, OAuthArea } from "@/components/Auth/Auth.styles";
import SignInGoogle from "@/components/Auth/LogWithGoogle";
import SignUpStrapi from "@/components/Auth/RegisterWithStrapi";
import { FlexContainer } from "@/styles/components/layout/FlexContainer.styles";

export default function RegisterPage() {
  return (
    <EmptyWrapper>
      <FlexContainer
        $flexDirection="column"
        $gap={12}
        $width="50%"
        $height="auto"
        $padding="36px 0px"
      >
        <SignUpStrapi />
        <OAuthArea>
          <SignInGoogle />
        </OAuthArea>
      </FlexContainer>
    </EmptyWrapper>
  );
}
