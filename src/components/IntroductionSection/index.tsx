import Image from "next/image";
import clsx from "clsx";

import containerStyles from "styles/containers.module.scss";
import styles from "./IntroductionSection.module.scss";

import marcImage from "./marc.jpg";
import backgroundImage from "./background.jpg";

const IntroductionSection = () => (
  <section className={clsx(containerStyles.section, styles.introduction)}>
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
          Hello there 👋, I am <em>Marc</em>, a passionate young developer and
          musician from Berlin. While not tinkering with one of my many side
          projects, you can find me singing, playing the piano, or learning to
          play the trumpet. I recently finished studying music and computer
          science at the Berlin University of the Arts and the Humboldt
          University.
        </p>
      </div>
    </div>

    <Image
      src={backgroundImage}
      layout="fill"
      className={styles.backgroundImage}
      alt="Marc smiling in the camera"
      placeholder="blur"
      draggable={false}
    />
  </section>
);

export default IntroductionSection;
