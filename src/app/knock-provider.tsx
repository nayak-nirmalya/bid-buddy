"use client";

import "@knocklabs/react/dist/index.css";

import { KnockProvider, KnockFeedProvider } from "@knocklabs/react";
import { useSession } from "next-auth/react";
import React, { ReactNode } from "react";

import { env } from "@/env";

export function AppKnockProviders({ children }: { children: ReactNode }) {
  const session = useSession();

  return (
    <KnockProvider
      apiKey={env.NEXT_PUBLIC_KNOCK_PUBLIC_API_KEY}
      userId={session?.data?.user?.id ?? ""}
    >
      <KnockFeedProvider feedId={env.NEXT_PUBLIC_KNOCK_FEED_ID}>
        {children}
      </KnockFeedProvider>
    </KnockProvider>
  );
}
