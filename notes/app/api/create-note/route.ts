import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const url = process.env.BACKEND_URL ?? "localhost"
  const body = await request.json()
  console.log(body);
  try {
    const response = await axios.post(`${url}/notes`, {
      title: body.title,
      description: body.description,
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to create note" },
      { status: 500 }
    );
  }
}