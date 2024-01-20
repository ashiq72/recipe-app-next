"use client";

import { Button } from "@material-tailwind/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";
import toast from "react-hot-toast";

function EditRecipe() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const router = useRouter();

  //  Post API for Recipe add
  const onSubmit = async (data) => {
    try {
      // Make a POST request to ImgBB API
      let photo = [];
      const formData = new FormData();
      const image = data.photo;
      formData.append("image", image[0]);
      const response = await axios.post(
        "https://api.imgbb.com/1/upload?key=cf0d99684ecdf3c7dd5fdfda9db29f4f",
        formData
      );
      photo.push(response);
      const photourl = photo[0].data.data.url;
      const product = {
        title: data.title,
        description: data.description,
        photourl: photourl,
      };

      axios
        .post("http://localhost:3000/api/recipe", product)
        .then(() => {
          router.refresh();
          toast.success("Recipe added!");
          reset({ ...data });
          router.push("/");
        })
        .catch((error) => {
          toast.error(error.message);
        });
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  return (
    <div className="py-8 w-full max-w-3xl mx-auto px-6 2xl:px-0">
      <div>
        <h1 className="text-4xl font-bold font-serif text-gray-800">
          Edit A Recipe
        </h1>
      </div>
      <div className="py-6">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          {/* Recipe Title  */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Recipe Title
            </label>
            <input
              {...register("title", {
                required: "Title is required",
              })}
              type="text"
              name="title"
              placeholder="Recipe title"
              className="border-2  outline-none rounded-r-md px-2 py-1 text-gray-700 rounded"
            />
            {errors.title?.type === "required" && (
              <p
                role="alert"
                className="text-red-700 flex items-center gap-[2px]"
              >
                <MdErrorOutline /> Title is required
              </p>
            )}
          </div>
          {/* Recipe Description  */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="desc"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Recipe Description
            </label>
            <textarea
              rows="4"
              {...register("description", {
                required: "Description is required",
              })}
              className="border-2  outline-none rounded-r-md px-2 py-1 text-gray-700 rounded"
              placeholder="Write your description here..."
            ></textarea>
            {errors.description?.type === "required" && (
              <p
                role="alert"
                className="text-red-700 flex items-center gap-[2px]"
              >
                <MdErrorOutline />
                Description is required
              </p>
            )}
          </div>

          {/* Recipe Photo  */}
          <div>
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Recipe photo
            </label>
            <div className="mt-0 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 outline-none "
                  >
                    <input
                      type="file"
                      {...register("photo", {
                        required: "Photo is required",
                      })}
                      className="bg-gray-800 text-white rounded"
                    />
                  </label>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
            {errors.photo?.type === "required" && (
              <p
                role="alert"
                className="text-red-700 flex items-center gap-[2px] pt-2"
              >
                <MdErrorOutline />
                Photo is required
              </p>
            )}
          </div>

          <Button type="submit" fullWidth className="">
            {isSubmitting ? "Loading..." : "Submit recipe"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default EditRecipe;
