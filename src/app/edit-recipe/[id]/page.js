import EditRecipe from "./EditRecipe";
const getRecipeById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/recipe?id=${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topic: ", error);
  }
};

export default async function EditARecipe({ params }) {
  const { id } = params;
  const recipe = await getRecipeById(id);
  //   console.log(id, recipe);
  return (
    <div>
      <EditRecipe />
    </div>
  );
}
