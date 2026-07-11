import { betterAuth, string } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import { prisma } from "./prisma";
import { oAuthProxy } from "better-auth/plugins";

export enum UserRole {
  USER = "USER",
  PROVIDER = "PROVIDER",
  ADMIN = "ADMIN",
}

console.log("BETTER_AUTH_URL:", process.env.BETTER_AUTH_URL);
console.log("APP_URL:", process.env.APP_URL);


export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  baseURL:process.env.BETTER_AUTH_URL!,
  trustedOrigins: [
    "https://food-hub-client-iota.vercel.app",
    "http://localhost:3000",
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
    sameSite: "none",
    secure: true,
  },
},

  plugins: [oAuthProxy()],
});
