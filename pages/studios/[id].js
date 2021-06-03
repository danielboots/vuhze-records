import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

import Layout from "@/components/Layout";
import StudioMap from "@/components/StudioMap";
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

import { Container, Row, Col, Image } from "react-bootstrap";

import { API_URL } from "@/config/index";
import styles from "@/styles/Studio.module.css";
import { useRouter } from "next/router";

export default function StudioItemPage({ studio }) {
  const router = useRouter();
  console.log(studio);

  return (
    <Layout>
      <div className={styles.event}>
        <h3 className="text-uppercase text-center">
          <strong>{studio.name}</strong>
        </h3>

        {studio.image && (
          <div>
            <img
              className="img-fluid rounded mx-auto d-block py-5"
              src={studio.image.formats.small.url}
            />
          </div>
        )}
        <p className="text-justify p-3">{studio.description}</p>

        <h4 className="text-uppercase ">
          <strong>Gallery:</strong>
        </h4>

        <Container>
          <Row>
            <Col xs={12} md={6} lg={3}>
              <Image
                layout="fill"
                src={studio.gallery[0].formats.small.url}
                fluid="true"
              />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Image
                layout="fill"
                src={studio.gallery[1].formats.small.url}
                fluid="true"
              />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Image
                layout="fill"
                src={studio.gallery[2].formats.small.url}
                fluid="true"
              />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Image
                layout="fill"
                src={studio.gallery[3].formats.small.url}
                fluid="true"
              />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Image
                layout="fill"
                src={studio.gallery[4].formats.small.url}
                fluid="true"
              />
            </Col>
          </Row>
        </Container>

        {/* <div className={styles.row}>
          <div className={styles.column}>
            <img src={studio.gallery[0].formats.small.url} alt="image1" />
            <img src={studio.gallery[1].formats.small.url} alt="image2" />
            <img src={studio.gallery[2].formats.small.url} alt="image3" />
            <img src={studio.gallery[3].formats.small.url} alt="image4" />
            <img src={studio.gallery[4].formats.small.url} alt="image5" />
          </div>
        </div> */}

        <div className="my-5">
          <h4 className="text-uppercase">
            <strong>Kitlist:</strong>
          </h4>
          <h6>Hardware</h6>
          <p>{studio.hardware}</p>

          <h6>Software</h6>
          <p>{studio.software}</p>
          <h6>Instruments</h6>
          <p>{studio.instruments}</p>
        </div>

        <div className="my-5">
          <h4 className="text-uppercase">
            <strong>Find us:</strong>{" "}
          </h4>
          <h6 className="text-left">Address: {studio.address}</h6>
        </div>
        <StudioMap studio={studio} />
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
