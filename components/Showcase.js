import styles from "@/styles/Showcase.module.css";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Showcase() {
  return (
    <div className={styles.herohome}>
      <h1 className="brand-font"> INTIMACY RECORDS</h1>
      <div className={styles.container}>
        <div className="div text-center py-2 social">
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
      </div>
    </div>
  );
}
