import React from "react";
import ItemList from "./item-list";

export default function page() {
  return (
    <main className="bg-slate-950">
      <div>
        <h2 className="text-3xl font-bold m-2">Shopping List</h2>
        <ul>
            <ItemList />
        </ul>
      </div>
    </main>
  );
}
