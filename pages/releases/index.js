import Layout from "@/components/Layout";
import ReleaseItem from "@/components/ReleaseItem";
import { API_URL } from "@/config/index";

export default function ReleasesPage({ releases }) {
  return (
    <Layout>
      <h1 className="text-uppercase text-center">releases</h1>
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
