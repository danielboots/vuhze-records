import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/NewsItem.module.css";

export default function NewsItem({ newsitems }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={
            newsitems.image
              ? newsitems.image.formats.small.url
              : "/images/event-default.png"
          }
          width={200}
          height={200}
        />
      </div>

      <div className={styles.info}>
        <h3 className={styles.hoverup}>{newsitems.headline}</h3>
        {/* <p>ID: {newsitems.id}</p> */}
        <p>
          {" "}
          <em>{newsitems.writeup}</em>
        </p>

        <span className={`${styles.genre} ${styles.hoverup}`}>
          {newsitems.tags}
        </span>
      </div>

      <div className={styles.link}>
        <Link href={`/news/${newsitems.newsitem_id}`}>
          <a className="btn m-3">Read More</a>
        </Link>
      </div>
    </div>
  );
}
