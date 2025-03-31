import React from "react";
import Header from "../../../components/Header/Header";
import styles from "../styles/checkout.module.scss";
import { Select, Radio, RadioChangeEvent } from "antd";
import type { CheckboxGroupProps } from "antd/es/checkbox";

const CheckoutPage: React.FC = () => {
  const buyerInfo = {
    name: "John Doe",
    account: "john_doe123",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  };

  const orderDetails = [
    { id: 1, name: "Pizza", quantity: 2, price: "$20.00" },
    { id: 2, name: "Pasta", quantity: 1, price: "$12.00" },
    // ...additional items...
  ];
  const options: CheckboxGroupProps<string>["options"] = [
    { label: "外送", value: "1" },
    { label: "自取", value: "2" },
    { label: "內用", value: "3" },
  ];
  const [type, setType] = React.useState("1");
  const onChange = (e: RadioChangeEvent) => {
    setType(e.target.value);
  };

  return (
    <>
      <Header />
      <div className={styles["checkout-page"]}>
        <div className={styles.content}>
          <div className={styles.buyerInfo}>
            <div className={styles["title-box"]}>
              <h2>詳細資訊</h2>
              <Radio.Group
                onChange={onChange}
                options={options}
                defaultValue="1"
                optionType="button"
                buttonStyle="solid"
              />
            </div>
            {type === "1" && (
              <>
                <div className={styles["form-group"]}>
                  <label>地址:</label>
                  <input
                    id="autocomplete"
                    type="text"
                    placeholder="輸入地點..."
                  ></input>
                </div>
                <div className={styles["form-group"]}>
                  <label>領取方式:</label>
                  <Select
                    className={styles["select"]}
                    defaultValue="home"
                    style={{
                      width: "100%",
                      height: "40px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                    options={[
                      { value: "home", label: "在家門口當面點交" },
                      { value: "entry", label: "放在門口" },
                      { value: "counter", label: "放在櫃檯" },
                    ]}
                  />
                </div>
                <div className={styles["form-group"]}>
                <label>給外送員的備註:</label>
                  <input
                    id="autocomplete"
                    type="text"
                    placeholder="請輸入備註..."
                  ></input>
                </div>
              </>
            )}
            {type === "2" && (
              <div className={styles["form-group"]}>
                <input
                  id="autocomplete"
                  type="text"
                  placeholder="請輸入取餐時間..."
                ></input>
              </div>
            )}
            {type === "3" && (
              <div className={styles["form-group"]}>
                <input
                  id="autocomplete"
                  type="text"
                  placeholder="請輸入桌號"
                ></input>
              </div>
            )}
          </div>
          <div className={styles.orderDetails}>
            <div className={styles["title-box"]}>
              <h2>訂單內容</h2>
            </div>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>品名</th>
                  <th>數量</th>
                  <th>價格</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles["form-group"]}>
              <label>給店家的備註:</label>
              <input
                id="autocomplete"
                type="text"
                placeholder="請輸入備註..."
              ></input>
            </div>
            <button type="button" className={styles["submit-button"]}>
              送出
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
