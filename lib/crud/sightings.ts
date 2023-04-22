import { ObjectId } from "mongodb";
import clientPromise from "../mongodb";
import { SightingType } from "./types";

// a create sighting function that takes a sighting object and uploads it to the database
export async function createSighting(sighting: SightingType) {
  const client = await clientPromise;
  const result = await client
    .db(process.env.MONGODB_DB)
    .collection("sightings")
    .insertOne(sighting);
  return result;
}

export async function updateSighting(id: string, imageIRL: string) {
  const client = await clientPromise;
  const result = await client
    .db(process.env.MONGODB_DB)
    .collection("sightings")
    .updateOne({ _id: new ObjectId(id) }, { $set: { imageURL: imageIRL } });
  return result;
}

// a get sighting function that takes a sighting id and returns the sighting object
export async function getSighting(id: string) {
  const client = await clientPromise;
  const result = await client
    .db(process.env.MONGODB_DB)
    .collection("sightings")
    .findOne({ _id: new ObjectId(id) });
  return result;
}

export async function getAllSightings() {
  const client = await clientPromise;
  const result = await client
    .db(process.env.MONGODB_DB)
    .collection("sightings")
    .find({})
    .toArray();
  return result;
}

export async function getSomeSightings(page: number) {
  const client = await clientPromise;
  const result = await client
    .db(process.env.MONGODB_DB)
    .collection("sightings")
    .find({})
    .limit(10)
    .skip(10 * page)
    .toArray();
  return result;
}
