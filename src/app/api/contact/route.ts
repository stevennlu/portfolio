import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const client = await clientPromise;
    const db = client.db("portfolio_db");
    const collection = db.collection("contact_forms");

    await collection.insertOne({
      name: body.name,
      email: body.email,
      message: body.message,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error inserting contact form:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
