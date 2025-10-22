"use client";
import { AuthBodyContainer } from "@/components/auth/styled";
import SignInGoogle from "@/components/auth/LogWithGoogle";
import SignInStrapi from "@/components/auth/LogWithStrapi";
import { FormContainer } from "@/styles/components/layout/Common.styles";

export default function LoginPage() {
  return (
    <AuthBodyContainer>
      <FormContainer $gap="sm">
        <SignInStrapi />
        <SignInGoogle />
      </FormContainer>
    </AuthBodyContainer>
  );
}
