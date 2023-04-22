"use client";

import styled from "styled-components";
import Navbar from "./navbar";
import { NextAuthProvider } from "./provider";
import Splash from "./splash";
import { Suspense } from "react";

const Body = styled.body`
  margin: 0px;
`;

const Container = styled.div`
  display: flex;
  height: calc(100vh - 75px);
  width: 100vw;
  overflow: hidden;
  align-items: end;
`;

const BackgroundMap = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: gray;
  z-index: -10;
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <Body>
          <Suspense fallback={<Splash />}>
            <Container>
              {children}
              <BackgroundMap />
            </Container>
            <Navbar />
          </Suspense>
        </Body>
      </NextAuthProvider>
    </html>
  );
}
