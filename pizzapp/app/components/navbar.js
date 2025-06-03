'use client';
import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';


export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const logged = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(logged == 'true');
  }, []);

  const handleLogout = async () => {
    // Appel logout backend pour détruire la session serveur
    await fetch('http://localhost:3001/auth/logout', {
      method: 'POST',
      credentials: 'include'
    });

    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = '/login';
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.nav_item}><Image src="/features/logo_pizzia.png" alt="logo" width={70} height={70} /></div>
      <Link href='/profil' className={styles.nav_item}>ACCEUIL</Link>
      <Link href="/offres" className={styles.nav_item}>OFFRES</Link>
      <Link href="/commands" className={`${styles.nav_item} ${styles.link_commands}`}>COMMANDES</Link>
      {!isLoggedIn && (
        <Link href="/login" className={styles.nav_item}>CONNEXION</Link>
      )}

      {isLoggedIn && (
        <>
          <Link href="/profile" className={styles.nav_item}>PROFILE</Link>
          <button onClick={handleLogout} className={styles.btn_deconnexion}><Image src="/features/exit.png" alt="logo" width={20} height={20}/></button>
        </>
      )}
    </nav>
  );
}
