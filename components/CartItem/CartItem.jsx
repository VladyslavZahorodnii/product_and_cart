import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./CartItem.module.css";

export default function CartItem({
  item,
  onUpdateCartItemQuantity,
  removeItemFromCart,
  isShowImage,
}) {
  return (
    <li key={item.id} className={styles.cartItem}>
      {isShowImage && (
        <div className={styles.itemImage}>
          <img
            src={item.image}
            alt={item.name}
            className={styles.productImage}
          />
        </div>
      )}
      <div>
        <span>{item.name}</span>
      </div>
      <div className={styles.cartItemActions}>
        <button onClick={() => onUpdateCartItemQuantity(item.id, -1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onUpdateCartItemQuantity(item.id, 1)}>+</button>
      </div>
      <div>
        <span>${item.price}</span>
      </div>
      <div className={styles.removeButton}>
        <button onClick={() => removeItemFromCart(item.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
}
