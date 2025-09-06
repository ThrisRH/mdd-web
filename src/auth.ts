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
            throw new Error(data?.error?.message || "Login failed");
          }
        } catch (error) {
          console.error("Strapi auth error:", error);
          return null;
        }
      },
    }),

    // Register
    Credentials({
      id: "strapi-signup",
      name: "Strapi SignUp",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Abc@123",
        },
        email: {
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
          const res = await fetch(
            `${process.env.SERVER_HOST}/api/auth/local/register`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                username: credentials.username,
                email: credentials.email,
                password: credentials.password,
              }),
            }
          );

          const data = await res.json();

          if (res.ok && data.jwt) {
            return {
              id: data.user.id,
              name: data.user.username,
              email: data.user.email,
              jwt: data.jwt,
            };
          } else {
            throw new Error(data?.error?.message || "Register failed");
          }
        } catch (error) {
          console.error("Strapi auth error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile, user }) {
      console.log("Google account:", account);
      console.log("Profile:", profile);
      console.log("User:", user);

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
});
