import React, { useState } from "react";
import DirectoryItem from "./DirectoryItem";

const Directory = () => {
  const [sections, setSections] = useState([
    {
      id: 1,
      title: "Casual T-Shirts",
      img: "https://bit.ly/3CsINGy",
      path: "/t-shirts",

    },
    {
      id: 2,
      title: "Branded Jackets",
      img: "https://bit.ly/3bjFB4a",
      path: "/jackets",
    },
    {
      id: 3,
      title: "Sporty Shoes",
      img: "https://bit.ly/31dAfWm",
      path: "/shoes",
    },
    {
      id: 4,
      title: "Trendy Hoodies",
      img: "https://bit.ly/3En87y4",
      size: "large",
      path: "/hoodies",
    },
    {
      id: 5,
      title: "Premium Jeans",
      img: "https://bit.ly/3Bvbdye",
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
    <div style={{ padding: "30px 45px 0px 45px" }}>
      <div
        style={{ textAlign: "center", fontSize: "22px", marginBottom: "30px" }}
      >
        Hand-picked style with you in mind
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "wrap",
          width: "100%",
        }}
      >
        {renderItems}
      </div>
    </div>
  );
};

export default Directory;
