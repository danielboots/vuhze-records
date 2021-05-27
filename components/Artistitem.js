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
          layout="responsive"
          objectFit="contain"
          quality={65}
          width={100}
          height={100}
        />
      </div>

      <div className={styles.info}>
        <h4 className={styles.hoverup}>{artists.name}</h4>
        <p>{artists.tagline}</p>
        <span className={`${styles.genre} ${styles.hoverup}`}>
          {artists.genre}
        </span>
      </div>

      <div className={styles.link}>
        <Link href={`/artists/${artists.artist_id}`}>
          <a className="btn btn-secondary btn-sm">View Artist</a>
        </Link>
      </div>
    </div>
  );
}
