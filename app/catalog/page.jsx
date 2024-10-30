import PRODUCTS from '../../data/products';
import styles from './page.module.css';

export default function CatalogPage() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Catalog</h1>
            <div className={styles.grid}>
                {PRODUCTS.map(product => (
                    <div key={product.id} className={styles.productCard}>
                        <img src={product.image} alt={product.name} className={styles.productImage} />
                        <h2 className={styles.productName}>{product.name}</h2>
                        <p className={styles.productPrice}>${product.price}</p>
                        <p className={styles.productDescription}>{product.description}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}