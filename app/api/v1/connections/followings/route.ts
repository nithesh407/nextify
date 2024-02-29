import { NextResponse, NextRequest } from "next/server";
import { ConnectDatabase } from "@/lib";
import { FollowingModel } from "@/server/models";


export async function POST(req: NextRequest) {
    try {
        await ConnectDatabase()
        const data = await req.json();
        if (!data) {
            return NextResponse.json({
                status: "fail",
                message: "No Data Found",
            }, { status: 404 })
        }
        FollowingModel.create(data)
        return NextResponse.json({
            status: "success",
            message: "Following Added",
        }, { status: 201 })
    } catch (err) {
        return NextResponse.json({
            status: "fail",
            message: err
        }, { status: 500 })
    }

}
