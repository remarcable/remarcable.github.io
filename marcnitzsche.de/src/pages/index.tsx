import type { NextPage } from "next";

import PageHead from "components/PageHead";

const Home: NextPage = () => {
  return (
    <>
      <PageHead />
      <style media="screen">{`
      /* Styles for initial loading */
      html {
        background-color: #000;
      }
      body {
        top: 0;
        margin: 0;
      }
      section {
        height: 100vh;
        min-height: 600px;
        width: 100vw;
        overflow: hidden;
        transition: height 0.5s ease-in-out;
      }

      .scroll-content {
        display: none;
      }

      #head,
      #me {
        position: relative;
        z-index: 1;
        background-color: #9ec3e7;
      }
      #astronaut {
        background-image: linear-gradient(to top, #2b5fbb 0%, #0a224c 100%);
      }
      #helmet {
        opacity: 0;
      }
    `}</style>
      <section id="head" className="no-drag">
        <nav>
          <ul>
            <li>
              <a href="https://blog.marcnitzsche.de">Blog</a>
            </li>
            <li>
              <a href="https://github.com/remarcable">Github</a>
            </li>
          </ul>
        </nav>
        <h1>
          <small>Hey,</small>
          I'm Marc
        </h1>
      </section>
      <section id="astronaut" className="no-drag">
        <h1>
          <small>I am</small>
          <span>
            <span
              className="typewrite"
              data-period="2000"
              data-type='[ "Wannabe-Astronaut", "Creator", "Developer", "Student", "Vegan", "Musician", "Traveler" ]'
            >
              <span className="wrap"></span>
            </span>
            <span className="typed-cursor">|</span>
          </span>
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="80"
          viewBox="0 0 70 80"
          id="helmet"
          className="no-drag"
        >
          <g>
            <path d="M62.4 43L62.4 28.6C63 28 63.3 27.2 63.3 26.3L63.3 20.5C63.3 16.9 60.5 14 56.9 13.9L56.9 6.4C56.9 2.9 54 0 50.5 0L23.6 0C17.8 0 13.1 4.7 13.1 10.5L13.1 13.9C9.6 14 6.7 16.9 6.7 20.5L6.7 26.3C6.7 27.2 7 28 7.6 28.6L7.6 43C3.2 45.4 0.3 50.1 0.3 55.4L0.3 79C0.3 79.5 0.7 80 1.3 80L68.7 80C69.3 80 69.8 79.5 69.8 79L69.8 55.4C69.8 50.1 66.8 45.4 62.4 43L62.4 43ZM67.7 59.8L63.4 59.8 63.4 55.2 67.7 55.2C67.7 55.2 67.7 59.8 67.7 59.8L67.7 59.8ZM60.3 42.1C58.8 41.6 57.3 41.3 55.7 41.3L51.5 41.3C54.2 38.1 56.1 34 56.5 29.6 56.5 29.6 60.2 29.5 60.3 29.5L60.3 42.1 60.3 42.1ZM35 7.8C45.8 7.8 54.5 16.6 54.5 27.4 54.5 38.1 45.8 46.9 35 46.9 24.2 46.9 15.5 38.1 15.5 27.4 15.5 16.6 24.2 7.8 35 7.8L35 7.8ZM20.6 43.4C24.4 46.9 29.5 49 35 49 40.5 49 45.6 46.9 49.4 43.4L53 43.4C48.5 48.6 41.9 51.7 35 51.7 28.1 51.7 21.5 48.6 17 43.4L20.6 43.4 20.6 43.4ZM16 45.4C20.6 50.4 27.1 53.5 34 53.7L34 77.9 16 77.9 16 45.4 16 45.4ZM36.1 53.7C42.9 53.5 49.4 50.4 54 45.4L54 77.9 36.1 77.9 36.1 53.7 36.1 53.7ZM61.2 20.5L61.2 26.3C61.2 27 60.7 27.5 60.1 27.5L56.6 27.5C56.6 27.4 56.6 27.4 56.6 27.4 56.6 23.2 55.4 19.3 53.3 16L56.7 16C59.2 16 61.2 18 61.2 20.5L61.2 20.5ZM23.6 2.1L50.5 2.1C52.9 2.1 54.8 4 54.8 6.4L54.8 13.9 51.9 13.9C47.9 8.9 41.8 5.8 35 5.8 28.2 5.8 22.1 8.9 18.1 13.9L15.2 13.9 15.2 10.5C15.2 5.8 19 2.1 23.6 2.1L23.6 2.1ZM8.8 20.5C8.8 18 10.8 16 13.3 16L16.7 16C14.6 19.3 13.4 23.2 13.4 27.4 13.4 27.4 13.4 27.4 13.4 27.5L9.9 27.5C9.3 27.5 8.8 27 8.8 26.3L8.8 20.5 8.8 20.5 8.8 20.5ZM9.7 29.5C9.8 29.5 13.5 29.6 13.5 29.6 13.9 34 15.8 38.1 18.5 41.3L14.3 41.3C12.7 41.3 11.2 41.6 9.7 42.1L9.7 29.5 9.7 29.5ZM2.3 55.4C2.3 49 7.5 43.7 13.9 43.4L13.9 77.9 2.3 77.9 2.3 55.4 2.3 55.4ZM56.1 77.9L56.1 43.4C61.7 43.6 66.4 47.7 67.4 53.1L62.4 53.1C61.8 53.1 61.3 53.5 61.3 54.1L61.3 60.9C61.3 61.4 61.8 61.9 62.4 61.9L67.7 61.9 67.7 77.9 56.1 77.9 56.1 77.9Z" />
            <path d="M50.3 61L39.8 61C39.2 61 38.7 61.4 38.7 62L38.7 66.5C38.7 67.1 39.2 67.6 39.8 67.6L50.3 67.6C50.9 67.6 51.4 67.1 51.4 66.5L51.4 62C51.4 61.4 50.9 61 50.3 61L50.3 61ZM49.3 65.5L40.8 65.5 40.8 63.1 49.3 63.1 49.3 65.5 49.3 65.5Z" />
            <path d="M48.5 9.8L52.6 9.8C53.1 9.8 53.6 9.3 53.6 8.8L53.6 6.9C53.6 4.9 52 3.2 49.9 3.2L48.5 3.2C47.9 3.2 47.4 3.7 47.4 4.3L47.4 8.8C47.4 9.3 47.9 9.8 48.5 9.8L48.5 9.8ZM49.5 5.3L49.9 5.3C50.8 5.3 51.5 6 51.5 6.9L51.5 7.7 49.5 7.7 49.5 5.3 49.5 5.3Z" />
            <path d="M35 44.8C44.4 44.8 52 37.3 52 28.2 52 23.8 50.2 20.3 46.9 18 43.9 15.9 39.8 14.8 35 14.8 30.2 14.8 26.1 15.9 23.1 18 19.8 20.3 18 23.8 18 28.2 18 37.3 25.6 44.8 35 44.8L35 44.8ZM24.3 19.7C26.9 17.9 30.6 16.9 35 16.9 39.4 16.9 43.1 17.9 45.7 19.7 48.5 21.6 49.9 24.5 49.9 28.2 49.9 36.2 43.2 42.7 35 42.7 26.8 42.7 20.1 36.2 20.1 28.2 20.1 24.5 21.5 21.6 24.3 19.7L24.3 19.7Z" />
            <path d="M37.7 20.6C37.9 20.7 38.1 20.7 38.4 20.8 38.4 20.8 38.5 20.8 38.6 20.8 39.1 20.8 39.5 20.4 39.6 19.9 39.7 19.3 39.3 18.8 38.7 18.7 38.5 18.6 38.3 18.6 38 18.6 37.4 18.5 36.9 18.9 36.8 19.5 36.7 20 37.1 20.6 37.7 20.6L37.7 20.6Z" />
            <path d="M41.7 21.8C45.2 23.4 45.9 26.6 45.9 28.9 45.9 29.5 46.4 30 47 30L47 30C47.6 30 48 29.5 48 28.9 48 24.7 46.1 21.5 42.5 19.9 42 19.7 41.4 19.9 41.1 20.5 40.9 21 41.1 21.6 41.7 21.8L41.7 21.8Z" />
          </g>
        </svg>
      </section>
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
          <video autoplay muted loop poster="img/dist/White-Board.jpg">
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
