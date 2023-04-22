"use client";

import styled from "styled-components";
import {
  FaCamera,
  FaUser,
  FaImage,
  FaBars,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { AdapterUser } from "next-auth/adapters";
import { GoogleProfile } from "next-auth/providers/google";

const Container = styled.nav`
  background-color: #0b3019;
  width: 100vw;
  height: 75px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1px;
  grid-row-gap: 0px;
`;

const IconHolder = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export default function Navbar() {
  const { data: session } = useSession();
  const [image, setImage] = useState<string>();
  //test users email to ensure the domain is @york.ac.uk
  useEffect(() => {
    if (session?.user?.email) {
      const user = session?.user as GoogleProfile;
      setImage(user.picture);
    }
  }, [session]);
  return (
    <Container>
      <IconHolder href={"/profile"}>
        {image ? (
          <ProfileImage src={image} height={30} />
        ) : (
          <FaUser size={30} color="white" />
        )}
      </IconHolder>
      <IconHolder href={"/browse"}>
        <FaImage size={30} color="white" />
      </IconHolder>
      <IconHolder href={"/upload"}>
        <FaCamera size={30} color="white" />
      </IconHolder>
      <IconHolder href={"/locate"}>
        <FaMapMarkerAlt size={30} color="white" />
      </IconHolder>
      <IconHolder href={"/settings"}>
        <FaBars size={30} color="white" />
      </IconHolder>
    </Container>
  );
}
