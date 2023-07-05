"use client";

import { AbsoluteCenter, Container, Text } from "@chakra-ui/react";
import { TypeAnimation } from 'react-type-animation'

const Home = () => (
  <>
    <Container maxW="full">
      <AbsoluteCenter w="100%">
        <Text fontSize={{ base: "5xl", md: "7xl" }} textAlign="center">
          <TypeAnimation
            sequence={["Find local rental ", 2000, "Manage online ", 2000 ]}
            repeat={Infinity}
            cursor={false}
          />{' '} 
          <span style={{ color: "white", background: "#276749" }}>homes</span>{". "}
        </Text>
      </AbsoluteCenter>
    </Container>
  </>
);

export default Home;
