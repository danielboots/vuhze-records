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

export default function ReleasePage({ release }) {
  const router = useRouter();

  return (
    <Layout>
      <div className={styles.event}>
        <h3 className="text-uppercase text-center">
          Intimacy Records {release.code}: <br />
          <strong>{release.trackname}</strong>
        </h3>

        <ToastContainer />
        {release.artwork && (
          <div>
            <img
              className="img-fluid rounded mx-auto d-block"
              src={release.artwork.formats.thumbnail.url}
            />
          </div>
        )}

        <h4 className=" text-uppercase mt-4">
          <FaBars className="mr-3 hoverup" />
          <strong>RELEASE INFO</strong>
        </h4>

        <ul className="unstyled p-3">
          <li>
            <strong>Artists:</strong> {release.artist}
          </li>
          <li>
            <strong>Trackname:</strong> {release.trackname}
          </li>
          <li>
            <strong>Genre:</strong>
            <span className="text-danger">
              <strong>
                <em>{release.Genre}</em>
              </strong>
            </span>
          </li>
          <li>
            <strong>Release Code:</strong> {release.code}
          </li>
          <li>
            <strong>Publisher Info:</strong> {release.publisher}
          </li>
        </ul>

        <hr />
        <h4 className="text-uppercase text-center ">
          <strong>{release.headline}</strong>
        </h4>
        <p>{release.writeup}</p>

        <h3 className=" text-uppercase mt-4">
          <FaSpotify className="mr-3 hoverup" />
          <strong>Listen</strong>
        </h3>

        <iframe
          src={release.spotifyembed}
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
          src={release.youtubeembed}
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
  const res = await fetch(`${API_URL}/releases?release_id=${id}`);
  const release = await res.json();

  console.log(id);

  return {
    props: { release: release[0] },
  };
}
