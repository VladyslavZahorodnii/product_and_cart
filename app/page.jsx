import Link from "next/link";
import styles from './page.module.css';

export default function Home() {
  return (
      <>
          <main>
              <h1>Please navigate to the Catalog page</h1>
              <p>There, you will find the perfect watches tailored just for you.</p>
              <Link className={styles.link} href="/catalog">Start shopping</Link>
          </main>
      </>
  );
}
