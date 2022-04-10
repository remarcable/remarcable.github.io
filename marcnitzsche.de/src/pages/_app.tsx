import type { AppProps } from "next/app";

import "normalize.css";
import "styles/global.scss";

// Temporary global imports:
import "styles/sections/_astronaut.scss";
import "styles/sections/_footer.scss";
import "styles/sections/_head.scss";
import "styles/sections/_me.scss";
import "styles/sections/_references.scss";
import "styles/sections/_sections.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
