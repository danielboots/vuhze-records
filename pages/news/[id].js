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
import styles from "@/styles/NewsItem.module.css";
import { useRouter } from "next/router";

export default function NewsItemPage({ newsitem }) {
  const router = useRouter();

  return (
    <Layout>
      <div className={styles.event}>
        <span></span>
        <h1 className="text-center text-uppercase">{newsitem.headline}</h1>
        <ToastContainer />
        {newsitem.image && (
          <div>
            <img
              className="img-fluid rounded mx-auto d-block"
              src={newsitem.image.formats.thumbnail.url}
            />
          </div>
        )}

        <p>{newsitem.writeup}</p>
      </div>
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/events`)
//   const events = await res.json()

//   const paths = events.map((newsitem) => ({
//     params: { newsitem_id: newsitem.newsitem_id },
//   }))

//   return {
//     paths,
//     fallback: true,
//   }
// }

// export async function getStaticProps({ params: { newsitem_id } }) {
//   const res = await fetch(`${API_URL}/events?newsitem_id=${newsitem_id}`)
//   const events = await res.json()

//   return {
//     props: {
//       newsitem: events[0],
//     },
//     revalidate: 1,
//   }
// }

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`${API_URL}/newsitems?newsitem_id=${id}`);
  const newsitem = await res.json();

  console.log(id);

  return {
    props: { newsitem: newsitem[0] },
  };
}
