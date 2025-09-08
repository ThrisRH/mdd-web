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
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    setIsSending(true);
    if (identifier === "" || password === "") {
      setError("Email and Password are required!");
      setIsSending(false);
      return;
    }
    try {
      const res = await signIn("strapi-signin", {
        redirect: false,
        identifier,
        password,
      });

      console.log(res);

      if (res?.error) {
        setError("Email or Password is incorrect!");
      } else {
        router.push("/");
      }
    } catch (error) {
      setError("Lỗi server");
    } finally {
      setIsSending(false);
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
          variant="secondary"
          onClickFunc={() => router.push("/auth/register")}
          disable={isSending}
        >
          Register
        </Button>
        <Button
          className="text-white"
          variant="primary"
          onClickFunc={handleSubmit}
          disable={isSending}
        >
          Login
        </Button>
      </ButtonsArea>
    </>
  );
}
