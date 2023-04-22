//a component to display a sighting - props = image, description, location, date, user

import React from "react";
import Image from "next/image";
import { Location } from "@/lib/crud/types";

type sightingProps = {
  image: string;
  description: string;
  location: Location;
  date: string;
  user: string;
};

function Sighting({ image, description, location, date, user }: sightingProps) {
  return (
    <div>
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img src={image} alt="sighting image" width={"100%"} loading="lazy" />
      <p>{description}</p>
      <p>{location.lat}</p>
      <p>{location.lng}</p>
      <p>{date}</p>
      <p>{user}</p>
    </div>
  );
}

export default Sighting;
