import type { GetStaticProps, NextPage } from "next";
import { ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";
import Gallery from "react-photo-gallery";
import shuffleSeed from "knuth-shuffle-seeded";
import ImgixClient from "@imgix/js-core";
import * as styles from "styles/photography.module.scss";
import Navigation from "components/Navigation";

var client = new ImgixClient({
  domain: "static.marcnitzsche.de",
});

interface PhotographyPageProps {
  images: {
    src: string;
    width: number;
    height: number;
  }[];
}

const Photography: NextPage<PhotographyPageProps> = ({ images }) => {
  // Show the pictures in a different order each month to add variety
  const today = new Date();
  const seed = +`${today.getFullYear()}${today.getMonth()}`;
  const shuffledImages = shuffleSeed([...images], seed);

  return (
    <>
      <Navigation variant="dark" />
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Photography</h1>
        <Gallery photos={shuffledImages} margin={5} />
      </div>
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

  const images = await getImagesFromS3({
    accessKeyId,
    secretAccessKey,
    awsRegion,
    bucketName,
    staticPublicUrl,
  });

  return { props: { images } };
};

export default Photography;

const getImagesFromS3 = async ({
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

  return data.Contents?.map((file) => {
    const options = { auto: "compress,format" };
    return {
      src: client.buildURL(file.Key, { ...options, h: 400 }),
      srcSet: client.buildSrcSet(file.Key, { auto: "compress,format" }),
      ...getFileDimensionsFromName(file.Key),
    };
  });
};

const getFileDimensionsFromName = (fileName: string) => {
  const {
    groups: { width, height },
  } = /\w+-(?<width>\d+)x(?<height>\d+)\.\w+/.exec(fileName) || {
    groups: { width: null, height: null },
  };

  return { width: +width / 1000 || null, height: +height / 1000 || null };
};
