import connectMongoDB from "@/libs/mongodb";
import Recipe from "@/models/recipe";
import { NextResponse } from "next/server";

// Create Recipe API
export async function POST(request) {
  const { title, description, photourl } = await request.json();
  console.log(title, description, photourl);
  await connectMongoDB();
  await Recipe.create({ title, description, photourl });
  return NextResponse.json({ message: "Recipe Added" }, { status: 201 });
}

// Get Recipe API
export async function GET() {
  await connectMongoDB();
  const recipes = await Recipe.find().sort({ createdAt: -1 });

  return NextResponse.json({ recipes });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Recipe.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}

export async function GET(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  const recipe = await Recipe.findOne({ _id: id });
  console.log(id, recipe);
  return NextResponse.json({ recipe }, { status: 200 });
}
