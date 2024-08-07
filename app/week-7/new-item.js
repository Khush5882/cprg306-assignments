"use client";

import { useState } from "react";

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const id = Math.random().toString(36).substr(2, 9);

    const Item = {
      id,
      name,
      quantity,
      category,
    };

    onAddItem(Item);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
        <label style={{ marginRight: "10px", fontSize: "17px" }}>
          {" "}
          Item Name:{" "}
        </label>
        <input
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
          style={{ color: "black", borderRadius: "5px", height: "33px" }}
          required
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "10px",
          margin: "20px",
        }}
      >
        <label style={{ marginRight: "10px", fontSize: "17px" }}>
          {" "}
          Quantity:{" "}
        </label>
        <input
          type="number"
          min="1"
          max="99"
          value={quantity}
          onChange={({ target }) => setQuantity(parseInt(target.value))}
          style={{
            color: "black",
            borderRadius: "5px",
            paddingLeft: "5px",
            height: "33px",
          }}
          required
        />
      </div>

      <div>
        <label style={{ marginRight: "10px", fontSize: "17px" }}>
          {" "}
          Category:{" "}
        </label>
        <select
          value={category}
          onChange={({ target }) => setCategory(target.value)}
          style={{ color: "black", borderRadius: "5px", height: "33px" }}
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen-foods">Frozen Foods</option>
          <option value="canned-goods">Canned Goods</option>
          <option value="dry-goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full mt-4 py-2 px-4
        bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        +
      </button>
    </form>
  );
};

export default NewItem;