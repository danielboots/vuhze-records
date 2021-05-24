import Link from "next/link";
import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import ArtistItem from "@/components/ArtistItem";
import { API_URL } from "@/config/index";
import Aboutblock from "@/components/Aboutblock";

export default function HomePage({ events, artists, releases }) {
  console.log(events);
  console.log(artists);
  console.log(releases);

  return (
    <Layout>
      <Aboutblock />

      <h3>Artists - our artists</h3>

      {/* {artists.length === 0 && <h3>No Artists to show</h3>}
      {artists.map((artist) => (
        <ArtistItem key={artist.id} artist={artist} />
      ))} 

      {artists.length > 0 && (
        <Link href="/artists">
          <a className="btn-secondary">View All Artists</a>
        </Link>
      )} */}

      <h3>Latest Releases </h3>
      <hr />

      <h3>Upcoming Events</h3>
      {/* {events.length === 0 && <h3>No events to show</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View All Events</a>
        </Link>
      )} */}
    </Layout>
  );
}

// Bring in multiple api routes, artists, events test.

export async function getServerSideProps() {
  const [eventRes, artistRes, releaseRes] = await Promise.all([
    await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`),
    await fetch(`${API_URL}/artists/`),
    await fetch(`${API_URL}/releases/`),
  ]);
  const [events, artists, releases] = await Promise.all([
    eventRes.json(),
    artistRes.json(),
    releaseRes.json(),
  ]);

  return { props: { events, artists, releases } };
}

// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
//   const events = await res.json();

//   return {
//     props: { events },
//   };
// }

// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/artists`);
//   const artists = await res.json();

//   return {
//     props: { artists },
//   };
// }
