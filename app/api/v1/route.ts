import { NextResponse } from "next/server";

export async function GET() {
    NextResponse.json({
        status: "success",
        message: "Hello from api (V1)"
    }, { status: 200 })
}