import styles from './page.module.css';
import Link from 'next/link';

export default function Login() {
  return (
    <div className={styles.contain}>
      <div className={styles.contain_form}>
        <div className={styles.contain_left}>
          <div className={styles.bloc_decoration}>
            <div className={`${styles.circle} ${styles.circle_left}`}></div>
          </div>
        </div>

        <div className={styles.contain_right}>
          <div className={styles.form}>
            <h1>Connexion</h1>

            <div className={styles.contain_input}>
              <input type="text" placeholder="Adresse email" className={styles.input} />
            </div>

            <div className={styles.contain_input}>
              <input type="password" placeholder="Mot de passe" className={styles.input} />
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

          </div>
        </div>
      </div>
    </div>
  );
}
