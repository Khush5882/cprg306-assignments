"use client";

import { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = items.slice().sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const renderSortButton = (label, value) => (
    <button
      key={value}
      onClick={() => setSortBy(value)}
      className={`p-1 m-2 w-28 square-lg ${sortBy === value ? 'bg-orange-500' : 'bg-orange-700'}`}
    >
      {label}
    </button>
  );

  return (
    <div>
      <div className="p-2 m-2 text-l capitalize text-stone-50">
        Sort By:
        {renderSortButton('Name', 'name')}
        {renderSortButton('Category', 'category')}
      </div>

      <ul className="text-xl capitalize text-stone-50">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} onSelect={() => onItemSelect(item)} />
        ))}
      </ul>
    </div>
  );
}