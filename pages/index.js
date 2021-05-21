import Link from "next/link";
import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";

import { API_URL } from "@/config/index";
import Aboutblock from "@/components/Aboutblock";
import ArtistItem from "@/components/ArtistItem";
import News from "@/components/News";

export default function HomePage({ events }) {
  return (
    <Layout>
      <Aboutblock />

      <h3>Artists </h3>
      <hr />
      <h3>Latest Releases </h3>
      <hr />

      <h3>Upcoming Events</h3>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View All Events</a>
        </Link>
      )}
      <hr />
      <News />
      <hr />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
