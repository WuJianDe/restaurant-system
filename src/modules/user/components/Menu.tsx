import styles from "../styles/user.module.scss";
import { useNavigate } from "react-router-dom";

const Menu: React.FC = () => {
  const navigate = useNavigate();
  const goToPage = (path: string) => {
    navigate(`/user/${path}`);
  };
  const logout = () => {
    navigate(`/`);
  };

  return (
    <div className={styles.menu}>
      <ul className={styles.menuList}>
        <li onClick={() => goToPage("profile")} className={styles.menuItem}>
          個人資訊
        </li>
        <li
          onClick={() => goToPage("order-record")}
          className={styles.menuItem}
        >
          訂單紀錄
        </li>
        <li onClick={() => logout()} className={styles.menuItem}>
          登出
        </li>
      </ul>
    </div>
  );
};

export default Menu;
