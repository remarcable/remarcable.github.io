import { useEffect, useState } from "react";
import styles from "./FooterSection.module.scss";

const emailFirstPart = process.env.NEXT_PUBLIC_EMAIL_BEFORE_AT;
const emailLastPart = process.env.NEXT_PUBLIC_EMAIL_AFTER_AT;

const FooterSection = () => {
  const [emailUrl, setEmailUrl] = useState<string>("");
  useEffect(() => {
    // Set email client-side as an attempt to block bots
    setEmailUrl(`mailto:${emailFirstPart}%40${emailLastPart}`);
  }, [setEmailUrl]);

  return (
    <footer className={styles.footer}>
      <a href={emailUrl} draggable={false}>
        <button type="button" className={styles.bounceToTop}>
          Get in touch
        </button>
      </a>
      <a
        href="https://pgp.mit.edu/pks/lookup?op=get&search=0x350E90D6E8C90241"
        className={styles.pgpKey}
      >
        GnuPG-Key E8C90241
      </a>
    </footer>
  );
};

export default FooterSection;
