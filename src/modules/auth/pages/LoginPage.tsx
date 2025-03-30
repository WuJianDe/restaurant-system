import React from "react";
import styles from "../styles/auth.module.scss";
import { useNavigate } from "react-router-dom";
const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const login = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/")
  };

  return (
    <div className={styles["login-container"]}>
      <form className={styles["login-form"]} onSubmit={login}>
        <h2 className={styles["form-title"]}>登入</h2>
        <div className={styles["form-group"]}>
          <label htmlFor="username">帳號</label>
          <input type="text" id="username" placeholder="輸入帳號" />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password">密碼</label>
          <input type="password" id="password" placeholder="輸入密碼" />
        </div>
        <button
          type="submit"
          className={styles["submit-button"]}
          onClick={login}
        >
          登入
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
