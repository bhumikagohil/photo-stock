import React, { useState } from "react";
import { Author,Body, Container, Image } from "./CardElements";

const Card = ({ Info }) => {
  return (
    <Container>
      {Info && (
        <>
          <Image src={Info.download_url} alt="image" />
          <Body>
            <Author>Author : {Info.author}</Author>
          </Body>
        </>
      )}
      {console.log(Info)}
    </Container>
  );
};

export default Card;
