import { auth } from "@/auth";
import { NextResponse } from "next/server";

const protectedPages = ["/blogs"];

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  console.log("Route: ", req.nextUrl.pathname);
  console.log("Is logged in: ", isLoggedIn);
  const { pathname } = req.nextUrl;

  if (
    isLoggedIn &&
    (pathname === "/auth/login" ||
      pathname === "/auth/register" ||
      pathname === "/unauthenticated")
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  const isProtected = protectedPages.some((path) => pathname.startsWith(path));

  if (!isLoggedIn && isProtected) {
    return NextResponse.redirect(new URL("/unauthenticated", req.url));
  }

  return NextResponse.next();
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
