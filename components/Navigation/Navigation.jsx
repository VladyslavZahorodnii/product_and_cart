'use client';

import { useState, useContext } from "react";
import Link from "next/link";
import Modal from "components/Modal";
import { CartContext} from "@/store/shopping-cart-context";
import styles from "./Navigation.module.css";
import CartModal from "@/components/CartModal";


export default function Navigation() {
    const { items } = useContext(CartContext);
    const [modalCartIsOpen, setModalCartIsOpen] = useState(false);

    // const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const cartQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

    function handleCartOpen() {
        setModalCartIsOpen(true);
    }

    function handleCartClose() {
        setModalCartIsOpen(false);
    }

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
            <button className={styles.cartButton} onClick={handleCartOpen}>MiniCart ({cartQuantity})</button>
            <Modal open={modalCartIsOpen} onClose={handleCartClose}>
                <CartModal />
            </Modal>
        </nav>
    );
}
