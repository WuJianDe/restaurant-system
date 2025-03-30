import { useState } from "react";
import styles from "../styles/shop.module.scss";
import { Product } from "../../../types/types";
interface ProductProps {
  product: Product;
  closeProduct: () => void;
  addCartItem: (product: Product, quantity: number) => void;
}
const ProductPage: React.FC<ProductProps> = ({
  product,
  closeProduct,
  addCartItem,
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value >= 1) {
      setQuantity(value);
    }
  };
  return (
    <div className={styles["product-box"]}>
      <div className={styles["product-content"]}>
        <div className={styles["product-close"]} onClick={() => closeProduct()}>
          <i className="fas fa-times"></i>
        </div>
        <div className={styles["product-image"]}>
          <img src={product.image} alt={product.name} />
        </div>
        <div className={styles["product-info"]}>
          <h2>{product.name}</h2>
          <p className={styles["product-price"]}>{product.price}$</p>
          <p className={styles["product-description"]}>{product.detail}</p>
          {/* <div className={styles["product-options"]}>
            <label>辣度：</label>
            <div>
              <input
                type="radio"
                id="small-spicy"
                name="spicy-level"
                value="小辣"
                // checked={selectedOption === "小辣"}
                // onChange={handleOptionChange}
              />
              <label htmlFor="small-spicy">小辣</label>
            </div>
          </div> */}
          <div className={styles["product-quantity"]}>
            <label htmlFor="quantity">數量：</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
          </div>
          <button
            className={styles["product-submit"]}
            onClick={() => addCartItem(product, quantity)}
          >
            加入購物車
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
