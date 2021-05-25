import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/StudioItem.module.css";

export default function StudioItem({ studios }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        {/* <Image
          src={
            studios.image
              ? studios.image.formats.thumbnail.url
              : "/images/event-default.png"
          }
          width={170}
          height={100}
        /> */}
      </div>

      <div className={styles.info}>
        <span></span>
        <h5>
          <strong>{studios.name}</strong>{" "}
        </h5>
        <p>
          <em>{studios.description}</em>
        </p>
        <p>
          <strong>{studios.address}</strong>
        </p>
      </div>

      <div className={styles.link}>
        <Link href={`/studios/${studios.studio_id}`}>
          <a className="btn btn-secondary ">More Info</a>
        </Link>
      </div>
    </div>
  );
}
