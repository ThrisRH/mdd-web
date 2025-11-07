import { signIn } from "next-auth/react";
import GoogleIC from "@/assets/svg/google";
import { CustomButton } from "@/component/button/styled";

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
      <p className="body-1">Login with Google</p>
    </CustomButton>
  );
}
