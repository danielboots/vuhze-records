import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/ArtistItem.module.css";

export default function ArtistItem({ artists }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={
            artists.image
              ? artists.image.formats.small.url
              : "/images/event-default.png"
          }
          width={200}
          height={200}
        />
      </div>

      <div className={styles.info}>
        <h3 className={styles.hoverup}>{artists.name}</h3>
        <p>{artists.tagline}</p>
        <span className={`${styles.genre} ${styles.hoverup}`}>
          {artists.genre}
        </span>
      </div>

      <div className={styles.link}>
        <Link href={`/artists/${artists.artist_id}`}>
          <a className="btn m-3">View Artist</a>
        </Link>
      </div>
    </div>
  );
}
