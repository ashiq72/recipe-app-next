"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SimilerProductCard from "./SimilerProductCard";

export default function SimilerProduct() {
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
    <div className="flex flex-col gap-6 my-6">
      {data.map((item) => (
        <SimilerProductCard key={item._id} item={item} />
      ))}
    </div>
  );
}
