import { signIn } from "next-auth/react";
import GoogleIC from "@/assets/svg/google";
import { CustomButton } from "@/component/button/styled";
import { Text } from "@/styles/theme/typography";

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
      <Text $variant="body1">Login with Google</Text>
    </CustomButton>
  );
}
