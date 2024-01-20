import Image from "next/image";
import Link from "next/link";

function SimilerProductCard({ item }) {
  // Format the date
  const updatedAt = new Date(item.createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = updatedAt.toLocaleDateString("en-US", options);
  return (
    <div className="flex gap-2">
      <Link href={`/recipe-card-details/${item._id}`}>
        <Image
          src={item.photourl}
          alt=""
          width={100}
          height={100}
          priority
          className="w-[70px] h-[70px] rounded object-cover"
        />
      </Link>
      <div>
        <Link
          href={`/recipe-card-details/${item._id}`}
          className="font-medium capitalize text-lg"
        >
          {item.title}
        </Link>
        <p className="text-sm">{formattedDate}</p>
      </div>
    </div>
  );
}

export default SimilerProductCard;
