import { NextRequest, NextResponse } from "next/server";

export default async function proxy(request: NextRequest) {
    const apiKeyId = request.nextUrl.searchParams.get("apiKeyId") ?? "1234";

    try {
        console.log('trying...');
        
        const res = await fetch(`${process.env.BACKEND_URL}/apiKeys/${apiKeyId}/`);

        if (!res.ok) {
            throw new Error(`Backend responded with ${res.status}`);
        }

        const data = await res.json();
        const token = data?.key;

        if (!token) {
            throw new Error("No token returned from backend");
        }

        const response = NextResponse.next();
        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
        });

        return response;
    } catch (error) {
        console.error("Middleware auth failed:", error);
        return NextResponse.next();
    }
}

