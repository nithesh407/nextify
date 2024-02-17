import { NextResponse, NextRequest } from "next/server";
import { S3Client, PutObjectCommand, S3ClientConfig } from "@aws-sdk/client-s3"

import { ConnectDatabase } from "@/lib";
import { S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_REGION, S3_BUCKET_NAME } from "@/server/config";

const s3ClientConfig: S3ClientConfig = {
    region: S3_REGION,
    credentials: {
        accessKeyId: S3_ACCESS_KEY_ID as string,
        secretAccessKey: S3_SECRET_ACCESS_KEY as string,
    }
};
const s3Client = new S3Client(s3ClientConfig);

function isFile(value: FormDataEntryValue): value is File {
    return value instanceof File
}

async function uploadFileToS3(file: Buffer, fileName: string) {
    const fileBuffer = file

    const params = {
        Bucket: S3_BUCKET_NAME,
        Key: `${fileName}-${Date.now()}`,
        Body: fileBuffer,
        ContentType: "image/jpg"
    }

    const command = new PutObjectCommand(params);
    await s3Client.send(command);
    return fileName
}

export async function POST(req: NextRequest) {
    try {
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
            const fileName = await uploadFileToS3(buffer, file.name)
            return NextResponse.json({
                status: "success",
                message: "file uploaded",
                file: fileName
            }, { status: 201 })
        }
    } catch (err) {
        return NextResponse.json({
            status: "fail",
            message: err + "error uploading file"
        }, { status: 400 })
    }
}