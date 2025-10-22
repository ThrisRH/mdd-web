import { signIn } from "next-auth/react";
import GoogleIC from "@/assets/svg/google";
import { Body1 } from "../Typography/Body.styles";
import { CustomButton } from "@/components/ui/button/styled";

export default function SignInGoogle() {
  const handleSignIn = async () => {
    await signIn("google");
  };

  return (
    <CustomButton
      $bgColor="#fff"
      $border="1px solid rgba(0,0,0,0.2)"
      $hoverBgColor="#ededed"
      onClick={handleSignIn}
    >
      <GoogleIC />
      <Body1>Login with Google</Body1>
    </CustomButton>
  );
}
