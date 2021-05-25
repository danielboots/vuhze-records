import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaSpotify,
  FaApple,
  FaYoutube,
  FaBars,
  FaRegNewspaper,
  FaCalendarAlt,
} from "react-icons/fa";

import { API_URL } from "@/config/index";
import styles from "@/styles/Event.module.css";
import { useRouter } from "next/router";

export default function StudioItemPage({ studio }) {
  const router = useRouter();

  return (
    <Layout>
      <div className={styles.event}>
        <h1>{studio.name}</h1>

        <p>{studio.description}</p>

        <h3>Address: {studio.address}</h3>

        <Link href="/studios">
          <a className={styles.back}>{"<"} Go Back</a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`${API_URL}/studios?studio_id=${id}`);
  const studio = await res.json();

  console.log(id);

  return {
    props: { studio: studio[0] },
  };
}
