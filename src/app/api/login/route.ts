import { NextResponse } from "next/server";

const API_URL = process.env.SERVER_HOST!;

export async function POST(req: Request) {
  try {
    const { identifier, password } = await req.json();

    const strapiRes = await fetch(`${API_URL}/api/auth/local`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier, password }),
    });

    const data = await strapiRes.json();

    if (!strapiRes.ok) {
      return NextResponse.json(
        { message: data.error?.message || "Đăng nhập thất bại" },
        { status: 400 }
      );
    }

    // Set JWT cookie
    const res = NextResponse.json({ user: data.user });
    res.cookies.set("authToken", data.jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 ngày
    });

    return res;
  } catch (err) {
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
