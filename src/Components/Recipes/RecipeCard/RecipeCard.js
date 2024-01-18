import Image from "next/image";
import Link from "next/link";

function RecipeCard() {
  return (
    <div className="shadow rounded-lg pb-4">
      <Image
        src="https://i.postimg.cc/RVbsjr2h/flour.jpg"
        alt=""
        width={400}
        height={400}
        className="w-auto h-auto rounded"
      />
      <div className="px-3">
        <Link href="/667">
          <h1 className="text-2xl font-medium font-serif text-gray-700 pt-3">
            Plain Flour Recipe
          </h1>
        </Link>
        <p className="text-sm pt-2">May 28, 2023</p>
      </div>
    </div>
  );
}

export default RecipeCard;
