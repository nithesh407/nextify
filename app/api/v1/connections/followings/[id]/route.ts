import { NextResponse, NextRequest } from "next/server";
import { ConnectDatabase } from "@/lib";
import { FollowingModel } from "@/server/models";

export async function GET(req: NextRequest) {
    try {
        await ConnectDatabase()
        const userId = req.nextUrl.pathname.split('/').pop()
        if (!userId || typeof userId !== 'string') {
            return NextResponse.json({
                status: "success",
            }, { status: 200 })
        }
        const data =
            await FollowingModel
                .findOne({ userId })
                .select('-__v')
                .populate('followingId', 'userName email _id imageUrl')
        return NextResponse.json({
            status: "success",
            data
        }, { status: 200 })
    } catch (err) {
        return NextResponse.json({
            status: "fail",
            message: { err }
        }, { status: 500 })
    }
}
