import React, { useState } from "react";
import logo from "../assets/images/logo.jpg";
import banner from "../assets/images/banner.jpg";
import chicken from "../assets/images/chicken.jpg";
import fries from "../assets/images/fries.jpg";
import noodles from "../assets/images/noodles.jpg";
import tea from "../assets/images/tea.jpg";
import styles from "../styles/shop.module.scss";
import Header from "../../../components/Header/Header";
import Category from "../components/Category";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import CartPage from "./CartPage";
import ProductPage from "./ProductPage";
import { Product } from "../../../types/types";
const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isShowCart, setShowCart] = useState<boolean>(false);
  const showProduct = (product: any) => {
    setSelectedProduct(product);
  };
  const closeProduct = () => {
    setSelectedProduct(null);
  };
  const showCart = () => {
    setShowCart(true);
  };
  const closeCart = () => {
    setShowCart(false);
  };
  const addCartItem = (product: Product, quantity: number) => {
    const hasProductIndex = cartItems.findIndex(
      (item) => item.name === product.name
    );
    if (hasProductIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[hasProductIndex].quantity! += quantity;
      console.log(updatedCartItems)
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
    setSelectedProduct(null);
  };
  const products = [
    {
      image: chicken,
      name: "雞肉",
      price: 100,
      detail:
        "外皮酥脆，肉質多汁！ 🔥 黃金比例醃製，現炸鎖住鮮嫩肉汁，每一口都是香酥與嫩滑的完美結合！🍗 一咬爆汁，回味無窮！",
    },
    {
      image: fries,
      name: "薯條",
      price: 60,
      detail:
        "我們的薯條精選優質馬鈴薯，現點現炸，外酥內軟，每一口都帶著香濃的馬鈴薯風味。搭配特製醬料，讓美味更上一層樓！",
    },
    {
      image: noodles,
      name: "義大利麵",
      price: 120,
      detail:
        "Q彈麵條，醬香濃郁！ 🍝 精選食材與獨門醬汁完美融合，每一口都是地道義式風味！滑順濃郁，讓味蕾瞬間飛往義大利！ 🇮🇹✨",
    },
    {
      image: tea,
      name: "紅茶",
      price: 30,
      detail:
        "醇厚回甘，茶香四溢！ 🍂 精選優質茶葉慢火沖泡，帶出天然甘甜與迷人茶韻。每一口，都是純粹的紅茶享受！ ☕✨",
    },
  ];

  return (
    <>
      <Header />
      <div className={styles["shop-page"]}>
        <div className={styles["banner"]}>
          <div
            className={styles["banner-image"]}
            style={{ backgroundImage: `url(${banner})` }}
          ></div>
          <div className={styles["banner-logo"]}>
            <img src={logo} alt="" />
          </div>
          <div className={styles["banner-text"]}>吃紅餐館 JIA AN </div>
          <div className={styles["search"]}>
            <div className={styles["search-container"]}>
              <input
                type="text"
                placeholder="搜尋美食..."
                className={styles["search-input"]}
              />
              <button className={styles["search-icon"]}>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div className={styles["dividing-line"]}></div>
        <Category />
        <div className={styles["content"]}>
          <Filter />
          <div className={styles["product-shelf"]}>
            {products.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                showProduct={showProduct}
              />
            ))}
          </div>
        </div>

        {/* 購物車 */}
        <div className={styles["cart-floating"]} onClick={() => showCart()}>
          <i className="fas fa-shopping-cart"></i>
          {cartItems.length > 0 && (
            <span className={styles["cart-count"]}>
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </div>
      </div>
      <CartPage
        cartItems={cartItems}
        isShowCart={isShowCart}
        closeCart={closeCart}
      />
      {selectedProduct && (
        <ProductPage
          product={selectedProduct}
          closeProduct={closeProduct}
          addCartItem={addCartItem}
        />
      )}
    </>
  );
};

export default App;
