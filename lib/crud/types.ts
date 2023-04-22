import { ObjectId } from "mongodb";

export type SightingType = {
  _id?: ObjectId;
  name: string;
  location: Location;
  description: string;
  userId: ObjectId;
  imageURL: string;
  createdAt: string;
  updatedAt: string;
};

export type Location = {
  lat: number;
  lng: number;
};
