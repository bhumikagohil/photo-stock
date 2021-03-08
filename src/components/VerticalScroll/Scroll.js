import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./Card";

const ImageScroll = ({ items, hasMore }) => {
  return (
    <InfiniteScroll
      dataLength={items.length}
      // next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {items.map((item) => (
        <>
          <Card item={item} key={item.id} />
        </>
      ))}
    </InfiniteScroll>
  );
};

export default ImageScroll;
