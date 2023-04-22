"use client";

import Sheet from "../sheet";
import { signIn, signOut } from "next-auth/react";

export default function Home() {
  return (
    <Sheet title="Settings">
      <button style={{ marginRight: 10 }} onClick={() => signIn()}>
        Sign in
      </button>
      <button style={{ marginRight: 10 }} onClick={() => signOut()}>
        Sign Out
      </button>
      <p>these are the settings</p>
    </Sheet>
  );
}
