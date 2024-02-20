import { ConnectDatabase } from "@/lib";
import { UserModel } from "@/server/models";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await ConnectDatabase();
        const users = await UserModel.find({})
        if (!users) {
            return NextResponse.json({
                status: "success",
                TotalUsers: "No Users Found",
                users
            }, { status: 404 })
        }
        return NextResponse.json({
            status: "success",
            TotalUsers: users.length,
            users
        }, { status: 200 })
    } catch (err) {
        return NextResponse.json({
            status: "fail",
            message: err
        }, { status: 500 })
    }

}

