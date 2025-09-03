"use client";
import {
  ButtonsArea,
  FormContainer,
  FormWrapper,
} from "@/components/Auth/Auth.styles";
import Button from "@/components/Button/button";
import Input from "@/components/Input/Input";
import { Body2 } from "@/components/Typography/Body.styles";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    setError("");
    if (identifier == "" || password == "") {
      setError("Không được để trống!");
      return;
    }

    const res = await fetch("/mmdblogsapi/auth/local", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier, password }),
    });

    const data = await res.json();
    console.log(data);
    if (res.ok && data.jwt) {
      window.location.href = "/";
      document.cookie = `authToken=${data.jwt}; path=/`;
    } else {
      setError(data.error.message);
    }
  };

  return (
    <FormWrapper>
      <FormContainer>
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
          <Button primary={false} onClickFunc={() => router.push("/register")}>
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
      </FormContainer>
    </FormWrapper>
  );
}
