import { signIn } from "next-auth/react";
import GoogleIC from "@/assets/svg/google";
import { ButtonsArea, GoogleLoginButton } from "./Auth.styles";
import { Body1, Body2 } from "../Typography/Body.styles";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../Input/Input";
import Button from "../Button/button";
import { FlexContainer } from "@/styles/components/layout/FlexContainer.styles";

export default function SignInStrapi() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = async () => {
    setIsSending(true);
    if (identifier === "" || password === "") {
      setError("Email and Password are required!");
      setIsSending(false);
      return;
    }

    // Email format
    if (!emailRegex.test(identifier)) {
      setError("Wrong email format!");
      setIsSending(false);
      return;
    }

    const userRes = await fetch(
      `/mmdblogsapi/users?filters[email][$eq]=${identifier}`,
      { method: "GET", headers: { "Content-Type": "application/json" } }
    );
    const userData = await userRes.json();

    // Check tài khoản tồn tại
    if (!userData || userData.length === 0) {
      setError("User not found!");
      setIsSending(false);
      return;
    }

    // Login
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
        router.replace("/");
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
        onchange={(e) => {
          setIdentifier(e.target.value);
          setError("");
        }}
        type="text"
        label="Email"
        placeholder="Your email"
      />
      <Input
        value={password}
        onchange={(e) => {
          setPassword(e.target.value);
          setError("");
        }}
        type="password"
        label="Password"
        placeholder="Your password"
      />
      <Body2 $color="#ff0000">{error}</Body2>
      <FlexContainer $flexDirection="row" $gap={12} $width="100%">
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
      </FlexContainer>
    </>
  );
}
