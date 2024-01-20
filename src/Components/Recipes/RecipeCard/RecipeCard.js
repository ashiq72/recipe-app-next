import Image from "next/image";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";

function RecipeCard({ recipe }) {
  // Format the date
  const updatedAtString = recipe.createdAt;
  const updatedAt = new Date(updatedAtString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = updatedAt.toLocaleDateString("en-US", options);

  return (
    <div className="shadow rounded-lg ">
      <Image
        src={recipe.photourl}
        alt=""
        width={400}
        height={400}
        priority
        className="w-[600px] h-[300px] rounded object-cover"
      />
      <div className="px-3">
        <Link href={`/recipe-card-details/${recipe._id}`}>
          <h1 className="text-2xl font-medium font-serif text-gray-700 pt-3">
            {recipe.title}
          </h1>
        </Link>
        <p className="text-sm pt-2">{formattedDate}</p>
      </div>
      <div className="flex justify-center mt-6 w-full">
        <Link
          href={`edit-recipe/${recipe._id}`}
          className="border px-4 rounded py-1 w-full hover:bg-black hover:text-white duration-300"
        >
          Edit Recipe
        </Link>
        <RemoveBtn id={recipe._id} />
      </div>
    </div>
  );
}

export default RecipeCard;
