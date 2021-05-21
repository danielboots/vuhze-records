import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/NewsItem.module.css";

export default function NewsItem({ newsitems }) {
  return (
    <div className={styles.event}>
      <div className={styles.info}>
        <h5 className={styles.hoverup}>
          <strong>Headline:</strong> {newsitems.headline}
        </h5>

        <p></p>
        <p>
          <strong>Date:</strong> {newsitems.writeup}
        </p>
        <p>
          <strong>Genre: </strong>
          {newsitems.tags}
        </p>

        <span className={`${styles.genre} ${styles.hoverup}`}></span>
      </div>

      <div className={styles.link}>
        <Link href={`/newsitems/${newsitems.newsitem_id}`}>
          <a className="btn m-3">View article</a>
        </Link>
      </div>
    </div>
  );
}
