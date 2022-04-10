import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

import blogImage from "./images/blog.jpg";
import clickTheNumberImage from "./images/clickthenumber.png";
import druckUndSchwaerzeImage from "./images/druckundschwaerze.png";
import livegameImage from "./images/livegame.png";

import styles from "./ReferencesSection.module.scss";
import textStyles from "styles/text.module.scss";
import containerStyles from "styles/containers.module.scss";

const references = [
  {
    url: "https://blog.marcnitzsche.de",
    image: blogImage,
    altText: "Marc's Blog!",
    caption: "Personal Blog",
  },
  {
    url: "https://marcnitzsche.de/ClickTheNumber",
    image: clickTheNumberImage,
    altText: "Click The Number!",
    caption: "Reaction Game",
  },
  {
    url: "https://web.archive.org/web/20180307003350/http://druckundschwaerze.de/",
    image: druckUndSchwaerzeImage,
    altText: "Druck und Schwärze",
    caption: "School Newspaper",
  },
  {
    url: "https://github.com/wbp-dev/livegame",
    image: livegameImage,
    altText: "Livegame",
    caption: "Livegame",
  },
];

const ReferencesSection = () => (
  <section className={clsx(containerStyles.section, styles.references)}>
    <h1 className={clsx(textStyles.H1, textStyles.headline)}>Projects</h1>
    <div className={styles.verticalContainer}></div>
    <div className={styles.verticalContainer}>
      {references.map((reference) => (
        <Reference key={reference.url} {...reference} />
      ))}
    </div>
    <div className={styles.verticalContainer}>
      <p className={styles.doSomethingParagraph}>
        Write me, if you'd like to get in touch. <br />
        It's going to be grand.
      </p>
    </div>
  </section>
);

const Reference: React.FC<{
  url: string;
  image: StaticImageData;
  altText: string;
  caption: string;
}> = ({ url, image, altText, caption }) => (
  <figure className={styles.referenceWrapper}>
    <a href={url} target="_blank noopener" className={styles.referenceLink}>
      <Image
        src={image}
        sizes="25vw"
        layout="fill"
        className={styles.referenceImage}
        alt={altText}
        draggable={false}
      />
      <figcaption className={styles.slideUp}>
        <span className={styles.referenceCaption}>{caption}</span>
      </figcaption>
      <button className={styles.referenceAction}>Take a look!</button>
    </a>
  </figure>
);

export default ReferencesSection;
