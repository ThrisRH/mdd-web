import { signIn } from "next-auth/react";
import GoogleIC from "@/assets/svg/google";
import { GoogleLoginButton } from "./Auth.styles";
import { Body1 } from "../Typography/Body.styles";

export default function SignInGoogle() {
  const handleSignIn = async () => {
    await signIn("google");
  };

  return (
    <GoogleLoginButton onClick={handleSignIn}>
      <GoogleIC />
      <Body1>Login with Google</Body1>
    </GoogleLoginButton>
  );
}
