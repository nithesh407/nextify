import { ConnectDatabase } from "@/lib";
import { UserModel } from "@/server/models";
import { NextResponse } from "next/server";
export async function GET() {
    try {
        await ConnectDatabase()
        const users = await UserModel.find({})
        return NextResponse.json({
            status: "success",
            data: users
        }, { status: 200 })
    } catch (err) {
        return NextResponse.json({
            status: "fail",
            message: { err }
        }, { status: 500 })
    }
}   