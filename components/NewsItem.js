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
          layout="intrinsic"
          objectFit="contain"
          quality={65}
          width={200}
          height={200}
        />
      </div>

      <div className={styles.info}>
        <h5 className={styles.hoverup}>
          <strong>{newsitems.headline}</strong>{" "}
        </h5>
        {/* <p>ID: {newsitems.id}</p> */}
        <p>
          <em>{newsitems.writeup}</em>
        </p>

        <span className={`${styles.genre} ${styles.hoverup}`}>
          {newsitems.tags}
        </span>
      </div>

      <div className={styles.link}>
        <Link href={`/news/${newsitems.newsitem_id}`}>
          <a className="btn btn-secondary btn-sm ">Read More</a>
        </Link>
      </div>
    </div>
  );
}
