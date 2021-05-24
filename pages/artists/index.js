import Layout from "@/components/Layout";
import ArtistItem from "@/components/ArtistItem";
import { API_URL } from "@/config/index";

export default function ArtistsPage({ artists }) {
  console.log(artists);
  return (
    <Layout>
      <h1 className="text-uppercase text-center">artists</h1>
      {artists.length === 0 && <h3>No Artists</h3>}

      {artists.map((artists) => (
        <ArtistItem key={artists.id} artists={artists} />
      ))}
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
