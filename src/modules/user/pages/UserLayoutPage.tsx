import { Outlet } from "react-router-dom";
import styles from "../styles/user.module.scss";
import Header from "../../../components/Header/Header";
import Menu from "../components/Menu";

const UserLayoutPage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Menu />
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayoutPage;
