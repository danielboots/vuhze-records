import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";

import { API_URL } from "@/config/index";
import styles from "@/styles/Artists.module.css";
import { useRouter } from "next/router";

export default function ArtistPage({ artist }) {
  const router = useRouter();

  return (
    <Layout>
      <div className={styles.event}>
        <span></span>
        <h1>{artist.name}</h1>
        <ToastContainer />
        {artist.image && (
          <div className={styles.image}>
            <Image
              src={artist.image.formats.medium.url}
              width={960}
              height={600}
            />
          </div>
        )}

        <h3>Performers:</h3>
        <p></p>
        <h3>Description:</h3>
        <p></p>
        <h3>Venue: </h3>
        <p></p>

        <Link href="/events">
          <a className={styles.back}>{"<"} Go Back</a>
        </Link>
      </div>
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/events`)
//   const events = await res.json()

//   const paths = events.map((artist) => ({
//     params: { artist_id: artist.artist_id },
//   }))

//   return {
//     paths,
//     fallback: true,
//   }
// }

// export async function getStaticProps({ params: { artist_id } }) {
//   const res = await fetch(`${API_URL}/events?artist_id=${artist_id}`)
//   const events = await res.json()

//   return {
//     props: {
//       artist: events[0],
//     },
//     revalidate: 1,
//   }
// }

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`${API_URL}/artists?artist_id=${id}`);
  const artist = await res.json();

  console.log(id);

  return {
    props: { artist: artist[0] },
  };
}
