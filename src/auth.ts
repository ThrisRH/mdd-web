import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

export const { auth, handlers, signIn, signOut } = NextAuth({
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

        try {
          // Gọi API Strapi để login
          const userRes = await fetch(
            `${process.env.SERVER_HOST}/api/users?filters[email][$eq]=${credentials.identifier}`,
            { method: "GET", headers: { "Content-Type": "application/json" } }
          );
          const userData = await userRes.json();
          if (userData === null || userData.length === 0) {
            return null;
          }
          const res = await fetch(`${process.env.SERVER_HOST}/api/auth/local`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              identifier: credentials.identifier,
              password: credentials.password,
            }),
          });

          const data = await res.json();

          if (res.ok && data.jwt) {
            return {
              id: data.user.id,
              name: data.user.username,
              email: data.user.email,
              jwt: data.jwt,
            };
          } else {
            return null;
          }
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile, user }) {
      return true;
    },

    async jwt({ token, user }) {
      if (user?.jwt) token.strapiToken = user.jwt;
      return token;
    },

    async session({ session, token }) {
      // Thêm Strapi token vào session client
      (session as any).strapiToken = token.strapiToken;

      return session;
    },
  },

  session: { strategy: "jwt" },
});
