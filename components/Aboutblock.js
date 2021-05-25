import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Aboutblock.module.css";

function Aboutblock() {
  return (
    <div className={styles.box}>
      <h2 className=" text-center text-uppercase">About</h2>
      <p className=" text-center text-justify">
        Welcome to Intimacy Records – By K-Syran, we are an independent record
        label distributed by Sony, established in 2018 by Norwegian
        international Pop superstar K-Syran. Aimed as an outlet for her new
        music and also to nuture up and coming talent. Your voice expresses your
        heart – share it, sing it, shout it.
      </p>
      <img className={styles.img} src="images/sig.png" alt="" />
    </div>
  );
}

export default Aboutblock;
