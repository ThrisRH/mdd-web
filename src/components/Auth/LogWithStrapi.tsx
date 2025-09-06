import { signIn } from "next-auth/react";
import GoogleIC from "@/assets/svg/google";
import { ButtonsArea, GoogleLoginButton } from "./Auth.styles";
import { Body1, Body2 } from "../Typography/Body.styles";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../Input/Input";
import Button from "../Button/button";

export default function SignInStrapi() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const res = await signIn("strapi-signin", {
        redirect: false,
        identifier: identifier,
        password,
        callbackUrl: "/",
      });

      if (res.error) {
        setError("Email hoặc mật khẩu không đúng");
        return;
      }

      router.push("/");
      console.log(res);
    } catch (error) {
      setError("Lỗi server");
    }
  };

  return (
    <>
      <Input
        value={identifier}
        onchange={(e) => setIdentifier(e.target.value)}
        type="text"
        label="Email"
        placeholder="Your email"
      />
      <Input
        value={password}
        onchange={(e) => setPassword(e.target.value)}
        type="password"
        label="Password"
        placeholder="Your password"
      />
      <Body2 $color="#ff0000">{error}</Body2>
      <ButtonsArea>
        <Button
          primary={false}
          onClickFunc={() => router.push("/auth/register")}
        >
          Register
        </Button>
        <Button
          className="text-white"
          primary={true}
          onClickFunc={handleSubmit}
        >
          Login
        </Button>
      </ButtonsArea>
    </>
  );
}
