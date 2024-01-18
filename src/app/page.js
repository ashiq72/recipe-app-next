"use client";
import Recipes from "@/Components/Recipes/Recipes";
import ingredients from "../../ingredients.json";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="py-8 w-full max-w-7xl mx-auto px-6 2xl:px-0">
      <div className="flex justify-between ">
        <h1 className="text-4xl font-bold text-center font-serif text-gray-800">
          Recipe app
        </h1>

        <Link href="/create-recipe">
          <Button variant="outlined">Create recipe</Button>
        </Link>
      </div>
      <div className="py-6">
        <Recipes />
      </div>
    </main>
  );
}
