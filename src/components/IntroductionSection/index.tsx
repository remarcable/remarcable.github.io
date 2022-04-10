import Image from "next/image";
import clsx from "clsx";
import LazilyRender from "react-lazily-render";

import containerStyles from "styles/containers.module.scss";
import styles from "./IntroductionSection.module.scss";

import marcImage from "./marc.jpg";

const IntroductionSection = () => (
  <section className={clsx(containerStyles.section, styles.introduction)}>
    <div className={styles.withVideoBackground}>
      <div className={styles.content}>
        <div className={containerStyles.alignContainer}>
          <figure className={styles.imageWrapper}>
            <Image
              src={marcImage}
              width={200}
              height={200}
              className={styles.image}
              alt="Marc smiling in the camera"
              placeholder="blur"
              draggable={false}
            />
          </figure>
          <p className={styles.aboutMe}>
            Hello there 👋, I am <em>Marc</em>, a young developer and musician
            from Berlin. While not tinkering with one of my many side projects,
            you can find me singing, playing the piano, or learning to play the
            trumpet. I recently finished studying music and computer science at
            the Berlin University of the Arts and the Humboldt University.
          </p>
        </div>
      </div>

      <LazilyRender offset={1000} content={<Video />} />
    </div>
  </section>
);

const Video = () => (
  <video autoPlay muted loop>
    <source src="video/White-Board.webm" type="video/webm" />
    <source src="video/White-Board.ogv" type="video/ogg" />
    <source src="video/White-Board.mp4" type="video/mp4" />
  </video>
);

export default IntroductionSection;
