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
          <figure className={styles.imageHolder}>
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
            I am <span>Marc</span>, a developer and musician from Berlin. While
            not developing impressive webpages or side projects I'm singing and
            playing the piano. Although I'm currently studying music and
            computer science, I am going to become an Astronaut. I'm curious
            where my path will take me!
          </p>
        </div>
      </div>

      <LazilyRender
        offset={{ top: 1000 }}
        onRender={() => console.log("rendered")}
        content={<Video />}
      />
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
