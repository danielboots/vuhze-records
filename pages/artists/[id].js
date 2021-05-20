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
        <h1 className="text-center text-uppercase">{artist.name}</h1>
        <ToastContainer />
        {artist.image && (
          <div>
            <img
              className="img-fluid rounded mx-auto d-block"
              src={artist.image.formats.small.url}
            />

            {/* <Image
              src={artist.image.formats.medium.url}
              width={960}
              height={700}
            /> */}
          </div>
        )}

        <h3 className=" text-uppercase">Bio</h3>
        <p>{artist.tagline}</p>
        <p>{artist.bio}</p>
        <h3 className=" text-uppercase">Latest Music</h3>
        <p>{artist.spotify}</p>
        <p>{artist.applemusic}</p>
        <p>{artist.genre}</p>
        <h3 className=" text-uppercase">Social Media </h3>

        <iframe
          src={artist.spotifyembed}
          name="spotify"
          frameBorder="5"
          width="100%"
          height="300"
        ></iframe>

        <iframe
          id="youtube-embed"
          name="youtubeIFrame"
          width="100%"
          height="315"
          src={artist.youtubeembed}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <p>{artist.instagram}</p>
        <p>{artist.facebook}</p>
        <p>{artist.twitter}</p>

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
