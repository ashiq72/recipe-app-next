import RecipeCard from "./RecipeCard/RecipeCard";

function Recipes() {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1  gap-8 justify-items-center px-6 2xl:px-0">
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </div>
  );
}

export default Recipes;
