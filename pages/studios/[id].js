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
import styles from "@/styles/Studio.module.css";
import { useRouter } from "next/router";

export default function StudioItemPage({ studio }) {
  const router = useRouter();
  console.log(studio);

  return (
    <Layout>
      <div className={styles.event}>
        <h3>{studio.name}</h3>
        <p>{studio.description}</p>
        {studio.image && (
          <div>
            <img
              className="img-fluid rounded mx-auto d-block"
              src={studio.image.formats.small.url}
            />
          </div>
        )}

        <h4>Gallery</h4>

        <img src={studio.gallery[0].formats.small.url} alt="image1" />
        {/* <img src={studio.gallery[1].formats.small.url} alt="image2" />
        <img src={studio.gallery[2].formats.small.url} alt="image3" />
        <img src={studio.gallery[3].formats.small.url} alt="image4" />
        <img src={studio.gallery[4].formats.small.url} alt="image5" />
        <img src={studio.gallery[5].formats.small.url} alt="image6" /> */}

        <h6 className="text-center">Address: {studio.address}</h6>
        <Link href="/studios">
          <a className={styles.back}> Go Back</a>
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
