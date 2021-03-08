import React, { useState, useEffect } from "react";
import {
  Container,
  Image,
} from "./CardElements";

const Card = ({ item, index }) => {
  const [saved, SetSaved] = useState(false)
  return (
    <Container key={index}>
        <Image src={item.download_url} alt="image" />
    </Container>
  );
};

export default Card;
