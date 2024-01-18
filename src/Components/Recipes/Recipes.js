"use client";
import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard/RecipeCard";

function Recipes() {
  const [data, setData] = useState([]);
  // Recipes data fatching
  useEffect(() => {
    async function fetchRecipes() {
      try {
        const res = await fetch("http://localhost:3000/api/recipe", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch recipes");
        }

        const fetchedData = await res.json();
        setData(fetchedData.recipes);
      } catch (error) {
        console.log("Error loading recipes: ", error);
      }
    }
    fetchRecipes();
  }, []);

  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1  gap-8 justify-items-center px-6 2xl:px-0">
      {data.map((item, i) => (
        <RecipeCard key={item._id} recipe={item} />
      ))}
    </div>
  );
}

export default Recipes;
