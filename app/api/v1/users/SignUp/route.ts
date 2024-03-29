import { ConnectDatabase } from "@/lib";
import { UserModel } from "@/server/models";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function POST(req: NextRequest) {
    try {
        await ConnectDatabase()
        const userDetails = await req.json()
        if (!userDetails) {
            return NextResponse.json({
                status: "fail",
                message: "Please! Provide User Details",
            }, { status: 404 })
        }

        const user = await UserModel.create(userDetails)
        return NextResponse.json({
            status: "success",
            message: "User Created Successfully",
            data: user
        }, { status: 201 })
    } catch (err) {
        return NextResponse.json({
            status: "fail",
            message: err
        }, { status: 500 })
    }

}