import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const protectedPaths = ["/blogs"];
const authPaths = ["/login", "/register"];

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken")?.value;

  // Không cho xem detail blogs khi chưa đăng nhập
  if (protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path))) {
    if (!token) {
      return NextResponse.redirect(new URL("/unauthenticated", req.url));
    }
  }

  // Không cho truy cập /login và /register khi đã đăng nhập
  if (authPaths.some((path) => req.nextUrl.pathname.startsWith(path))) {
    if (token) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

// Test account: username: thrisx04@gmail.com | password: truy0310
