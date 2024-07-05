
 
"use client";

import Item from "./item";
import List from "./items.json";
import { useState } from "react";

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");
  const [color, setColor] = useState("name");
  const data = [...List].sort((a, b) => {
    if (sortBy === "category") {
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
  const categoryClick = () => {
    setSortBy("category");
    setColor("category");
  };
  return (
    <div className="flex flex-col gap-2 items-start p-2 bg-slate-950 text-white min-h-screen">
      <div className="flex flex-row gap-4 items-center mb-2">
        <p className="p-2">Sort by:</p>
        <button
          className={`p-2 ${
            color === "name" ? "bg-orange-500" : "bg-orange-600"
          }`}
          onClick={nameClick}
        >
          Name
        </button>
        <button
          className={`p-2 rounded ${
            color === "category" ? "bg-orange-500" : "bg-orange-600"
          }`}
          onClick={categoryClick}
        >
          Category
        </button>
      </div>
      <ul className="space-y-2">
      {data.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
 </div>
  );
};

export default ItemList;
