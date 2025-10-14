import { signIn } from "next-auth/react";
import GoogleIC from "@/assets/svg/google";
import { Body1 } from "../Typography/Body.styles";
import { FlexContainer } from "@/styles/components/layout/FlexContainer.styles";

export default function SignInGoogle() {
  const handleSignIn = async () => {
    await signIn("google");
  };

  return (
    <FlexContainer
      $flexDirection="row"
      $gap={12}
      $align="center"
      $justify="center"
      $width="100%"
      $padding="12px 2px"
      $height="auto"
      $border="1px solid rgba(0, 0, 0, 0.2)"
      $radius={6}
      style={{ cursor: "pointer" }}
      onClick={handleSignIn}
    >
      <GoogleIC />
      <Body1>Login with Google</Body1>
    </FlexContainer>
  );
}
