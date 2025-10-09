"use client";
import {
  EmptyWrapper,
  FormContainer,
  OAuthArea,
} from "@/components/Auth/Auth.styles";
import SignInGoogle from "@/components/Auth/LogWithGoogle";
import SignInStrapi from "@/components/Auth/LogWithStrapi";

export default function LoginPage() {
  return (
    <EmptyWrapper>
      <FormContainer>
        <SignInStrapi />
        <OAuthArea>
          <SignInGoogle />
        </OAuthArea>
      </FormContainer>
    </EmptyWrapper>
  );
}
