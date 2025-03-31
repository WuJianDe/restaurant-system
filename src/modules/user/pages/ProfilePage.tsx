import { useState } from "react";
import styles from "../styles/user.module.scss";

const ProfilePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    account: "",
    password: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    console.log("Saved data:", formData);
  };

  return (
    <div className={styles.content}>
      <h2 className={styles.title}>個人資訊</h2>
      <form>
        <div className={styles.formGroup}>
          <label>名稱:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>帳號:</label>
          <input
            type="text"
            name="account"
            value={formData.account}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>電子信箱:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>行動電話:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          onClick={handleSave}
          className={styles.saveButton}
        >
          保存
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
