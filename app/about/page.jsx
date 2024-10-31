import styles from "./page.module.css";

export default function AboutPage() {
    return (
        <main className={styles.about}>
            <section className={styles.hero}>
                <h1>About Us</h1>
                <p>Discover the story behind our passion for quality timepieces.</p>
            </section>

            <section className={styles.story}>
                <h2>Our Story</h2>
                <p>
                    Founded in 2023, Watch Shop was born out of a love for precision and timeless style.
                    Our journey began with a vision to bring high-quality watches to people who appreciate
                    fine craftsmanship and elegant design.
                </p>
            </section>
            <section className={styles.mission}>
                <h2>Our Mission</h2>
                <p>
                    We strive to deliver the finest watches that combine modern innovation with classic elegance.
                    Our mission is to create timepieces that are not only functional but also embody the style
                    and personality of each wearer.
                </p>
            </section>
        </main>
    );
}
