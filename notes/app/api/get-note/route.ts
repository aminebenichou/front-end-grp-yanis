import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
    const url = process.env.BACKEND_URL ?? "localhost"
    console.log(url);
    
    try {
        const response = await axios.get(`${url}/notes`)
        return NextResponse.json(response.data)
    } catch (error) {
        console.log(error);
        
    }
}