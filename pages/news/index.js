import Layout from "@/components/Layout";
import NewsItem from "@/components/NewsItem";
import { API_URL } from "@/config/index";

export default function NewsPage({ newsitems }) {
  return (
    <Layout>
      <h1 className="text-uppercase text-center">newsitems</h1>
      {newsitems.length === 0 && <h3>No Artists</h3>}

      {newsitems.map((newsitems) => (
        <NewsItem key={newsitems.id} newsitems={newsitems} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/newsitems`);
  const newsitems = await res.json();

  return {
    props: { newsitems },
  };
}
