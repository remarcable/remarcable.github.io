import { useMemo, Suspense, LegacyRef } from "react";

import Link from "next/link";
import Image from "next/future/image";
import dynamic from "next/dynamic";
import type { GetStaticProps, NextPage } from "next";

import type { GalleryProps, ItemProps } from "react-photoswipe-gallery";

import { ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";

import shuffleSeed from "knuth-shuffle-seeded";

import PageHead from "components/PageHead";
import Navigation from "components/Navigation";

import "photoswipe/dist/photoswipe.css";
import styles from "styles/pages/photography.module.scss";

const PhotoGallery = dynamic(() => import("react-photo-gallery"), {
  suspense: true,
});

const PhotoswipeGallery = dynamic<GalleryProps>(() =>
  import("react-photoswipe-gallery").then((module) => module.Gallery)
);
const PhotoswipeItem = dynamic<ItemProps>(() =>
  import("react-photoswipe-gallery").then((module) => module.Item)
);

interface PhotographyPageProps {
  imageFileNames: string[];
}

const Photography: NextPage<PhotographyPageProps> = ({ imageFileNames }) => {
  // Show the pictures in a different order each month to add variety
  const shuffledImages = useMemo(() => {
    const images = getImageSources({ imageFileNames });
    const today = new Date();
    const seed = +`${today.getFullYear()}${today.getMonth()}`;
    return shuffleSeed([...images], seed);
  }, [imageFileNames]);

  return (
    <>
      <PageHead pageTitle="Photography" />
      <Navigation variant="dark" />
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Photography</h1>
        <p className={styles.bodyText}>
          To see the world, things dangerous to come to;
          <br /> to see behind walls, to draw closer,
          <br />
          to find each other and to feel.
          <br />
          That is the purpose of Life.
          <Link href="https://www.youtube.com/watch?v=YofU2hm8_O4">
            <a target="_blank" rel="noreferrer">
              <span>– from the movie « Walter Mitty »</span>
            </a>
          </Link>
        </p>

        <Suspense fallback={<div className={styles.fallback} />}>
          <PhotoswipeGallery
            options={{ zoom: false, counter: false, bgOpacity: 0.9 }}
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
                  width={photo.width * 5}
                  height={photo.height * 5}
                >
                  {({ ref, open }) => (
                    <div
                      ref={ref as LegacyRef<HTMLImageElement>}
                      onClick={open}
                    >
                      <Image
                        alt="..."
                        src={photo.src}
                        width={photo.width}
                        height={photo.height}
                        className={styles.photo}
                        priority={index <= 2}
                        sizes="50vw"
                      />
                    </div>
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

  if (!accessKeyId || !secretAccessKey || !bucketName || !awsRegion) {
    throw new Error("No AWS credentials provided");
  }

  const imageFileNames = await getImagesFromS3({
    accessKeyId,
    secretAccessKey,
    awsRegion,
    bucketName,
  });

  return { props: { imageFileNames } };
};

const getImageSources = ({ imageFileNames }: { imageFileNames: string[] }) => {
  const domain = process.env.NEXT_PUBLIC_STATIC_FILE_URL;
  if (!domain) {
    throw new Error("No static file URL provided");
  }

  return imageFileNames.map((fileName) => ({
    src: `https://${domain}/${fileName}`,
    ...getFileDimensionsFromName(fileName),
  }));
};

const getImagesFromS3 = async ({
  accessKeyId,
  secretAccessKey,
  awsRegion,
  bucketName,
}: {
  accessKeyId: string;
  secretAccessKey: string;
  awsRegion: string;
  bucketName: string;
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

  return data.Contents?.map((file) => file.Key as string) ?? [];
};

const getFileDimensionsFromName = (fileName: string) => {
  const [, width, height] = /\w+-(?<width>\d+)x(?<height>\d+)\.\w+/.exec(
    fileName
  ) || [, 1, 1];

  if (!width || !height) {
    return { width: 1, height: 1 };
  }

  return { width: +width / 1000 || 1, height: +height / 1000 || 1 };
};

export default Photography;
