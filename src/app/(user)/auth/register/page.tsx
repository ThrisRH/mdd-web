"use client";
import { AuthBodyContainer } from "@/section/client/auth/styled";
import SignInGoogle from "@/section/client/auth/LogWithGoogle";
import SignUpStrapi from "@/section/client/auth/RegisterWithStrapi";
import {
  FlexContainer,
  FormContainer,
} from "@/styles/components/layout/Common.styles";

export default function RegisterPage() {
  return (
    <AuthBodyContainer>
      <FormContainer $gap="sm">
        <SignUpStrapi />

        {/* Vùng login với oAuth */}
        <FlexContainer>
          <SignInGoogle />
        </FlexContainer>
      </FormContainer>
    </AuthBodyContainer>
  );
}
