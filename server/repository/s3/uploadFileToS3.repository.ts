import { S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_REGION, S3_BUCKET_NAME } from "@/server/config";
import { PutObjectCommand, S3Client, S3ClientConfig } from "@aws-sdk/client-s3";

const s3ClientConfig: S3ClientConfig = {
    region: S3_REGION as string,
    credentials: {
        accessKeyId: S3_ACCESS_KEY_ID as string,
        secretAccessKey: S3_SECRET_ACCESS_KEY as string,
    }
};
const s3Client = new S3Client(s3ClientConfig);

async function uploadFileToS3(file: Buffer, fileName: string, folder: string) {
    const fileBuffer = file

    const params = {
        Bucket: S3_BUCKET_NAME,
        Key: `${folder}/${fileName}-${Date.now()}`,
        Body: fileBuffer,
        ContentType: "image/jpg"
    }

    const command = new PutObjectCommand(params);
    await s3Client.send(command);

    const url = `https://${S3_BUCKET_NAME}.s3.${S3_REGION}.amazonaws.com/${params.Key}`;
    return url
}

export default uploadFileToS3