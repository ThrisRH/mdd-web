import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const protectedPaths = ["/blogs"];

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken")?.value;

  if (protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path))) {
    if (!token) {
      const res = NextResponse.next();
      res.headers.set("x-auth-status", "unauthenticated");
      return NextResponse.redirect(new URL("/unauthenticated", req.url));
    }
  }

  return NextResponse.next();
}

// Test account: username: thrisx04@gmail.com | password: truy0310
