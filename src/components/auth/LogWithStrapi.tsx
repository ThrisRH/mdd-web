import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../ui/input";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import {} from "@/components/ui/button/styled";
import MainButton from "../ui/button/main_button";
import { ErrorText } from "@/styles/theme/typography";

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
      { method: "GET", headers: { "Content-Type": "application/json" } },
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
      <ErrorText>{error}</ErrorText>
      <FlexContainer $flexDirection="row">
        <MainButton
          variant="secondary"
          onClick={() => router.push("/auth/register")}
          isDisable={isSending}
        >
          Register
        </MainButton>
        <MainButton
          variant="primary"
          onClick={handleSubmit}
          isDisable={isSending}
        >
          Login
        </MainButton>
      </FlexContainer>
    </>
  );
}
