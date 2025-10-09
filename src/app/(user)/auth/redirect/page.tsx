"use client";

import { getSession } from "next-auth/react";
import { useEffect } from "react";

export default function RedirectPage() {
  useEffect(() => {
    async function redirectToApp() {
      const session = await getSession();
      const token = (session as any)?.strapiToken; // token từ callback jwt
      if (token) {
        window.location.href = `https://oversilently-calcinable-wilfredo.ngrok-free.dev/auth/callback?token=${token}`;
      } else {
        window.location.href = `https://oversilently-calcinable-wilfredo.ngrok-free.dev/auth/callback?error=notoken`;
      }
    }
    redirectToApp();
  }, []);

  return <div>Redirecting...</div>;
}
