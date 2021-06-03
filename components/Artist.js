import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/ReleaseItem.module.css";

export default function Artist({ artists }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={
            artists.image
              ? artists.image.formats.small.url
              : "/images/event-default.png"
          }
          layout="responsive"
          objectFit="contain"
          quality={65}
          width={100}
          height={100}
        />
      </div>

      <div className={styles.info}>
        <h5 className={styles.hoverup}>
          <strong>Artist:</strong> {artists.name}
        </h5>
        <p>
          <strong>Genre:</strong>
          <span className="text-danger">
            <strong> {artists.genre}</strong>
          </span>
        </p>
        {/* <p>
          <strong>Extract:</strong> {artists.tagline}
        </p> */}

        <span className={`${styles.genre} ${styles.hoverup}`}></span>
      </div>

      <div className={styles.link}>
        <Link href={`/artists/${artists.artist_id}`}>
          <a className="btn btn-secondary btn-sm">View Artist</a>
        </Link>
      </div>
    </div>
  );
}
