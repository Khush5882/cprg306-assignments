import { Catamaran } from "next/font/google";
import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <div className="flex flex-col px-15 items-start pb-4">
      <h1 className=" capitalize text-2xl ">{name}</h1>
      <p className="items-center text-xl ">
        Buy {quantity} in {category}
      </p>
    </div>
  );
};

export default Item;