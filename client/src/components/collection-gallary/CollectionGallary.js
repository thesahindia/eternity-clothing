import React from "react";
import DirectoryItem from "../directory/DirectoryItem";
import "./collection-gallary.scss";

const sections = [
  {
    id: 1,
    title: "Men's Activewear",
    img: "https://image.freepik.com/free-photo/stylish-guy-gym-sits-resting-treadmill-healthy-lifestyle_78826-3416.jpg",
    size: "full",
    path: "/active-wear",
  },
  {
    id: 2,
    title: "Winter Collection",
    img: "https://image.freepik.com/free-photo/couple-winter-cloths-studio_1303-5887.jpg",
    size: "full",
    path: "/winter-collection",
  },
  {
    id: 3,
    title: "Summer Collection",
    img: "https://image.freepik.com/free-photo/young-attractive-smiling-happy-man-woman-sunglasses-sitting-sand-beach-taking-selfie-photo_285396-2305.jpg",
    size: "full",
    path: "/summer-collection",
  },
  {
    id: 4,
    title: "Top Deals To Grab Now",
    img: "https://image.freepik.com/free-photo/young-handsome-man-choosing-clothes-shop_1303-19720.jpg",
    size: "full",
    path: "/top-deals",
  },
];

export default function CollectionGallary() {
    const renderItems = sections.map(({id, ...otherProps}, indx)=> {
        return <div key={id} className={`item-${indx}`}><DirectoryItem {...otherProps}/></div>
    })
  return <div className="collection-gallary">
{renderItems}
  </div>;
}
