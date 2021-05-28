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
import styles from "@/styles/Artists.module.css";
import { useRouter } from "next/router";

export default function ArtistPage({ artist }) {
  const router = useRouter();

  return (
    <Layout>
      <div className={styles.event}>
        <h1 className="text-center text-uppercase">{artist.name}</h1>
        <ToastContainer />
        {artist.image && (
          <div>
            <img
              className="img-fluid rounded mx-auto d-block"
              src={artist.image.formats.small.url}
            />
          </div>
        )}

        {/* Social Media icons */}

        <div className="text-center">
          <a href={artist.instagram} target_blank="true">
            <FaInstagram className="m-3 hoverup" />
          </a>
          <a href={artist.facebook} target_blank="true">
            <FaFacebookF className="m-3  hoverup" />
          </a>

          <a href={artist.twitter} target_blank="true">
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
            <em>{artist.tagline}</em>
          </strong>
        </p>

        <p className="text-danger text-right">
          <strong>
            <em>{artist.genre}</em>
          </strong>
          <hr />
        </p>
        <p className="text-justify">{artist.bio}</p>

        <p>{artist.spotify}</p>
        <p>{artist.applemusic}</p>

        <h3 className=" text-uppercase mt-4">
          {" "}
          <FaSpotify className="mr-3 hoverup" />
          Listen{" "}
        </h3>
        <hr />

        <iframe
          src={artist.spotifyembed}
          name="spotify"
          frameBorder="5"
          width="100%"
          height="300"
        ></iframe>

        <h3 className=" text-uppercase mt-4">
          <FaYoutube className="mr-3 hoverup" />
          Latest Video
        </h3>
        <hr />
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
        {/* <h3 className=" text-uppercase mt-4">
          <FaCalendarAlt className="mr-3 hoverup" /> Events{" "}
        </h3>
        <hr />

        <h3 className=" text-uppercase mt-4">
          <FaRegNewspaper className="mr-3 hoverup" /> News{" "}
        </h3>
        <hr /> */}

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
