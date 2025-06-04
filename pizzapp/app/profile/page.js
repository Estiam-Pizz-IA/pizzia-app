'use client';

import styles from './page.module.css';
import Navbar from '../components/navbar';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch('http://localhost:3001/auth/profile', {
        method: 'GET',
        credentials: 'include'
      });

      if (res.status === 200) {
        const userData = await res.json();
        setUser(userData);
      } else {
        localStorage.removeItem('isLoggedIn');
        router.push('/login');
      }
    };

    fetchProfile();
  }, [router]);

  if (!user) return null;

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.profil_commands}>
          <div className={styles.profil}>
            <div className={styles.container_profil}>
              <div className={styles.title}><Image src="/features/photo_profil.png"  alt="logo" width={120} height={120} /></div>
            </div>
            <div className={styles.profil_item}><p>email : {user.email}</p></div>
            <div className={styles.profil_item}><p>firstName : {user.firstName}</p></div>
            <div className={styles.profil_item}><p>lastName : {user.lastName}</p></div>
          </div>
          <div className={styles.commands}></div>
        </div>
      </div>
    </div>
  )
}
