"use client";

import { useContext } from "react";
import { CartContext } from "@/store/shopping-cart-context";
import styles from "./page.module.css";
import CartItem from "@/components/CartItem";

export default function CartPage() {
  const { items, onUpdateCartItemQuantity, removeItemFromCart } =
    useContext(CartContext);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <main>
      <div className={styles.cart}>
        <h2>Shopping Cart</h2>
        {items.length === 0 && <p>No items in cart!</p>}
        {items.length > 0 && (
          <ul>
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateCartItemQuantity={onUpdateCartItemQuantity}
                removeItemFromCart={removeItemFromCart}
                isShowImage={true}
              />
            ))}
          </ul>
        )}
        <p className={styles.cartTotal}>
          <strong>{formattedTotalPrice}</strong>
        </p>
      </div>
    </main>
  );
}
