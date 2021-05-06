import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";

export default function NoFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <FaExclamationTriangle /> 404
        <h4>Sorry, there is nothing here.. go back see! </h4>
        <Link href="/">Go Back Home</Link>
      </div>
    </Layout>
  );
}
