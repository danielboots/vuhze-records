import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import {
  FaSpotify,
  FaApple,
  FaYoutube,
  FaBars,
  FaRegNewspaper,
} from "react-icons/fa";

import { API_URL } from "@/config/index";
import styles from "@/styles/Releases.module.css";
import { useRouter } from "next/router";

export default function ArtistPage({ artist }) {
  const router = useRouter();

  return (
    <Layout>
      <div className={styles.event}>
        <h3 className="text-uppercase text-center">
          Intimacy Records {artist.name}: <br />
        </h3>
        <p className="text-center"> {artist.tagline}</p>

        <ToastContainer />
        {artist.image && (
          <div>
            <img
              className="img-fluid rounded mx-auto d-block"
              src={artist.image.formats.small.url}
            />
          </div>
        )}

        <h4 className=" text-uppercase mt-4">
          <FaBars className="mr-3 hoverup" />
          <strong>Artist Info</strong>
        </h4>

        <ul className="unstyled p-3">
          <li>
            <strong>Name:</strong> {artist.name}
          </li>
          <li>
            <strong>Tagline:</strong> {artist.tagline}
          </li>
          <li>
            <strong>Genre:</strong>
            <span className="text-danger">
              <strong>
                <em>{artist.genre}</em>
              </strong>
            </span>
          </li>
        </ul>
        <p>{artist.bio}</p>

        <hr />
        <h4 className="text-uppercase text-center ">
          <strong>{artist.headline}</strong>
        </h4>
        <p>{artist.writeup}</p>

        <h3 className=" text-uppercase mt-4">
          <FaSpotify className="mr-3 hoverup" />
          <strong>Listen</strong>
        </h3>

        <iframe
          src={artist.spotifyembed}
          name="spotify"
          frameBorder="5"
          width="100%"
          height="300"
        ></iframe>

        <h3 className=" text-uppercase mt-4">
          <FaYoutube className="mr-3 hoverup" />
          <strong>Video</strong>
        </h3>

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

        <Link href="/">
          <a className={styles.back}>{"<"} Go Back</a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`${API_URL}/artists?artist_id=${id}`);
  const artist = await res.json();

  console.log(id);

  return {
    props: { artist: artist[0] },
  };
}
