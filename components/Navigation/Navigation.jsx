import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li>
                    <Link href="/">
                        <img src="/logo.png" alt="watch logo" className={styles.logo}/>
                    </Link>
                </li>
                <li>
                    <Link href="/catalog" className={styles.link}>
                        Catalog
                    </Link>
                </li>
                <li>
                    <Link href="/about" className={styles.link}>
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
