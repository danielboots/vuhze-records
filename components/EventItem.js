import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/EventItem.module.css";

export default function EventItem({ evt }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={
            evt.image
              ? evt.image.formats.thumbnail.url
              : "/images/event-default.png"
          }
          width={170}
          height={100}
        />
      </div>

      <div className={styles.info}>
        <span>
          {new Date(evt.date).toLocaleDateString("en-US")} at {evt.time}
        </span>
        <h4>{evt.name}</h4>
        <p>
          <strong>{evt.performers}</strong>
        </p>
        <p>
          <>{evt.description}</>
        </p>
      </div>

      <div className={styles.link}>
        <Link href={`/events/${evt.slug}`}>
          <a className="btn btn-secondary btn-sm">Details</a>
        </Link>
      </div>
    </div>
  );
}
