import Head from "next/head";

// SEO
export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      {children}
    </div>
  );
}

Layout.defaultProps = {
  title: "Vuhze Records | Artist management",
  description: "Latest Music, from prestigious record labels and artists.",
  keywords: "EDM, Dance Music, events, work in the music industry.",
};
