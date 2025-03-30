import styles from "../styles/shop.module.scss";

interface ProductCardProps {
  product: {
    image: string;
    name: string;
    price: number;
    detail: string;
  };
  showProduct: (product: any) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, showProduct }) => {
  return (
    <div className={styles["product-card"]} onClick={() => showProduct(product)}>
      <div className={styles["product-image"]}>
        <img src={product.image} alt={product.name} />
        <div className={styles["product-add"]}>
          <i className="fas fa-plus"></i>
        </div>
      </div>
      <div className={styles["product-name"]}>{product.name}</div>
      <div className={styles["product-detail"]}>{product.detail}</div>
      <div className={styles["product-price"]}>{product.price}$</div>
    </div>
  );
};

export default ProductCard;
