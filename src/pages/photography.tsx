import type { GetStaticProps, NextPage } from "next";
import { ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";

interface PhotographyPageProps {
  imageUrls: string[];
}

const Photography: NextPage<PhotographyPageProps> = ({ imageUrls }) => {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const accessKeyId = process.env.LOCAL_AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.LOCAL_AWS_SECRET_ACCESS_KEY;
  const awsRegion = process.env.LOCAL_AWS_REGION;
  const bucketName = process.env.LOCAL_AWS_BUCKET_NAME;
  const staticPublicUrl = process.env.STATIC_PUBLIC_URL;

  if (
    !accessKeyId ||
    !secretAccessKey ||
    !bucketName ||
    !awsRegion ||
    !staticPublicUrl
  ) {
    throw new Error("No AWS credentials provided");
  }

  const imageUrls = await getImageUrlsFromS3({
    accessKeyId,
    secretAccessKey,
    awsRegion,
    bucketName,
    staticPublicUrl,
  });

  return { props: { imageUrls } };
};

export default Photography;

const getImageUrlsFromS3 = async ({
  accessKeyId,
  secretAccessKey,
  awsRegion,
  bucketName,
  staticPublicUrl,
}: {
  accessKeyId: string;
  secretAccessKey: string;
  awsRegion: string;
  bucketName: string;
  staticPublicUrl: string;
}) => {
  const s3Client = new S3Client({
    region: awsRegion,
    credentials: { accessKeyId, secretAccessKey },
  });

  const data = await s3Client.send(
    new ListObjectsV2Command({
      Bucket: bucketName,
    })
  );

  if (data.KeyCount && data.MaxKeys && data.KeyCount >= data.MaxKeys) {
    throw new Error("Can't display all objects in the bucket");
  }

  return data.Contents?.map((file) => `${staticPublicUrl}/${file.Key}`);
};
