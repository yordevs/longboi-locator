//a handler that accepts a post request that contains a file, name, location, and description

import { createSighting } from "@/lib/crud/sightings";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
//@ts-ignore
import imgbbUploader from "imgbb-uploader";
import { AdapterUser } from "next-auth/adapters";

//and saves it to the database
export async function POST(request: Request) {
  const { file, location, description } = await request.json();
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  const user = session.user as AdapterUser;

  //upload image to imgbb and get the url
  const options = {
    apiKey: process.env.IMGBB_API_KEY, // MANDATORY
    base64string: file, // OPTIONAL: pass a base64 string to imgBB (max 32Mb)
  };
  let imageURL = "";
  const res = imgbbUploader(options);
  await res
    .then((response: any) => {
      imageURL = response.url;
    })
    .catch((error: any) => console.error(error));

  const image = await createSighting({
    imageURL,
    name: user?.name ?? "",
    location,
    description,
    userId: new ObjectId(user?.id),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  return NextResponse.json(image);
}
