'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function Inscription() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' ou 'error'

  const showMessage = (msg, type = 'succes') => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 3000);
  }

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3001/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, lastName, firstName }),
      });

      const data = await res.json();


      if (!res.ok) {
        showMessage(data.details || "Erreur à l'inscription");
        return;
      }

      showMessage('Inscription réussi');
      router.push('/login');
    } catch (err) {
      console.error('Erreur API:', err);
      showMessage('Erreur lors de l’inscription');
    }
  }
  return (
    <div className={styles.container}>
      {message && (
        <div className={`${styles.message} ${messageType === 'error' ? styles.error : styles.success}`}>
          {message}
        </div>
      )}
      <div className={styles.contain_form}>
        <form onSubmit={handleRegister} className={styles.form}>
          <h1>PizzIA Inscription</h1>
          <input type="text" placeholder="Adresse email" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="Nom" className={styles.input} value={lastName} onChange={(e) => setLastname(e.target.value)} />
          <input type="text" placeholder="Prénom" className={styles.input} value={firstName} onChange={(e) => setFirstname(e.target.value)} />
          <input type="password" placeholder="Mot de dpasse" className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className={styles.button_inscription}>INSCRIPTION</button>
        </form>
      </div>
    </div>
  );
}
