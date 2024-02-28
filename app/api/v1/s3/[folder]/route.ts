import { isFile } from "@/lib";
import { uploadFileToS3 } from "@/server/repository";
import { NextRequest, NextResponse } from "next/server";


export async function PATCH(req: NextRequest) {
    const segments = req.url.split('/')
    const folder = segments.pop()
    if (folder !== "posts" && folder !== "users") {
        return NextResponse.json({
            status: "fail",
            msg: "Provide the correct folder name"
        }, { status: 400 })
    }
    const formData = await req.formData()
    const file = formData.get('file')
    if (!file) {
        return NextResponse.json({
            status: "fail",
            message: "No File found"
        }, { status: 400 })
    }

    if (isFile(file)) {
        const buffer = Buffer.from(await file.arrayBuffer())
        const imageUrl = await uploadFileToS3(buffer, file.name, folder)

        return NextResponse.json({
            status: "success",
            imageUrl
        }, { status: 201 })

    }
}