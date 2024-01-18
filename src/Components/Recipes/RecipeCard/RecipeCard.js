import Image from "next/image";
import Link from "next/link";

function RecipeCard({ recipe }) {
  // Format the date
  const updatedAtString = recipe.createdAt;
  const updatedAt = new Date(updatedAtString);

  // // Check if updatedAt is a valid Date object
  // if (isNaN(updatedAt.getTime())) {
  //   return <div>Error: Invalid date format</div>;
  // }

  // Options for formatting the date
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = updatedAt.toLocaleDateString("en-US", options);

  return (
    <div className="shadow rounded-lg pb-4">
      <Image
        src={recipe.photourl}
        alt=""
        width={400}
        height={400}
        priority
        className="w-[600px] h-[300px] rounded object-cover"
      />
      <div className="px-3">
        <Link href="/667">
          <h1 className="text-2xl font-medium font-serif text-gray-700 pt-3">
            {recipe.title}
          </h1>
        </Link>
        <p className="text-sm pt-2">{formattedDate}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
