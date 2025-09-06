import { signIn } from "next-auth/react";
import { ButtonsArea } from "./Auth.styles";
import { Body2 } from "../Typography/Body.styles";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../Input/Input";
import Button from "../Button/button";

export default function SignUpStrapi() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    setIsSending(true);
    if (username === "" || email === "" || password === "") {
      setError("Không được để trống thông tin đăng ký!");
      setIsSending(false);
      return;
    }
    try {
      const res = await signIn("strapi-signup", {
        redirect: false, // true để NextAuth tự redirect
        username: username,
        email: email,
        password,
        callbackUrl: "/", // redirect sau khi login
      });

      if (res.error) {
        setError("Tài khoản đã tồn tại");
        return;
      }

      router.push("/");
      console.log(res);
    } catch (error) {
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
