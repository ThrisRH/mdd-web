"use client";
import { AuthBodyContainer } from "@/components/auth/styled";
import SignInGoogle from "@/components/auth/LogWithGoogle";
import SignUpStrapi from "@/components/auth/RegisterWithStrapi";
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
