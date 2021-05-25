import Layout from "@/components/Layout";
import Link from "next/link";
import StudioItem from "@/components/StudioItem";
import { API_URL } from "@/config/index";

export default function StudiosPage({ studios }) {
  return (
    <Layout>
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
