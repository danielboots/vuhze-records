// import styles from "@/styles/Showcase.module.css";

// export default function Showcase() {
//   return (
//     <div className={styles.showcase}>
//       <h1 className="font-serif, text-purple-600">Intimacy Records</h1>
//       <h2>Music / Artists / Services</h2>
//     </div>
//   );
// }

/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div className="relative ">
      <div className="absolute inset-0 ">
        <img
          className="w-full h-full object-cover"
          src="https://www.intimacyrecords.co.uk/wp-content/uploads/2019/02/Background-Ad.png"
          alt=""
        />
        <div
          className="absolute inset-0 bg-indigo-100 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl text-center uppercase">
          Intimacy Records
        </h1>
      </div>
    </div>
  );
}
