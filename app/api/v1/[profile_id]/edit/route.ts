import { ConnectDatabase } from "@/lib";
import { UserModel } from "@/server/models";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await ConnectDatabase();
        const inputData =await req.json();
        await UserModel.create(inputData);
        return NextResponse.json({
            status: 'success',
            message: 'User details saved successfully',
            data: inputData
        }, { status: 201 }); 
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({
            status: 'error',
            message: 'Unable to process user details'
        }, { status: 500 });
    }
}
