import styles from "../styles/shop.module.scss";
import { Product } from "../../../types/types";
import { useNavigate } from "react-router-dom";
interface CartProps {
  cartItems: Product[];
  isShowCart: boolean;
  closeCart: () => void;
}
const CartPage: React.FC<CartProps> = ({
  cartItems,
  isShowCart,
  closeCart,
}) => {
  const navigate = useNavigate();
  const goToCheckoutPage = () => {
    navigate("/checkout");
  }
  return (
    <div
      className={`${styles["cart-sidebar"]} ${isShowCart && styles["open"]}`}
    >
      <div className={styles["cart-sidebar-header"]}>
        <span>購物車</span>
        <span
          className={styles["cart-sidebar-close"]}
          onClick={() => closeCart()}
        >
          &times;
        </span>
      </div>
      <div>
        {cartItems.map((item, index) => (
          <div key={index} className={styles["cart-item"]}>
            <span className={styles["cart-item-name"]}>
              {item.name} {item.option && `(${item.option})`}
            </span>
            <span className={styles["cart-item-quantity"]}>
              x{item.quantity}
            </span>
            <span className={styles["cart-item-price"]}>
              ${item.price * (item.quantity || 1)}
            </span>
          </div>
        ))}
      </div>
      <div className={styles["cart-sidebar-footer"]}>
        <button onClick={() => goToCheckoutPage()}>結帳</button>
      </div>
    </div>
  );
};

export default CartPage;
