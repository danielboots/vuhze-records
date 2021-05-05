import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "./Showcase";
import styles from "@/styles/Layout.module.css";

// SEO
export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />

      {/* use router to only show hero showcase on front page */}
      {router.pathname === "/" && <Showcase />}
      <div className={styles.container}>{children}</div>

      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Vuhze Records | Artist management",
  description: "Latest Music, from prestigious record labels and artists.",
  keywords: "EDM, Dance Music, events, work in the music industry.",
};
