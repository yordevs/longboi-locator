"use client";

import { SightingType } from "@/lib/crud/types";
import styled from "styled-components";
import Sheet from "../sheet";
import Sighting from "./sighting";
import getBaseURL from "@/lib/utils/baseurl";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  overflow-y: scroll;
`;

async function getSightings(page: string) {
  const res = await fetch(`${getBaseURL()}/api/v1/get-sightings?page=${page}`);
  const data = await res.json();
  return data;
}

export default async function Browse() {
  //fetch sightings from server
  const sightings = await getSightings("0");
  if (sightings.error) return <div>error: {sightings.error}</div>;
  if (!sightings) return <div>loading...</div>;
  if (sightings.length === 0) return <div>no sightings</div>;

  return (
    <Sheet title="Browse Images">
      <Container>
        {sightings.map((sighting: SightingType) => {
          return (
            <Sighting
              key={sighting._id?.toString()}
              date={sighting.createdAt}
              image={sighting.imageURL}
              description={sighting.description}
              location={{
                lat: sighting.location.lat,
                lng: sighting.location.lng,
              }}
              user={sighting.name}
            />
          );
        })}
      </Container>
    </Sheet>
  );
}
