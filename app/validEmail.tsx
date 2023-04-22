"use client";

import Sheet from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";

export default function ValidEmail({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  //test users email to ensure the domain is @york.ac.uk
  const email = session?.user?.email;

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
          <button
            style={{ marginRight: 10 }}
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            Sign in
          </button>
        </>
      )}
    </Sheet>
  );
}
