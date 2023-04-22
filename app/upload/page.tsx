"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import ValidEmail from "../validEmail";

const NewSightingForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export default async function Home() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(
    "/placeholder.jpg"
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (e.target.elements) {
      const { description, lat, lng, image } = e.target.elements;
      const reader = new FileReader();
      reader.readAsDataURL(image.files[0]);
      reader.onload = () => {
        //send file to server
        fetch("/api/v1/post-sighting", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            file: (reader.result as string).split(",")[1],
            location: {
              lat: parseFloat(lat.value),
              lng: parseFloat(lng.value),
            },
            description: description.value,
          }),
        });
      };
    }
  };

  const displayImage = (e: any) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setUploadedImage(URL.createObjectURL(file));
    }
  };

  return (
    <ValidEmail title="Upload">
      <p>this is a way to upload </p>
      <NewSightingForm onSubmit={handleSubmit}>
        <input type={"text"} placeholder={"Latitude"} id="lat" />
        <input type={"text"} placeholder={"Longitude"} id="lng" />
        <input type={"text"} placeholder={"Description"} id="description" />
        <Image
          src={uploadedImage ?? ""}
          alt="user uploaded image"
          width={75}
          height={64}
        />
        <input type="file" onInput={displayImage} id="image" />
        <input type="submit" value="Submit" />
      </NewSightingForm>
    </ValidEmail>
  );
}
