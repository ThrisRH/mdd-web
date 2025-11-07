"use client";
import { AuthBodyContainer } from "@/section/client/auth/styled";
import SignInGoogle from "@/section/client/auth/LogWithGoogle";
import SignInStrapi from "@/section/client/auth/LogWithStrapi";
import { UserInfoContextProvider } from "@/context/user-info-context";
import { FormContainer } from "@/styles/layout";

export default function LoginPage() {
  return (
    <UserInfoContextProvider>
      <AuthBodyContainer>
        <FormContainer $gap="sm">
          <SignInStrapi />
          <SignInGoogle />
        </FormContainer>
      </AuthBodyContainer>
    </UserInfoContextProvider>
  );
}
