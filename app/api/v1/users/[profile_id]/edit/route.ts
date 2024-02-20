import { ConnectDatabase } from "@/lib";
import { UserModel } from "@/server/models";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await ConnectDatabase();
        const data = await req.json()
        console.log(data)
        const user = await UserModel.create(data)
        return NextResponse.json({
            status: 'success',
            message: 'User details saved successfully',
            data: user
        }, { status: 201 });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({
            status: 'error',
            message: 'Unable to process user details'
        }, { status: 500 });
    }
}
