import Link from 'next/link';
import styles from './layout.module.css';

export default function AdminLayout({ children }) {
  return (
    <div>
      <nav className={styles.navbar}>
        <Link href="/admin/products" className={styles.navLink}>Produits</Link>
        <Link href="/admin/orders" className={styles.navLink}>Commandes</Link>
      </nav>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}
