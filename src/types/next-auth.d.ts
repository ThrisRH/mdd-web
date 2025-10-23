import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    strapiToken?: string;
    user: {
      id: string;
      username?: string;
      email?: string;
      jwt?: string;
      errorMessage?: string;
      isAuthor?: boolean;
    };
  }

  interface User {
    id: string;
    username?: string;
    email?: string;
    jwt?: string;
    errorMessage?: string;
    isAuthor?: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    username?: string;
    email?: string;
    jwt?: string;
    isAuthor?: boolean;
  }
}
