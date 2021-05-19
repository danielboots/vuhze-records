import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useContext } from "react";
import Link from "next/link";
import Search from "./Search";
import AuthContext from "@/context/AuthContext";
import styles from "@/styles/Header.module.css";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

// export default function Header() {
//   const { user, logout } = useContext(AuthContext);

//   return (
//     <header className={styles.header}>
//       <div className={styles.logo}>
//         <Link href="/">
//           <a>DJ Events</a>
//         </Link>
//       </div>

//       <Search />

//       <nav>
//         <ul>
//           <li>
//             <Link href="/events">
//               <a>Events</a>
//             </Link>
//           </li>
//           {user ? (
//             // If logged in
//             <>
//               <li>
//                 <Link href="/events/add">
//                   <a>Add Event</a>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/account/dashboard">
//                   <a>Dashboard</a>
//                 </Link>
//               </li>
//               <li>
//                 <button
//                   onClick={() => logout()}
//                   className="btn-secondary btn-icon "
//                 >
//                   <FaSignOutAlt /> Logout
//                 </button>
//               </li>
//             </>
//           ) : (
//             // If logged out
//             <>
//               <li>
//                 <Link href="/account/login">
//                   <a className="btn-secondary btn-icon">
//                     <FaSignInAlt /> Login
//                   </a>
//                 </Link>
//               </li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// }

/* This example requires Tailwind CSS v2.0+ */

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center  sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="images/label-cover-white.png"
                    alt="Intimacy Records"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="images/label-cover-white.png"
                    alt="Intimacy Records"
                  />
                  <Search />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link href="/events">
                    <a className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Events
                    </a>
                  </Link>

                  {user ? (
                    //             // If logged in
                    <>
                      <Link href="/events/add">
                        <a className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                          Add Event
                        </a>
                      </Link>

                      <Link href="/account/dashboard">
                        <a className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                          Dashboard
                        </a>
                      </Link>

                      <button
                        onClick={() => logout()}
                        className="btn-secondary btn-icon border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium "
                      >
                        <FaSignOutAlt /> Logout
                      </button>
                    </>
                  ) : (
                    // If logged out
                    <>
                      <li>
                        <Link href="/account/login">
                          <a className="btn-secondary btn-icon">
                            <FaSignInAlt /> Login
                          </a>
                        </Link>
                      </li>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <a
                href="#"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Artists
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Releases
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Services
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
