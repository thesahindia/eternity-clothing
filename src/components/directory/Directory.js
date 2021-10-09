import React, { useState } from "react";
import DirectoryItem from "./DirectoryItem";

const Directory = () => {
  const [sections, setSections] = useState([
    { id: 1, title: "Caps", img: "https://bit.ly/3AJQPtL", path: "/caps" },
    {
      id: 2,
      title: "Jackets",
      img: "https://i.ibb.co/px2tCc3/jackets.png",
      path: "/jackets",
    },
    { id: 3, title: "Shirts", img: "https://bit.ly/3zPqWHB", path: "/shirts" },
    {
      id: 4,
      title: "Shoes",
      img: "https://bit.ly/3uoDW5P",
      size: "large",
      path: "/shoes",
    },
    {
      id: 5,
      title: "Jeans",
      img: "https://bit.ly/3zNTjGh",
      size: "large",
      path: "/jeans",
    },
  ]);

  const renderItems = sections.map((section) => {
    return (
      <DirectoryItem
        key={section.id}
        title={section.title}
        img={section.img}
        size={section.size}
        path={section.path}
      />
    );
  });

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "wrap",
        width: "100%",
      }}
    >
      {renderItems}
    </div>
  );
};

export default Directory;
