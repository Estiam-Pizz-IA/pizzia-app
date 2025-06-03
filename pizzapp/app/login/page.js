'use client';
import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      });

      const data = await res.status;

      if (res.status!=200) {
        alert(data.details || "Erreur lors de la connexion");
        return;
      }

      localStorage.setItem('isLoggedIn', 'true');
      alert('Connexion réussi');
      router.push('/home')
    } catch (error) {
      console.log("Erreur API", error);
      alert('Erreur lors de la connexion')
    }
  }
  return (
    <div className={styles.contain}>
      <div className={styles.contain_form}>
        <div className={styles.contain_left}>
          <div className={styles.bloc_decoration}>
            <div className={`${styles.circle} ${styles.circle_left}`}></div>
          </div>
        </div>

        <div className={styles.contain_right}>
          <form className={styles.form} onSubmit={handleLogin}>
            <h1>Connexion</h1>

            <div className={styles.contain_input}>
              <input type="text" placeholder="Adresse email" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className={styles.contain_input}>
              <input type="password" placeholder="Mot de passe" className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <button className={styles.btn_connexion}>Connexion</button>

            <div className={styles.separator}>
              <hr className={styles.line} />
              <span className={styles.text}>ou</span>
              <hr className={styles.line} />
            </div>

            <Link href="/register">
              <button className={styles.btn_inscription}>Inscription</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
