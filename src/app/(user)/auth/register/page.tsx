"use client";
import { AuthBodyContainer } from "@/components/Auth/Auth.styles";
import SignInGoogle from "@/components/Auth/LogWithGoogle";
import SignUpStrapi from "@/components/Auth/RegisterWithStrapi";
import { FlexContainer } from "@/styles/components/layout/Common.styles";

export default function RegisterPage() {
  return (
    <AuthBodyContainer>
      <FlexContainer $flexDirection="column" $gap={12}>
        <SignUpStrapi />

        {/* Vùng login với oAuth */}
        <FlexContainer>
          <SignInGoogle />
        </FlexContainer>
      </FlexContainer>
    </AuthBodyContainer>
  );
}
