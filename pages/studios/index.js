import Layout from "@/components/Layout";
import Link from "next/link";
import StudioItem from "@/components/StudioItem";
import styles from "@/styles/Studio.module.css";
import { API_URL } from "@/config/index";

export default function StudiosPage({ studios }) {
  return (
    <Layout>
      <div className={styles.herohome}>
        <h1 className="brand-font text-uppercase text-center">
          <strong>Studios / Services</strong>
        </h1>
        <div className={styles.container}></div>
      </div>
      <div className="shadow p-3 mb-5 bg-white rounded  ">
        <h4 className="text-center text-uppercase ">
          <strong>Music Production Services </strong>
        </h4>
        <div className="container ">
          <div className="text-justify text-center">
            <h5>
              ”Intimacy Records and their engineers delivered a world class
              record”
            </h5>
            <div>
              <p className="text-justify text-center p-3 ">
                Intimacy Records have a team of Songwriters, engineers, mix and
                records producers ready to help you in your musical journey, Our
                facilities and studios are located in the north of the UK, and
                in Geneva Switzerland with accomodation available.
              </p>
            </div>

            <div className="text-left ">
              <ul className="list-unstyled">
                <li>
                  <strong>Music Production</strong>
                  <p>
                    We offer a full music production service, from initial
                    concept to final mixed and mastered track.
                  </p>
                </li>
                <hr />
                <li>
                  <strong>Remix</strong>
                  <p>
                    REMIX is perfect for when you already have a great track but
                    you need to attract the attention of a wide range of DJs.
                  </p>
                </li>
                <hr />
                <li>
                  <strong>Mixdown</strong>
                  <p>
                    This service allows our clients to take their productions to
                    the next level.
                  </p>
                </li>
                <hr />
                <li>
                  <strong>Mastering</strong>
                  <p>
                    Mastering is the final step in perfecting your record. Let
                    us add the polish and punch needed.
                  </p>
                </li>
                <hr />
                <li>
                  <strong>Consultancy and Distribution</strong>
                  <p>
                    Our expert team can aid you to launch your music career with
                    our Consultancy and full track promotion and distribution
                    services. We offer a full music production service, from
                    initial concept to final mixed and mastered track.
                  </p>
                </li>
                <hr />
              </ul>
            </div>
            <div className="m-3 text-center ">
              <Link href="/contact">
                <a className="btn  btn-light text-uppercase">Enquire</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-uppercase text-center">
        <strong>Our Studios</strong>{" "}
      </h2>
      {studios.length === 0 && <h3>No Studios</h3>}

      {/* {studios.map((studios) => (
        <div>
          <h3>{studios.name}</h3>
          <h3>{studios.description}</h3>
          <h3>{studios.address}</h3>
          <h3>{studios.id}</h3>
          <h3>{studios.image.formats.thumbnail.url}</h3>
        </div>
      ))} */}

      {studios.map((studios) => (
        <StudioItem key={studios.id} studios={studios} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/studios/`);
  const studios = await res.json();

  return {
    props: { studios },
  };
}
