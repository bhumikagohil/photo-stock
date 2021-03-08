import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveImage, removeSavedImage } from "../../redux/saved/saved-actions";
import {
  ActiveButton,
  Bookmark,
  Body,
  Button,
  Container,
  Comment,
  Heart,
  Footer,
  Image,
} from "./CardElements";

const Card = ({ item, index }) => {
  const dispatch = useDispatch();

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (!saved) {
      dispatch(saveImage(item.id));
    } else {
      dispatch(removeSavedImage(item.id));
    }
    setSaved(!saved);
  };

  const MyButton = saved ? ActiveButton : Button;

  return (
    <Container key={index}>
      <Body>
        <Link to={`/image/${item.id}`}>
          <Image src={item.download_url} alt="image" />
        </Link>
      </Body>
      <Footer>
        <Heart />
        <Comment />
        <MyButton onClick={handleSave}>
          <h3>Save Image</h3> <Bookmark />
        </MyButton>
      </Footer>
    </Container>
  );
};

export default Card;
