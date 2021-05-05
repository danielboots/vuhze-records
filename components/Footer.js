import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <p>Copyright &copy: Intimacy Records 2021</p>
      <p>
        <Link href="/about">About</Link>
      </p>
    </footer>
  );
}
