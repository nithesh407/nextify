import { UserModel } from "@/server/models";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const id = await req.json()
        // console.log(user_id)
        console.log(id)
        const userDetails = await UserModel.findById(id);
        if (!userDetails) {
            return NextResponse.json({
                status: 'fail',
                message: 'no user found!'
            }, { status: 404 })
        }
        return NextResponse.json({
            status: 'success',
            userDetails
        }, { status: 200 })
    } catch (err) {
        return NextResponse.json({
            status: 'fail',
            message: 'unable to get user details'
        }, { status: 500 })
    }
}