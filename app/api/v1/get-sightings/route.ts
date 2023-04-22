// a handler to return all sightings from the database

import { getAllSightings, getSomeSightings } from "@/lib/crud/sightings";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("page");
  const result = await getSomeSightings(parseInt(id ?? "0"));
  if (!result) {
    return NextResponse.json({ error: "No sightings found" }, { status: 404 });
  }
  return NextResponse.json(result);
}
