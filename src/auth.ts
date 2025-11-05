import NextAuth, { Session } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

export const { auth, handlers, signIn, signOut } = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),

    // Login
    Credentials({
      id: "strapi-signin",
      name: "Strapi SignIn",
      credentials: {
        identifier: {
          label: "Email",
          type: "text",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        // gọi API Strapi
        try {
          // Email format
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!emailRegex.test(credentials.identifier as string)) {
            return null;
          }

          // Password check
          if ((credentials.password as string).length < 8) {
            return null;
          }

          const userRes = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/users?filters[email][$eq]=${credentials.identifier}`,
            { method: "GET", headers: { "Content-Type": "application/json" } },
          );
          const userData = await userRes.json();

          // Check tài khoản tồn tại
          if (!userData || userData.length === 0) {
            return null;
          }

          const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/auth/local`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                identifier: credentials.identifier,
                password: credentials.password,
              }),
            },
          );

          const data = await res.json();

          if (res.ok && data.jwt) {
            // Check tài khoản hợp lệ
            if (data.user.confirmed && !data.user.blocked) {
              return {
                id: data.user.id,
                name: data.user.username,
                email: data.user.email,
                jwt: data.jwt,
                isAuthor: data.user.isAuthor,
              };
            } else {
              return null;
            }
          } else {
            return null;
          }
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user?.jwt) token.strapiToken = user.jwt;
      if (user?.isAuthor !== undefined) token.isAuthor = user.isAuthor;
      return token;
    },

    async session({ session, token }) {
      // Thêm Strapi token vào session client
      (session as Session & { strapiToken?: string }).strapiToken =
        token.strapiToken as string;

      (session.user as any).isAuthor = token.isAuthor;

      return session;
    },
  },

  session: { strategy: "jwt" },
  trustHost: true,
});
