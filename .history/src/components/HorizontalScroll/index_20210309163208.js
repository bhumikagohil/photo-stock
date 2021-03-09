import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import InfiniteScroll from "react-infinite-scroll-component";

import Card from "./Card";

const Scroll = styled(InfiniteScroll)`
  display: flex;
  flex-direction: row;
  height: 100px;
`;

const ImageScroll = () => {
  const [value, setValue] = useState({
    items: [],
    hasMore: true,
  });
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios("https://picsum.photos/v2/list");
      setValue({
        items: data,
      });
    };
    fetchData();
  }, [setValue]);
  return (
    <Scroll
      dataLength={value.items.length}
      // next={fetchMoreData}
      hasMore={value.hasMore}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay!</b>
        </p>
      }
    >
      {value.items.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </Scroll>
  );
};

export default ImageScroll;
