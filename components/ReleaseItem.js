import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/ReleaseItem.module.css";

export default function ReleaseItem({ releases }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={
            releases.artwork
              ? releases.artwork.formats.thumbnail.url
              : "/images/event-default.png"
          }
          width={200}
          height={200}
        />
      </div>

      <div className={styles.info}>
        <h5 className={styles.hoverup}>
          <strong>Artist:</strong> {releases.artist}
        </h5>
        <p>
          <strong>Title:</strong> {releases.trackname}
        </p>
        <p>
          <strong>Code:</strong> {releases.code}
        </p>
        <p>
          <strong>Date:</strong> {releases.release}
        </p>
        <p>
          <strong>Genre: </strong>
          {releases.Genre}
        </p>

        <span className={`${styles.genre} ${styles.hoverup}`}></span>
      </div>

      <div className={styles.link}>
        <Link href={`/releases/${releases.releases_id}`}>
          <a className="btn m-3">View Release</a>
        </Link>
      </div>

      <iframe
        src={releases.spotifyembed}
        name="spotify"
        frameBorder="10"
        width="100%"
        height="100"
      ></iframe>
    </div>
  );
}