import connectMongoDB from "@/libs/mongodb";
import Recipe from "@/models/recipe";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description, photourl } = await request.json();
  console.log(title, description, photourl);
  await connectMongoDB();
  await Recipe.create({ title, description, photourl });
  return NextResponse.json({ message: "Recipe Added" }, { status: 201 });
}
