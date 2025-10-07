"use client";

import { signIn } from "next-auth/react";
import { useEffect } from "react";

export default function MobileAuth() {
  useEffect(() => {
    signIn("google", {
      callbackUrl:
        "https://oversilently-calcinable-wilfredo.ngrok-free.dev/auth/redirect", // ✅ HTTPS public
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button
        style={{
          padding: "12px 20px",
          borderRadius: "8px",
          backgroundColor: "#4285F4",
          color: "#fff",
          border: "none",
          fontSize: "16px",
        }}
        onClick={() =>
          signIn("google", {
            callbackUrl:
              "https://oversilently-calcinable-wilfredo.ngrok-free.dev/auth/redirect", // ✅ HTTPS public
          })
        }
      >
        Login with Google
      </button>
    </div>
  );
}
