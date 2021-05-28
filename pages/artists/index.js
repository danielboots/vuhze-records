import Layout from "@/components/Layout";
// import ArtistItem from "@/components/ArtistItem";
import styles from "@/styles/Artists.module.css";
import { API_URL } from "@/config/index";

export default function ArtistsPage({ artists }) {
  console.log(artists);
  return (
    <Layout>
      <div className={styles.herohome}>
        <h1 className="brand-font text-uppercase text-center">
          <strong>Artists</strong>
        </h1>
        <div className={styles.container}></div>
      </div>

      <div className={styles.container}></div>
      {artists.length === 0 && <h3>No Artists</h3>}

      <h1>deploy fix!</h1>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/artists`);
  const artists = await res.json();

  return {
    props: { artists },
  };
}
