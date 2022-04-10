import Head from "next/head";

const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const ROOT_URL = process.env.NEXT_PUBLIC_ROOT_URL;

const page = {
  title: "Marc Nitzsche - He's unreal.",
  description:
    "Marc Nitzsche is a great person from the Internet (Germany). He creates webpages, games and loves programming.",
  themeColor: "#103981",
};

const PageHead = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="google-site-verification"
        content={GOOGLE_SITE_VERIFICATION}
      />
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <meta name="subject" content="person, cv" />
      <link rel="author" href="humans.txt" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        color={page.themeColor}
      />
      <meta name="theme-color" content={page.themeColor} />
      <link rel="canonical" href={ROOT_URL} />
    </Head>
  );
};

export default PageHead;
