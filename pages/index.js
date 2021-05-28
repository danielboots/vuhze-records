import Link from "next/link";
import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import NewsItem from "@/components/NewsItem";
import ReleaseItem from "@/components/ReleaseItem";
import StudioItem from "@/components/StudioItem";
import Aboutblock from "@/components/Aboutblock";

import { API_URL } from "@/config/index";

export default function HomePage({
  events,
  artists,
  releases,
  newsitems,
  studios,
}) {
  console.log(events);
  console.log(artists);
  console.log(releases);
  console.log(newsitems);
  console.log(studios);

  return (
    <Layout>
      <Aboutblock />

      <div className="box">
        <h3>Artists</h3>
        {artists.length === 0 && <h3>No Artists to show</h3>}
        {artists.map((artist) => (
          <div>
            <p key={artist.id} artist={artist}>
              <strong>{artist.name}</strong> <br />
              {artist.genre}
            </p>

            <img className="w-25 " src={artist.image.formats.small.url} />
          </div>
        ))}
        {artists.length > 0 && (
          <Link href="/artists">
            <a className="btn-secondary">View All Artists</a>
          </Link>
        )}
      </div>

      <div className="shadow p-3 mb-5 bg-white rounded">
        <h4 className="text-center text-uppercase">
          <strong>Latest Release :</strong>
        </h4>
        <h5 className="text-center text-danger"> {releases[0].artist}</h5>
        <h6 className="></div>text-center text-danger">{releases[0].code}</h6>
      </div>
      {releases.length === 0 && <h3>No Releases</h3>}
      {releases.map((releases) => (
        <ReleaseItem key={releases.id} releases={releases} />
      ))}
      {releases.length > 0 && (
        <div className="m-3 text-left ">
          <Link href="/news">
            <a className="btn-secondary ">All Releases</a>
          </Link>
        </div>
      )}

      <div className="shadow p-3 mb-5 brandbg rounded whitefont ">
        <h4 className="text-center text-uppercase ">
          <strong>Media</strong>
        </h4>
        <div className="container p-4 ">
          <iframe
            width="100%"
            height=""
            src="https://www.youtube.com/embed/a-2kSM1mmBM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="shadow p-3 mb-5 bg-white rounded">
        <h4 className="text-center text-uppercase">
          <strong>Latest News</strong>
        </h4>
      </div>
      {newsitems.length === 0 && <h3>No News to show</h3>}
      {newsitems.map((newsitems) => (
        <NewsItem key={newsitems.id} newsitems={newsitems} />
      ))}
      {newsitems.length > 0 && (
        <div className="m-3 text-left ">
          <Link href="/news">
            <a className="btn-secondary">All News</a>
          </Link>
        </div>
      )}

      <div className="shadow p-3 mb-5 brandbg rounded whitefont ">
        <h4 className="text-center text-uppercase ">
          <strong>Get Signed</strong>
        </h4>
        <div className="container ">
          <div className="text-justify text-center">
            <h5>
              ”Your voice expresses your heart – share it, sing it, shout it.”
            </h5>
            <div>
              <p className="text-justify text-center p-3 ">
                Do you want to develop as an artist with an already established
                brand and international pop superstar? Well heres your chance,
                simply submit your demos to our A&R team and you could get
                signed to INTIMACY RECORDS with a full Artist development
                programme, Remix Packages and worldwide releases.
              </p>
            </div>
            <div className="m-3 text-center ">
              <Link href="/contact">
                <a className="btn  btn-light">SUBMIT</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="shadow p-3 mb-5 bg-white rounded">
        <h4 className="text-center text-uppercase">
          <strong>Events</strong>
        </h4>
      </div>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
      {events.length > 0 && (
        <div className="m-3 text-left ">
          <Link href="/events">
            <a className="btn-secondary">View All Events</a>
          </Link>
        </div>
      )}

      <div className="shadow p-3 mb-5 bg-white rounded">
        <h4 className="text-center text-uppercase">
          <strong>Proudly Distributed by</strong>
        </h4>
        <div className="container">
          <div className="item ">
            <img className="dist" src="images/sony.png" alt="" />
          </div>
          <div className="item">
            <img className="dist" src="images/orchard.jpg" alt="" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

// Bring in multiple api routes, artists, events test.

export async function getServerSideProps() {
  const [eventRes, artistRes, releaseRes, newsitemRes, studioRes] =
    await Promise.all([
      await fetch(`${API_URL}/events?_sort=date:ASC&_limit=1`),
      await fetch(`${API_URL}/artists?_limit=3`),
      await fetch(`${API_URL}/releases?_limit=3`),
      await fetch(`${API_URL}/newsitems?_limit=3`),
      await fetch(`${API_URL}/studios?_limit=2`),
    ]);
  const [events, artists, releases, newsitems, studios] = await Promise.all([
    eventRes.json(),
    artistRes.json(),
    releaseRes.json(),
    newsitemRes.json(),
    studioRes.json(),
  ]);

  return { props: { events, artists, releases, newsitems, studios } };
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
