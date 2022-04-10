import Image from "next/image";
import clsx from "clsx";

import styles from "./HeroSection.module.scss";
import textStyles from "styles/text.module.scss";
import containerStyles from "styles/containers.module.scss";

import backgroundImage from "./beautiful-view.jpg";

const navItems = [
  { title: "Blog", url: "https://blog.marcnitzsche.de" },
  { title: "GitHub", url: "https://github.com/remarcable" },
];

const HeroSection = () => (
  <section
    className={clsx(containerStyles.section, styles.hero)}
    draggable={false}
  >
    <Navigation />

    <h1 className={textStyles.H1}>
      <small>Hey,</small> I&apos;m Marc
    </h1>

    <Image
      src={backgroundImage}
      layout="fill"
      sizes="100vw"
      className={styles.backgroundImage}
      alt="Person looking at a fjord from the Preikestolen"
      draggable={false}
    />
  </section>
);

const Navigation = () => (
  <nav className={styles.navigation}>
    <ul>
      {navItems.map((item) => (
        <li key={item.url}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default HeroSection;
