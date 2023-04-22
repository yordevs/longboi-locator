"use client";

import Sheet from "./sheet";
import { signIn, signOut } from "next-auth/react";

export default function ValidEmail({
  title,
  children,
  email,
}: {
  title: string;
  children: React.ReactNode;
  email: string | null | undefined;
}) {
  return (
    <Sheet title={title}>
      {email && email.endsWith("@york.ac.uk") && children}
      {email && !email.endsWith("@york.ac.uk") && (
        <>
          <p>
            Please login using your university email address to upload images.
          </p>
          <p>you are currently logged in as {email}</p>{" "}
          <button style={{ marginRight: 10 }} onClick={() => signOut()}>
            Sign Out
          </button>
        </>
      )}
      {!email && (
        <>
          <p>
            Please login using your university email address to upload images.
          </p>
          <button style={{ marginRight: 10 }} onClick={() => signIn()}>
            Sign in
          </button>
        </>
      )}
    </Sheet>
  );
}
