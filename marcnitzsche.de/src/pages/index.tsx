import type { NextPage } from "next";

import PageHead from "components/PageHead";
import HeroSection from "components/HeroSection";
import AstronautSection from "components/AstronautSection";

const Home: NextPage = () => {
  return (
    <>
      <PageHead />
      <HeroSection />
      <AstronautSection />
      <section id="me">
        <div className="video">
          <div className="content">
            <div className="align-container">
              <figure className="image-holder">
                <img
                  src="img/dist/marc.jpg"
                  className="no-drag"
                  id="picture-marc"
                  alt="Marc smiling in the camera"
                />
              </figure>
              <p id="about-me">
                I am <span>Marc</span>, a developer and musician from Berlin.
                While not developing impressive webpages or side projects I'm
                singing and playing the piano. Although I'm currently studying
                music and computer science, I am going to become an Astronaut.
                I'm curious where my path will take me!
              </p>
            </div>
          </div>
          <video autoPlay muted loop poster="img/dist/White-Board.jpg">
            <source src="img/video/White-Board.webm" type="video/webm" />
            <source src="img/video/White-Board.ogv" type="video/ogg" />
            <source src="img/video/White-Board.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      <section id="references" className="no-drag">
        <h1 className="headline">Projects</h1>
        <div className="vertical-container"></div>
        <div className="vertical-container">
          <figure className="reference-work">
            <a href="//blog.marcnitzsche.de" target="_blank noopener">
              <img
                src="img/dist/references/blog.jpg"
                className="no-drag reference-image"
                alt="Marc's Blog!"
              />
              <figcaption className="slide-up">
                <span className="reference-caption">Personal Blog</span>
              </figcaption>
              <button className="reference-action">Take a look!</button>
            </a>
          </figure>
          <figure className="reference-work">
            <a href="//marcnitzsche.de/ClickTheNumber" target="_blank noopener">
              <img
                src="img/dist/references/clickthenumber.png"
                className="no-drag reference-image"
                alt="Click The Number!"
              />
              <figcaption className="slide-up">
                <span className="reference-caption">Reaction Game</span>
              </figcaption>
              <button className="reference-action">Take a look!</button>
            </a>
          </figure>
          <figure className="reference-work">
            <a href="//druckundschwaerze.de/" target="_blank noopener">
              <img
                src="img/dist/references/druckundschwaerze.png"
                className="no-drag reference-image"
                alt="Druck und Schwärze"
              />
              <figcaption className="slide-up">
                <span className="reference-caption">School Newspaper</span>
              </figcaption>
              <button className="reference-action">Take a look!</button>
            </a>
          </figure>
          <figure className="reference-work">
            <a href="//github.com/wbp-dev/livegame" target="_blank noopener">
              <img
                src="img/dist/references/livegame.png"
                className="no-drag reference-image"
                alt="Livegame"
              />
              <figcaption className="slide-up">
                <span className="reference-caption">Livegame</span>
              </figcaption>
              <button className="reference-action">Take a look!</button>
            </a>
          </figure>
        </div>
        <div className="vertical-container">
          <p className="do-something-paragraph">
            Write me, if you'd like to get in touch. <br />
            It's going to be grand.
          </p>
        </div>
      </section>
      <footer>
        <a href="mailto:hello@marcnitzsche.de" className="no-drag">
          <button type="button" className="hvr-bounce-to-top">
            Write Marc
          </button>
        </a>
        <a
          href="https://pgp.mit.edu/pks/lookup?op=get&search=0x350E90D6E8C90241"
          className="pgp-key"
        >
          GnuPG-Key E8C90241
        </a>
      </footer>
    </>
  );
};

export default Home;
