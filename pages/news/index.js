import Layout from "@/components/Layout";
import NewsItem from "@/components/NewsItem";
import styles from "@/styles/News.module.css";
import { API_URL } from "@/config/index";

export default function NewsItemsPage({ newsitems }) {
  return (
    <Layout>
      <div className={styles.herohome}>
        <h1 className="brand-font text-uppercase text-center">
          <strong>Latest News</strong>
        </h1>
        <div className={styles.container}></div>
      </div>

      {newsitems.length === 0 && <h3>No News</h3>}

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
