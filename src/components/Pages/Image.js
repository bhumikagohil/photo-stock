import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ImageCard from "../ImageCard";

const Image = () => {
  const [Info, setInfo] = useState();

  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(`https://picsum.photos/id/${id}/info`);
      setInfo(data);
    };
    fetchData();
  }, [setInfo]);

  return <ImageCard Info={Info} />;
};

export default Image;
