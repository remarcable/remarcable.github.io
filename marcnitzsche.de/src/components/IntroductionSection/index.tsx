import Image from "next/image";
import styles from "./IntroductionSection.module.scss";
import marcImage from "./marc.jpg";

const IntroductionSection = () => (
  <section className={styles.introduction}>
    <div className={styles.video}>
      <div className={styles.content}>
        <div className="align-container">
          <figure className={styles.imageHolder}>
            <Image
              src={marcImage}
              width={200}
              height={200}
              className={styles.image}
              alt="Marc smiling in the camera"
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
      <video autoPlay muted loop poster="img/dist/White-Board.jpg">
        <source src="video/White-Board.webm" type="video/webm" />
        <source src="video/White-Board.ogv" type="video/ogg" />
        <source src="video/White-Board.mp4" type="video/mp4" />
      </video>
    </div>
  </section>
);

export default IntroductionSection;
