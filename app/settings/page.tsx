"use client";

import Sheet from "../sheet";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Sheet title="Settings">
      {!session ? (
        <button
          style={{ marginRight: 10 }}
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          Sign in
        </button>
      ) : (
        <button style={{ marginRight: 10 }} onClick={() => signOut()}>
          Sign Out
        </button>
      )}
      <p>these are the settings</p>
    </Sheet>
  );
}
