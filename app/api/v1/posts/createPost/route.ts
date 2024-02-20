import { NextResponse, NextRequest } from "next/server";
import { ConnectDatabase } from "@/lib";
import { PostModel } from "@/server/models";


export async function POST(req: NextRequest) {
    try {
        await ConnectDatabase()
        const formData = await req.formData()
        const postDescription = formData.get('postDescription')
        const imageUrl = formData.get('imageUrl')
        const post = await PostModel.create({
            imageUrl,
            postDescription
        })
        return NextResponse.json({
            status: "success",
            message: "file uploaded",
            file: imageUrl,
            description: postDescription,
            post: post
        }, { status: 201 })
    } catch (err) {
        return NextResponse.json({
            status: "fail",
            message: err + "error uploading file"
        }, { status: 400 })
    }

}
