import Layout from "@/components/Layout";
import StudioItem from "@/components/StudioItem";
import { API_URL } from "@/config/index";

export default function StudiosPage({ studios }) {
  return (
    <Layout>
      <h2 className="text-uppercase text-center">
        {" "}
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
