import { ButtonsArea } from "./Auth.styles";
import { Body2 } from "../Typography/Body.styles";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../Input/Input";
import Button from "../Button/button";
import { capitalizeFirstLetter } from "@/lib/Uppercase";

export default function SignUpStrapi() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    setIsSending(true);
    setError("");

    if (!username || !email || !password) {
      setError("Username, Email and Password is required!");
      setIsSending(false);
      return;
    }

    try {
      const res = await fetch(`/mmdblogsapi/auth/local/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (res.ok && data.jwt) {
        router.push("/auth/login");
        return;
      }

      // 🔹 Hiển thị lỗi Strapi, viết hoa chữ cái đầu
      setError(
        capitalizeFirstLetter(data?.error?.message || "Đăng ký thất bại")
      );
    } catch {
      // 🔹 Không log lỗi network ra console
      setError("Lỗi server");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
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
      <Body2 $color="#ff0000">{error}</Body2>
      <ButtonsArea>
        <Button
          variant="secondary"
          onClickFunc={() => router.push("/auth/login")}
          disable={isSending}
        >
          Login
        </Button>
        <Button
          className="text-white"
          variant="primary"
          onClickFunc={handleSubmit}
          disable={isSending}
        >
          Register
        </Button>
      </ButtonsArea>
    </>
  );
}
