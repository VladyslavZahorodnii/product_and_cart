'use client';

import { useContext } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import { CartContext} from "@/store/shopping-cart-context";
import styles from './page.module.css';


export default function CartPage() {
    const { items, onUpdateCartItemQuantity, removeItemFromCart } = useContext(CartContext);
    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

    return (
        <main>
            <div className={styles.cart}>
                <h2>Shopping Cart</h2>
                {items.length === 0 && <p>No items in cart!</p>}
                {items.length > 0 && (
                    <ul>
                        {items.map((item) => (
                            <li key={item.id} className={styles.cartItem}>
                                <div className={styles.itemImage}>
                                    <img src={item.image} alt={item.name} className={styles.productImage}/>
                                </div>
                                <div className={styles.itemName}>
                                    <span>{item.name}</span>
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
                                <div className={styles.itemPrice}>
                                    <span>${item.price}</span>
                                </div>
                                <div className={styles.removeButton}>
                                    <button onClick={() => removeItemFromCart(item.id)}>
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </button>
                                </div>
                            </li>
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
