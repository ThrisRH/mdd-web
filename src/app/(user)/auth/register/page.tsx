"use client";
import {
  EmptyWrapper,
  FormContainer,
  OAuthArea,
} from "@/components/Auth/Auth.styles";
import SignInGoogle from "@/components/Auth/LogWithGoogle";
import SignUpStrapi from "@/components/Auth/RegisterWithStrapi";

export default function RegisterPage() {
  return (
    <EmptyWrapper>
      <FormContainer>
        <SignUpStrapi />
        <OAuthArea>
          <SignInGoogle />
        </OAuthArea>
      </FormContainer>
    </EmptyWrapper>
  );
}
