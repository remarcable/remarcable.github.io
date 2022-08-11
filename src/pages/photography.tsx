import { useMemo, Suspense } from "react";
import type { GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";

import { ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";

import shuffleSeed from "knuth-shuffle-seeded";
import ImgixClient from "@imgix/js-core";

import Navigation from "components/Navigation";

import "photoswipe/dist/photoswipe.css";
import * as styles from "styles/photography.module.scss";

const PhotoGallery = dynamic(() => import("react-photo-gallery"), {
  suspense: true,
});

const PhotoswipeGallery = dynamic(() =>
  import("react-photoswipe-gallery").then((module) => module.Gallery)
);
const PhotoswipeItem = dynamic(() =>
  import("react-photoswipe-gallery").then((module) => module.Item)
);

interface PhotographyPageProps {
  images: {
    src: string;
    width: number;
    height: number;
  }[];
}

const Photography: NextPage<PhotographyPageProps> = ({ images }) => {
  // Show the pictures in a different order each month to add variety
  const shuffledImages = useMemo(() => {
    const today = new Date();
    const seed = +`${today.getFullYear()}${today.getMonth()}`;
    return shuffleSeed([...images], seed);
  }, [images]);

  return (
    <>
      <Navigation variant="dark" />
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Photography</h1>

        <Suspense fallback={<div className={styles.fallback} />}>
          <PhotoswipeGallery
            options={{
              zoom: false,
              counter: false,
              bgOpacity: 0.9,
            }}
          >
            <PhotoGallery
              photos={shuffledImages}
              margin={5}
              targetRowHeight={400}
              renderImage={({ photo, index }) => (
                <PhotoswipeItem
                  key={index}
                  original={photo.src}
                  thumbnail={photo.src}
                  originalSrcset={photo.srcSet as string}
                  width={photo.width * 5}
                  height={photo.height * 5}
                >
                  {({ ref, open }) => (
                    <img
                      alt="..."
                      loading="lazy"
                      ref={ref}
                      src={photo.src}
                      srcSet={photo.srcSet}
                      width={photo.width}
                      height={photo.height}
                      className={styles.photo}
                      onClick={open}
                    />
                  )}
                </PhotoswipeItem>
              )}
            />
          </PhotoswipeGallery>
        </Suspense>
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

  const imgixClient = new ImgixClient({
    domain: "static.marcnitzsche.de",
  });

  return data.Contents?.map((file) => {
    const params = {
      auto: "compress,format",
    };
    return {
      src: imgixClient.buildURL(file.Key, params),
      srcSet: imgixClient.buildSrcSet(file.Key, params, { maxWidth: 1000 }),
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
