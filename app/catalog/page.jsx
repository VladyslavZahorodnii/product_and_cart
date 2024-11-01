"use client";

import { useContext } from "react";
import PRODUCTS from "@/data/products";
import { CartContext } from "@/store/shopping-cart-context";
import styles from "./page.module.css";

export default function CatalogPage() {
  const { addItemToCart } = useContext(CartContext);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Catalog</h1>
      <div className={styles.grid}>
        {PRODUCTS.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.productImage}
            />
            <h2 className={styles.productName}>{product.name}</h2>
            <p className={styles.productPrice}>${product.price}</p>
            <p className={styles.productDescription}>{product.description}</p>
            <button
              className={styles.addToCartButton}
              onClick={() => addItemToCart(product.id)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
