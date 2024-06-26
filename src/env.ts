import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  server: {
    DB_HOST: z.string().min(2),
    DB_PORT: z.coerce.number(),
    DB_USER: z.string().min(4),
    DB_PASSWORD: z.string().min(6),
    DB_NAME: z.string().min(4),
    DATABASE_URL: z.string().url(),
    NODE_ENV: z.string().min(1),
    ACCESS_KEY_ID: z.string().min(1),
    SECRET_ACCESS_KEY: z.string().min(1),
    BUCKET_NAME: z.string().min(1),
    KNOCK_SECRET_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_BUCKET_URL: z.string().url(),
    NEXT_PUBLIC_KNOCK_PUBLIC_API_KEY: z.string().min(1),
    NEXT_PUBLIC_KNOCK_FEED_ID: z.string().min(1),
  },
  runtimeEnv: {
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    ACCESS_KEY_ID: process.env.ACCESS_KEY_ID,
    SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,
    BUCKET_NAME: process.env.BUCKET_NAME,
    NEXT_PUBLIC_BUCKET_URL: process.env.NEXT_PUBLIC_BUCKET_URL,
    NEXT_PUBLIC_KNOCK_PUBLIC_API_KEY:
      process.env.NEXT_PUBLIC_KNOCK_PUBLIC_API_KEY,
    NEXT_PUBLIC_KNOCK_FEED_ID: process.env.NEXT_PUBLIC_KNOCK_FEED_ID,
    KNOCK_SECRET_KEY: process.env.KNOCK_SECRET_KEY,
  },
});
