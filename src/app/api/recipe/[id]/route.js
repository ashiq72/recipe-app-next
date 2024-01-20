import connectMongoDB from "@/libs/mongodb";
import Recipe from "@/models/recipe";
import { NextResponse } from "next/server";

// Get Api for recipe data by id
export async function GET({ params }) {
  const { id } = params;
  await connectMongoDB();
  const recipe = await Recipe.findOne({ _id: id });
  console.log(id, recipe);
  return NextResponse.json({ recipe }, { status: 200 });
}

// export async function DELETE({ params }) {
//   const { id } = params;
//   console.log(id);
//   await connectMongoDB();

//   const recipe = await Recipe.deleteOne({ _id: id });
//   return NextResponse.json({ recipe }, { status: 200 });
// }
