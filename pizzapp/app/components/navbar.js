import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';


export default function Navbar() {
  return (
    <nav className={styles.nav}>
       <div className={styles.nav_item}><Image src="/features/logo_pizzia.png" alt="logo" width={70} height={70} /></div>
        <div className={styles.nav_item}>ACCEUIL</div>
        <div className={styles.nav_item}>OFFRES</div>
        <Link href="/commands" className={`${styles.nav_item} ${styles.link_commands}`}>COMMANDES</Link>
        <Link href="/login" className={`${styles.nav_item} ${styles.link_login}`}>CONNEXION</Link>
    </nav>
  );
}
