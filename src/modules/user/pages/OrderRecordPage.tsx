import React from 'react';
import styles from '../styles/user.module.scss';

const OrderRecordPage: React.FC = () => {
  const orders = [
    { id: 1, customer: 'John Doe', date: '2023-10-01 20:33:02', total: '$50.00' },
    { id: 2, customer: 'Jane Smith', date: '2023-10-02 16:02:56', total: '$75.00' },
    // ...existing code...
  ];

  const handleView = (id: number) => {
    alert(`Viewing details for order ID: ${id}`);
    // ...existing code...
  };

  return (
    <div className={styles.content}>
      <h2 className={styles.title}>訂單紀錄</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>訂單編號</th>
            <th>點餐時間</th>
            <th>訂單金額</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>{order.total}</td>
              <td>
                <button
                  className={styles.viewButton}
                  onClick={() => handleView(order.id)}
                >
                  查看內容
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderRecordPage;
