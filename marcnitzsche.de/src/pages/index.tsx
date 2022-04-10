import type { NextPage } from "next";

import PageHead from "components/PageHead";
import HeroSection from "components/HeroSection";
import AstronautSection from "components/AstronautSection";
import IntroductionSection from "components/IntroductionSection";
import ReferencesSection from "components/ReferencesSection";

const Home: NextPage = () => {
  return (
    <>
      <PageHead />
      <HeroSection />
      <AstronautSection />
      <IntroductionSection />
      <ReferencesSection />
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
