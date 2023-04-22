"use client";

import { useSession } from "next-auth/react";
import ValidEmail from "../validEmail";

export default async function Home() {
  const { data: session } = useSession();
  //test users email to ensure the domain is @york.ac.uk
  const email = session?.user?.email;
  console.log(email);
  return (
    <ValidEmail title="Upload" email={email}>
      <p>this is a way to upload</p>
    </ValidEmail>
  );
}
