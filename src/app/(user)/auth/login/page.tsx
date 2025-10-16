"use client";
import { AuthBodyContainer } from "@/components/Auth/Auth.styles";
import SignInGoogle from "@/components/Auth/LogWithGoogle";
import SignInStrapi from "@/components/Auth/LogWithStrapi";
import { FormContainer } from "@/styles/components/layout/Common.styles";

export default function LoginPage() {
  return (
    <AuthBodyContainer>
      <FormContainer $gap={12}>
        <SignInStrapi />
        <SignInGoogle />
      </FormContainer>
    </AuthBodyContainer>
  );
}
