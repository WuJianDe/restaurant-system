import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  interface isShow {
    dropdown: boolean;
  }
  const [isShow, setShow] = useState<isShow>({
    dropdown: false,
  });

  const toggleShow = () => {
    setShow((prevState) => ({
      dropdown: !prevState.dropdown,
    }));
  };

  const userName = "Guest";
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log("User logged out");
  };

  return (
    <header className={styles["top-bar"]}>
      <div className={styles["top-bar-left"]}>Vic Eats</div>
      <div className={styles["top-bar-right"]}>
        {isLoggedIn ? (
          <div className={styles["user-profile"]} onClick={toggleShow}>
            <span className={styles["user-name"]}>{userName}</span>
            {isShow.dropdown && (
              <div className={styles["dropdown-menu"]}>
                <div>個人資訊</div>
                <div>訂單</div>
                <div onClick={handleLogout}>登出</div>
              </div>
            )}
            <i className="fas fa-user-circle"></i>
          </div>
        ) : (
          <button onClick={handleLogin} className={styles["login-button"]}>
            登入
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
