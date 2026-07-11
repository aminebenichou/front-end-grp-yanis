import axios from "axios";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = await axios.post("http://localhost:3000/notes", {
      title: "hello",
      description: "hello two",
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