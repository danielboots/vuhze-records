import Layout from "@/components/Layout";
import ArtistItem from "@/components/ArtistItem";
import { API_URL } from "@/config/index";

export default function ArtistsPage({ artists }) {
  return (
    <Layout>
      <h1>artists</h1>
      {artists.length === 0 && <h3>No Artists</h3>}

      {artists.map((artists) => (
        <div>
          <h2>{artists.name}</h2>
          <p>{artists.Bio}</p>
          <h3>{artists.instagram}</h3>
          <h3>{artists.facebook}</h3>
          <h3>{artists.web}</h3>
        </div>
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
