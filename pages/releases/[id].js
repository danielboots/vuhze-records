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
import styles from "@/styles/Releases.module.css";
import { useRouter } from "next/router";

export default function ReleasePage({ release }) {
  const router = useRouter();

  return (
    <Layout>
      <div className={styles.event}>
        <span></span>
        <h1 className="text-center text-uppercase">{release.trackname}</h1>
        <ToastContainer />
        {release.image && (
          <div>
            <img
              className="img-fluid rounded mx-auto d-block"
              src={release.image.formats.small.url}
            />
          </div>
        )}

        {/* Social Media icons */}

        <div className="text-center">
          <a href={release.instagram} target_blank="true">
            <FaInstagram className="m-3 hoverup" />
          </a>
          <a href={release.facebook} target_blank="true">
            <FaFacebookF className="m-3  hoverup" />
          </a>

          <a href={release.twitter} target_blank="true">
            <FaTwitter className="m-3 hoverup " />
          </a>
        </div>

        <h3 className=" text-uppercase mt-4">
          {" "}
          <FaBars className="mr-3 hoverup" />
          Bio
        </h3>
        <p className="text-justify">
          <strong>
            <hr />
            <em>{release.tagline}</em>
          </strong>
        </p>

        <p className="text-danger text-right">
          <strong>
            {" "}
            <em>{release.genre}</em>
          </strong>
          <hr />
        </p>
        <p className="text-justify">{release.bio}</p>

        <p>{release.spotify}</p>
        <p>{release.applemusic}</p>

        <h3 className=" text-uppercase mt-4">
          {" "}
          <FaSpotify className="mr-3 hoverup" />
          Listen{" "}
        </h3>
        <hr />

        <iframe
          src={release.spotifyembed}
          name="spotify"
          frameBorder="5"
          width="100%"
          height="300"
        ></iframe>

        <h3 className=" text-uppercase mt-4">
          <FaYoutube className="mr-3 hoverup" />
          Latest Video{" "}
        </h3>
        <hr />
        <iframe
          id="youtube-embed"
          name="youtubeIFrame"
          width="100%"
          height="315"
          src={release.youtubeembed}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h3 className=" text-uppercase mt-4">
          <FaCalendarAlt className="mr-3 hoverup" /> Events{" "}
        </h3>
        <hr />

        <h3 className=" text-uppercase mt-4">
          <FaRegNewspaper className="mr-3 hoverup" /> News{" "}
        </h3>
        <hr />

        <Link href="/">
          <a className={styles.back}>{"<"} Go Back</a>
        </Link>
      </div>
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/events`)
//   const events = await res.json()

//   const paths = events.map((release) => ({
//     params: { release_id: release.release_id },
//   }))

//   return {
//     paths,
//     fallback: true,
//   }
// }

// export async function getStaticProps({ params: { release_id } }) {
//   const res = await fetch(`${API_URL}/events?release_id=${release_id}`)
//   const events = await res.json()

//   return {
//     props: {
//       release: events[0],
//     },
//     revalidate: 1,
//   }
// }

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`${API_URL}/releases?release_id=${id}`);
  const release = await res.json();

  console.log(id);

  return {
    props: { release: release[0] },
  };
}
