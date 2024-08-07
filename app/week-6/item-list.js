"use client";

import Item from "./items";
import { useState, useEffect } from "react";

const ItemList = ({ List }) => {
  const [sortBy, setSortBy] = useState("name");
  const [color, setColor] = useState("name");
  const data = [...List].sort((a, b) => {
    if (sortBy === "catagory") {
      if (a.category < b.category) return -1;
    }
    if (sortBy === "name") {
      if (a.name < b.name) return -1;
    }
  });

  const nameClick = () => {
    setSortBy("name");
    setColor("name");
  };
  const catagoryClick = () => {
    setSortBy("catagory");
    setColor("catagory");
  };
  return (
    <div className="flex flex-col gap-2 items-start">
      <div className="flex flex-row gap-5 items-center">
        <p className="p-2">Sort by:</p>
        <button
          className={`p-2 ${
            color === "name" ? "bg-orange-500" : "bg-orange-700"
          }`}
          onClick={nameClick}
        >
          Name
        </button>
        <button
          className={`p-2 ${
            color === "catagory" ? "bg-orange-500" : "bg-orange-700"
          }`}
          onClick={catagoryClick}
        >
          Catagory
        </button>
      </div>
      {data.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default ItemList;