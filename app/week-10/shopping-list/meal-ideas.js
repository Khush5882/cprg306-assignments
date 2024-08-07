"use client";

import { useState, useEffect } from "react";

// API Fetching Function
async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

const MealIdeas = ({ ingredient }) => {
  // State Variables
  const [meals, setMeals] = useState([]);

  // Load Function
  const loadMealIdeas = async () => {
    const mealList = await fetchMealIdeas(ingredient);
    setMeals(mealList);
  };

  // useEffect Hook
  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  // Render Component
  return (
    <div>
      <h2 className="text-stone-50 text-xl font-bold">Meal Ideas</h2>
      {meals.length > 0 ? (
        <ul>
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="p-2 m-1 bg-lightgreen max-w-sm hover:bg-red-800 cursor-pointer"
            >
              <p>{meal.strMeal}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>{`No meal ideas found for ${ingredient}`}</p>
      )}
    </div>
  );
};

export default MealIdeas;