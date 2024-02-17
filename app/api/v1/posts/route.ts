import { ConnectDatabase } from "@/lib";
import { PostModel } from "@/server/models";
import { NextResponse } from "next/server";
export async function GET() {
    try {
        await ConnectDatabase()
        const posts = await PostModel.find({})
        return NextResponse.json({
            status: "success",
            data: posts
        }, { status: 200 })
    } catch (err) {
        return NextResponse.json({
            status: "fail",
            message: { err }
        }, { status: 500 })
    }
}
