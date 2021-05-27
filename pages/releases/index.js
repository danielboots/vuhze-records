import Layout from "@/components/Layout";
import ReleaseItem from "@/components/ReleaseItem";
import styles from "@/styles/Releases.module.css";
import { API_URL } from "@/config/index";

export default function ReleasesPage({ releases }) {
  return (
    <Layout>
      <div className={styles.herohome}>
        <h1 className="brand-font text-uppercase text-center">
          <strong>Releases</strong>
        </h1>
        <div className={styles.container}></div>
      </div>

      {releases.length === 0 && <h3>No Releases</h3>}

      {releases.map((releases) => (
        <ReleaseItem key={releases.id} releases={releases} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/releases`);
  const releases = await res.json();

  return {
    props: { releases },
  };
}
