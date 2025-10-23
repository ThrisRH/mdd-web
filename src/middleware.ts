import { auth } from "@/auth";
import { NextResponse } from "next/server";

const protectedPages = ["/blogs"];
const adminPages = ["/admin-panel", "blog-details", "cate-details"];

export default auth(async (req) => {
  const isLoggedIn = !!req.auth; // req.auth là session thực, server-side
  const user = req.auth?.user;
  const { pathname } = req.nextUrl;

  // Redirect nếu đã login mà vào login/register
  if (
    isLoggedIn &&
    ["/auth/login", "/auth/register", "/unauthenticated"].includes(pathname)
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Redirect nếu chưa login mà vào trang protected
  if (!isLoggedIn && protectedPages.some((path) => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL("/unauthenticated", req.url));
  }

  if (isLoggedIn && adminPages.some((path) => pathname.startsWith(path))) {
    if (!user?.isAuthor) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
