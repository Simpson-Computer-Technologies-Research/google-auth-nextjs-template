"use client";

import LoadingCenter from "@/components/Loading";
import SignInButton from "@/components/SignInButton";
import { SessionProvider, useSession } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <Main />
    </SessionProvider>
  );
}

function Main(): JSX.Element {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <LoadingCenter />;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignInButton />
    </main>
  );
}
