import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import VerticalScroll from "../VerticalScroll/Scroll";

const SavedImage = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const savedImages = useSelector((state) => state.saved.savedImages);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios("https://picsum.photos/v2/list");

      var items = savedImages.map((ID) => {
        return data.find((item) => {
          return item.id == ID;
        });
      });
      setItems(items);
    };
    fetchData();
  }, [savedImages]);
  return (
    <>
      {items && <VerticalScroll items={items} hasMore={hasMore} />}
    </>
  );
};

export default SavedImage;
