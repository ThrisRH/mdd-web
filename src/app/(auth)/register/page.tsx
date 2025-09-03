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
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async () => {
    setError("");
    if (username == "" || email == "" || password == "") {
      setError("Không được để trống!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Mật khẩu không trùng khớp!");
      return;
    }

    const res = await fetch("/mmdblogsapi/auth/local/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await res.json();
    console.log(data);
    if (res.ok && data.jwt) {
      window.location.href = "/login";
    } else {
      setError(data.error.message);
    }
  };

  return (
    <FormWrapper>
      <FormContainer>
        <Input
          value={username}
          onchange={(e) => setUsername(e.target.value)}
          type="text"
          label="Username"
          placeholder="Your username"
        />
        <Input
          value={email}
          onchange={(e) => setEmail(e.target.value)}
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
        <Input
          value={confirmPassword}
          onchange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          label="Confirm password"
          placeholder="Your password again"
        />
        <Body2 $color="#ff0000">{error}</Body2>
        <ButtonsArea>
          <Button onClickFunc={() => router.push("/login")} primary={false}>
            Login
          </Button>
          <Button
            className="text-white"
            primary={true}
            onClickFunc={handleSubmit}
          >
            Register
          </Button>
        </ButtonsArea>
      </FormContainer>
    </FormWrapper>
  );
}
