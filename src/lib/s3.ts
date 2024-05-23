import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import { env } from "@/env";

const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: env.ACCESS_KEY_ID,
    secretAccessKey: env.SECRET_ACCESS_KEY,
  },
});

export async function getSignedUrlForS3Object(key: string, type: string) {
  return await getSignedUrl(
    s3Client,
    new PutObjectCommand({
      Bucket: env.BUCKET_NAME,
      Key: key,
      ContentType: type,
    }),
    { expiresIn: 3600 }
  );
}
