"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function RemoveBtn({ id }) {
  const router = useRouter();

  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      try {
        const res = await fetch(`http://localhost:3000/api/recipe?id=${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          toast("Recipe deleted successfully!");
        } else {
          toast("Error deleting recipe");
        }
      } catch (error) {
        console.error("Error deleting recipe:", error);
        toast("Error deleting recipe");
      }
    }
    router.refresh();
  };

  return (
    <button
      onClick={removeTopic}
      className="border px-4 py-1 rounded   w-full hover:bg-red-700 hover:text-white duration-300 flex items-center gap-1"
    >
      <HiOutlineTrash size={16} /> Delete Recipe
    </button>
  );
}
