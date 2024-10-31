'use client';

import { useContext } from "react";
import { CartContext} from "@/store/shopping-cart-context";
import styles from "./CartModal.module.css";

export default function CartModal({onClickCheckout}) {
    const { items, onUpdateCartItemQuantity } = useContext(CartContext);
    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

    return (
        <div className={styles.cart}>
            <h2>MiniCart</h2>
            {items.length === 0 && <p>No items in cart!</p>}
            {items.length > 0 && (
                <ul>
                    {items.map((item) => {
                        return (
                            <li key={item.id} className={styles.cartItem}>
                                <div>
                                    <span>{item.name} - </span>
                                    <span>{item.quantity} x </span>
                                    <span>${item.price}</span>
                                </div>
                                <div className={styles.cartItemActions}>
                                    <button onClick={() => onUpdateCartItemQuantity(item.id, -1)}>
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => onUpdateCartItemQuantity(item.id, 1)}>
                                        +
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
            <p className={styles.cartTotal}>
                <strong>{formattedTotalPrice}</strong>
            </p>
            <div className={styles.modalActions}>
                <form method="dialog" className={styles.modalActions}>
                    <button className={styles.textButton}>Close</button>
                </form>
                {items.length > 0 && <button className={styles.button} onClick={onClickCheckout}>Go to checkout</button>}
            </div>
        </div>
    )
}