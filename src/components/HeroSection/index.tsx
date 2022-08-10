import Image from "next/image";
import clsx from "clsx";

import styles from "./HeroSection.module.scss";
import textStyles from "styles/text.module.scss";
import containerStyles from "styles/containers.module.scss";

import backgroundImage from "./mountains.jpg";

import Navigation from "components/Navigation";

const HeroSection = () => (
  <section
    className={clsx(containerStyles.section, styles.hero)}
    draggable={false}
  >
    <Image
      src={backgroundImage}
      priority
      layout="fill"
      sizes="100vw"
      className={styles.backgroundImage}
      alt="Person looking at a fjord from the Preikestolen"
      draggable={false}
    />

    <Navigation />

    <h1 className={textStyles.H1}>
      <small>Hey,</small> I&apos;m Marc
    </h1>
  </section>
);

export default HeroSection;
