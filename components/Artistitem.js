import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/ArtistItem.module.css";

export default function ArtistItem({ artist }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={
            artist.profile
              ? artist.profile.formats.thumbnail.url
              : "/images/event-default.png"
          }
          width={170}
          height={100}
        />
      </div>

      <div className={styles.info}>
        <h3>{artist.name}</h3>
      </div>

      <div className={styles.link}>
        <Link href={`/artists/${artist.id}`}>
          <a className="btn">Details</a>
        </Link>
      </div>
    </div>
  );
}
