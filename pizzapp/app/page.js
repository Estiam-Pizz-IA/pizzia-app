import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className={styles.container}>
     <Navbar />

       <div className={styles.container_two}>
        <div className={styles.blocs}>
          <div className={styles.bloc_left}>
            <div className={styles.commands}></div>
          </div>
          <div className={styles.bloc_right}>
            <div className={styles.custom}></div>
            <div className={styles.offre}></div>
          </div>
        </div>
      </div>

      <div className={styles.container_three}>
        <div className={styles.container_card}>
          <div className={`${styles.card} ${styles.edenred}`}></div>
          <div className={`${styles.card} ${styles.price}`}></div>
          <div className={`${styles.card} ${styles.score}`}></div>
        </div>
      </div>
    </div>
  );
}
