
"use client";
import { useState, useEffect } from 'react'; 
import NewItem from './new-item'; 
import ItemList from './item-list'; 
import MealIdeas from './meal-ideas'; 
import { getItems, addItem } from '../_services/shopping-list-service'; 


export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(null);
  const { user } = useAuth(); 

  // Async function to load items
  const loadItems = async () => {
    if (user && user.uid) {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    }
  };

  // Event handler for adding a new item
  const handleAddItem = async (newItem) => {
    if (user && user.uid) {
      const addedItem = await addItem(user.uid, newItem);
      setItems([...items, { ...newItem, id: addedItem.id }]);
    }
  };

  // Event handler for selecting an item
  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName
      .split(',')[0]
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
      .trim();
    setSelectedItemName(cleanedItemName);
  };

  // UseEffect to load items when the component mounts
  useEffect(() => {
    loadItems();
  }, [user]);

  return (
    <main className="bg-slate-900 flex">
      <div className="w-1/2 p-5">
        <h1 className="text-stone-50 font-semibold text-4xl mb-5">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}