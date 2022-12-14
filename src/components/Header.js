import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Basket from "./Basket";
import Catalog from "./Catalog";
import styles from "../css/Header.module.css";

function Header() {
  const [cube, setCube] = useState("");

  const showBasket = () => {
    cube !== "" ? setCube("") : setCube(<Basket />);
  };

  return (
    <>
      <header>
        <nav className={styles.navbar}>
          <ul className={styles.header__list}>
            <Link to="/about" className={styles.header__element}>
              О нас
            </Link>
            <Link to="/catalog" className={styles.header__element}>
              Каталог
            </Link>
            <Link to="/how-to-make-order" className={styles.header__element}>
              Как заказать
            </Link>
          </ul>
          <div className={styles.header__element}>+79138000000</div>
        </nav>
        <div className={styles.navbarsearch}>
          <h2>Donermaster</h2>
          <div className={styles.search}>
            <input
              className={styles.input}
              type="text"
              placeholder="Поиск по сайту"
            />
            <button className={styles.button__search}></button>
          </div>
          <button onClick={showBasket} className={styles.button__basket}>
            0 ₽
          </button>
          {cube}
        </div>
      </header>
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </>
  );
}

export default Header;
