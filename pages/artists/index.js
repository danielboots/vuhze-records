import Layout from "@/components/Layout";
import Artist from "@/components/Artist";
import styles from "@/styles/Artists.module.css";
import { API_URL } from "@/config/index";
import { Container, Row, Col } from "react-bootstrap";

export default function ArtistsPage({ artists }) {
  return (
    <Layout>
      <div className={styles.herohome}>
        <h1 className="brand-font text-uppercase text-center">
          <strong>Artists</strong>
        </h1>
        <div className={styles.container}></div>
      </div>

      {artists.length === 0 && <h3>No artists</h3>}
      <Container fluid="true" className="m-3">
        <Row className="show-grid">
          {artists.map((artists) => (
            <Col xs={12} md={12} lg={6}>
              <Artist key={artists.id} artists={artists} />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/artists`);
  const artists = await res.json();

  return {
    props: { artists },
  };
}
