import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useContext } from "react";
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from "react-bootstrap";
import Link from "next/link";
import Search from "./Search";
import AuthContext from "@/context/AuthContext";
import styles from "@/styles/Header.module.css";

export default function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <Navbar
      collapseOnSelect
      className={styles.Navbar}
      expand="lg"
      bg=""
      fixed=""
    >
      <Navbar.Brand className={styles.logo}>
        <Nav.Link>
          <Link href="/">
            <a>
              <strong className={styles.NavBrand}>Intimacy Records</strong>
            </a>
          </Link>
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navbar-nav ml-auto ">
          <Link href="/artists">
            <a className={styles.NavItem}>Artists</a>
          </Link>

          <Link href="/releases">
            <a className={styles.NavItem}>Releases</a>
          </Link>

          <Link href="/news">
            <a className={styles.NavItem}>News</a>
          </Link>

          <Link href="/events">
            <a className={styles.NavItem}>Events</a>
          </Link>

          <Link href="/studios">
            <a className={styles.NavItem}>Services</a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    // <header className={styles.header}>
    //   <div className={styles.logo}>
    //     <Link href="/">
    //       <a>INTIMACY Records</a>
    //     </Link>
    //   </div>

    /* <Search /> */

    /* <nav>
        <ul>
          <li className={`${styles.hovernav} ${styles.navlink}`}>
            <Link href="/artists">
              <a>Artists</a>
            </Link>
          </li>

          <li className={`${styles.hovernav} ${styles.navlink}`}>
            <Link href="/releases">
              <a>Releases</a>
            </Link>
          </li>

          <li className={`${styles.hovernav} ${styles.navlink}`}>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
          <li className={`${styles.hovernav} ${styles.navlink}`}>
            <Link href="/news">
              <a>News</a>
            </Link>
          </li>
          <li className={`${styles.hovernav} ${styles.navlink}`}>
            <Link href="/studios">
              <a>Studios</a>
            </Link>
          </li> */
    /* {user ? (
            // If logged in
            <>
              <li className={`${styles.hovernav} ${styles.navlink}`}>
                <Link href="/account/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => logout()}
                  className="btn-secondary btn-icon font-weight-bold"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </>
          ) : (
            // If logged out
            <>
              <li>
                <Link href="/account/login">
                  <a className="btn-secondary btn-icon font-weight-bold">
                    <FaSignInAlt /> Login
                  </a>
                </Link>
              </li>
            </>
          )} */
    /* </ul>
      </nav>
    </header> */
  );
}
