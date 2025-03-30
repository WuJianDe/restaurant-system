import styles from "../styles/shop.module.scss";

const Filter: React.FC = () => {
  const FilterOption: React.FC<{ id: string; label: string }> = ({
    id,
    label,
  }) => (
    <div>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
  return (
    <div className={styles["filter"]}>
      <div className={styles["filter-item"]}>價格：</div>
      <FilterOption id="below100" label="100$以下" />
      <FilterOption id="100to200" label="100-200$" />
      <FilterOption id="more200" label="200$以上" />
      <div>
        <input type="checkbox" id="custom-price" />
        <div>
          <input
            className={styles["filter-custom-price"]}
            type="text"
            placeholder="最低價"
          />
          <div className={styles["filter-custom-price-line"]}>-</div>
          <input
            className={styles["filter-custom-price"]}
            type="text"
            placeholder="最高價"
          />
          $
        </div>
      </div>
      <div className={styles["filter-item"]}>主食類型：</div>
      <FilterOption id="chicken" label="雞肉" />
      <FilterOption id="pork" label="豬肉" />
      <FilterOption id="seafood" label="海鮮" />
      <FilterOption id="pasta" label="義大利麵" />
      <div className={styles["filter-item"]}>辣度：</div>
      <FilterOption id="not-spicy" label="不辣" />
      <FilterOption id="spicy" label="小辣🌶️" />
      <FilterOption id="medium-spicy" label="中辣🌶️🌶️" />
    </div>
  );
};
export default Filter;
