import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await axios.get("http://localhost:3000/notes")
        return NextResponse.json(response.data)
    } catch (error) {
        console.log(error);
        
    }
}