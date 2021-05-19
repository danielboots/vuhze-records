import Link from "next/link";
import styles from "@/styles/Footer.module.css";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="div">
        <div className="div text-center py-2">
          <a href="#" target_blank="true">
            <FaInstagram className="m-3 hoverup" />
          </a>
          <a href="#" target_blank="true">
            <FaFacebookF className="m-3  hoverup" />
          </a>

          <a href="#" target_blank="true">
            <FaTwitter className="m-3 hoverup " />
          </a>
        </div>
        <p className="py-3 hoverup">Copyright &copy; INTIMACY RECORDS 2021</p>
      </div>
    </footer>
  );
}
