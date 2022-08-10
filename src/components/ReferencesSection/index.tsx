import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import clsx from "clsx";

import clickTheNumberImage from "./images/clickthenumber.png";
import audiateImage from "./images/audiate.png";
import blogImage from "./images/blog.jpg";
import stellarWindImage from "./images/stellar-wind.png";
import livegameImage from "./images/livegame.png";
import photographyImage from "./images/photography.png";

import styles from "./ReferencesSection.module.scss";
import textStyles from "styles/text.module.scss";
import containerStyles from "styles/containers.module.scss";

const references = [
  {
    url: "https://projects.marcnitzsche.de/audiate",
    image: audiateImage,
    altText: "Audiate",
    caption: "Audiate",
  },
  {
    url: "https://blog.marcnitzsche.de/",
    image: blogImage,
    altText: "Personal Blog",
    caption: "Personal Blog",
  },
  {
    url: "https://projects.marcnitzsche.de/ClickTheNumber",
    image: clickTheNumberImage,
    altText: "Click The Number",
    caption: "Reaction Game",
  },
  {
    url: "https://stellarwind.netlify.app/",
    image: stellarWindImage,
    altText: "Stellar Wind",
    caption: "Stellar Wind",
  },
  {
    url: "https://github.com/wbp-dev/livegame",
    image: livegameImage,
    altText: "Livegame",
    caption: "Livegame",
  },
  {
    url: "/photography",
    image: photographyImage,
    altText: "Photography",
    caption: "Photography",
  },
];

const ReferencesSection = () => (
  <section className={clsx(containerStyles.section, styles.references)}>
    <h1 className={clsx(textStyles.H1, styles.headline)}>Projects</h1>
    <div className={styles.referencesContainer}>
      {references.map((reference) => (
        <Reference key={reference.url} {...reference} />
      ))}
    </div>

    <p className={styles.doSomethingParagraph}>
      Feel free to contact me using my email below. I&apos;m looking forward to
      it!
    </p>
  </section>
);

const Reference: React.FC<{
  url: string;
  image: StaticImageData;
  altText: string;
  caption: string;
}> = ({ url, image, altText, caption }) => (
  <figure className={styles.referenceWrapper}>
    <Link href={url}>
      <a className={styles.referenceLink}>
        <Image
          src={image}
          sizes="25vw"
          layout="fill"
          className={styles.referenceImage}
          placeholder="blur"
          alt={altText}
          draggable={false}
        />
        <figcaption className={styles.slideUp}>
          <span className={styles.referenceCaption}>{caption}</span>
        </figcaption>
        <button className={styles.referenceAction}>Visit Now</button>
      </a>
    </Link>
  </figure>
);

export default ReferencesSection;
