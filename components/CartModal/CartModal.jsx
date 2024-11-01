"use client";

import { useContext } from "react";
import Link from "next/link";
import CartItem from "@/components/CartItem/CartItem";
import { CartContext } from "@/store/shopping-cart-context";
import styles from "./CartModal.module.css";

export default function CartModal({ onClickCart }) {
  const { items, onUpdateCartItemQuantity, removeItemFromCart } =
    useContext(CartContext);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div className={styles.cart}>
      <h2>MiniCart</h2>
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateCartItemQuantity={onUpdateCartItemQuantity}
              removeItemFromCart={removeItemFromCart}
              isShowImage={false}
            />
          ))}
        </ul>
      )}
      <p className={styles.cartTotal}>
        <strong>{formattedTotalPrice}</strong>
      </p>
      <div className={styles.modalActions}>
        <form method="dialog" className={styles.modalActions}>
          <button className={styles.textButton}>Close</button>
        </form>
        {items.length > 0 && (
          <button className={styles.button} onClick={onClickCart}>
            <Link href="/cart">Shopping cart</Link>
          </button>
        )}
      </div>
    </div>
  );
}
