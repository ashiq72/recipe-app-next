import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { PiWhatsappLogoFill } from "react-icons/pi";
import SimilerProduct from "@/Components/SimilerProduct/SimilerProduct";

const getRecipeById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/recipe/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Recipe");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading recipe: ", error);
  }
};
async function ReciopeDetails({ params }) {
  const { id } = params;
  const topic = await getRecipeById(id);
  //   Distracture data
  const { _id, title, description, photourl, createdAt } = topic?.recipe;

  // Format the date
  const updatedAt = new Date(createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = updatedAt.toLocaleDateString("en-US", options);

  return (
    <div className="py-8 w-full max-w-7xl mx-auto px-6 2xl:px-0 lg:flex gap-6">
      <div className="lg:w-9/12">
        <div className="flex flex-col gap-2 border-b border-orange-100 pb-4 ">
          <h1 className="text-4xl font-sans capitalize">{title}</h1>
          <p>{formattedDate}</p>
          <p className="font-serif text-gray-600 ">
            This is an example of affiliate disclosure. You can add your own
            text here or remove it completely #sponsoredpost.
          </p>
        </div>
        <div className="py-6">
          <Image
            src={photourl}
            alt=""
            width={1400}
            height={1400}
            priority
            className="w-[1300px] h-auto rounded-sm object-cover"
          />
        </div>
        <p>{description}</p>
      </div>
      <div className="lg:w-3/12 lg:py-0 py-16">
        <div className="bg-orange-50 rounded-md">
          <div className="flex flex-col items-center justify-center py-8 gap-4 px-4">
            <Image
              src="https://i.postimg.cc/pV63G8c4/242371060-2897199693830841-7631817434838385277-n.jpg"
              alt=""
              width={300}
              height={300}
              className="rounded-full w-[150px]"
            />
            <h1 className="text-xl font-bold font-sans">Ashiq Ahmed</h1>
            <p className="text-center">
              Hi, I’m Sarah and this is some dummy copy. You’re not really
              supposed to read this dummy copy, it is just a place holder for
              people who need some type to visualize what the actual copy might
              look like if it were real content.
            </p>
          </div>
        </div>
        <div className="my-10">
          <h1 className="text-xl font-semibold text-orange-500 font-serif">
            FOLLOW ME
          </h1>
          <p className="text-base">
            Customize Social Icons as you want (400+ icons available, change
            color).{" "}
            <span className="text-red-300 font-semibold">
              View more examples
            </span>
          </p>
          <span className=" text-xl flex gap-2 py-4 ">
            <span className="bg-blue-800 p-2 rounded-full text-white cursor-pointer">
              <FaFacebook />
            </span>
            <span className="bg-light-blue-400 p-2 rounded-full text-white cursor-pointer">
              <AiFillTwitterCircle />
            </span>
            <span className="bg-amber-800 p-2 rounded-full text-white cursor-pointer">
              <RiInstagramFill />
            </span>
            <span className="bg-red-900 p-2 rounded-full text-white cursor-pointer">
              <FaPinterest />
            </span>
            <span className="bg-green-600 p-2 rounded-full text-white cursor-pointer">
              <PiWhatsappLogoFill />
            </span>
            <span className="bg-red-700 p-2 rounded-full text-white cursor-pointer">
              <IoLogoYoutube />
            </span>
          </span>
        </div>
        <div className="my-10">
          <h1 className="text-xl font-semibold  font-serif">NEW RECIPES</h1>
          <SimilerProduct />
        </div>
      </div>
    </div>
  );
}

export default ReciopeDetails;
