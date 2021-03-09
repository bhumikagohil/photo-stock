import React from "react";
import { Container, Image } from "./CardElements";

const Card = ({ item, index }) => {
  return (
    <Container key={index}>
      <Image src={item.download_url} alt="image" />
    </Container>
  );
};

export default Card;
