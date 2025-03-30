import styles from "../styles/shop.module.scss";
const Category: React.FC = () => {
  return (
    <div className={styles["category"]}>
      <div className={styles["active"]}>全部</div>
      <div>美味餐盒</div>
      <div>下午茶、炸機</div>
      <div>飲品</div>
      <div>主廚特製</div>
    </div>
  );
};
export default Category;