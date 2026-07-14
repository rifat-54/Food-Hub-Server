import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma.js";
import { oAuthProxy } from "better-auth/plugins";

export enum UserRole {
  USER = "USER",
  PROVIDER = "PROVIDER",
  ADMIN = "ADMIN",
}

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  baseURL: process.env.BETTER_AUTH_URL!, // https://food-hub-server-blue.vercel.app
  trustedOrigins: [
    process.env.APP_URL!,"http://localhost:3000" // https://food-hub-client-iota.vercel.app
  ],
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "USER",
        required: false,
      },
      phone: {
        type: "string",
        required: false,
      },
      status: {
        type: "string",
        defaultValue: "ACTIVE",
        required: false,
      },
      address: {
        type: "string",
        required: false,
      },
    },
  },
  advanced: {
    defaultCookieAttributes: {
      secure: true,
      sameSite: "none",
    },
    cookies: {
      session_token: {
        name: "session_token",
        attributes: {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        },
      },
    },
  },
  plugins: [oAuthProxy()],
});