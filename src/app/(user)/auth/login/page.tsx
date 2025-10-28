"use client";
import { AuthBodyContainer } from "../../../../components/auth/styled";
import SignInGoogle from "../../../../components/auth/LogWithGoogle";
import SignInStrapi from "../../../../components/auth/LogWithStrapi";
import { FormContainer } from "../../../../styles/components/layout/Common.styles";
import { UserInfoContextProvider } from "../../../../context/user-info-context";

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
