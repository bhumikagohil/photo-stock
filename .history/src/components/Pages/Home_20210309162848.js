import React, { useState, useEffect } from "react";
import axios from "axios";
import HorizontalScroll from "../HorizontalScroll/index";
import VerticalScroll from "../VerticalScroll/Scroll";

const Home = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios("https://picsum.photos/v2/list");
      setItems(data);
    };
    fetchData();
  }, [setItems]);
  return (
    <>
      <HorizontalScroll />
      <VerticalScroll items={items} hasMore={hasMore} />
    </>
  );
};

export default Home;
