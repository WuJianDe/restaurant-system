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

  const goToLogin = () => {
    navigate("/login");
  };

  const logout = () => {
    setIsLoggedIn(false);
    navigate(`/`);
  };
  const goToProfile = (path: string) => {
    navigate(`/user/${path}`);
  };
  const goToHome = () => {
    navigate(`/`);
  };
  return (
    <header className={styles["top-bar"]}>
      <div onClick={() => goToHome()} className={styles["top-bar-left"]}>
        Vic Eats
      </div>
      <div className={styles["top-bar-right"]}>
        {isLoggedIn ? (
          <div className={styles["user-profile"]} onClick={toggleShow}>
            <span className={styles["user-name"]}>{userName}</span>
            {isShow.dropdown && (
              <div className={styles["dropdown-menu"]}>
                <div onClick={() => goToProfile("profile")}>個人資訊</div>
                <div onClick={() => goToProfile("order-record")}>訂單</div>
                <div onClick={() => logout()}>登出</div>
              </div>
            )}
            <i className="fas fa-user-circle"></i>
          </div>
        ) : (
          <button
            onClick={() => goToLogin()}
            className={styles["login-button"]}
          >
            登入
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
