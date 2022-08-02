import styles from "../css/Basket.module.css";

function Basket() {
  return (
    <div className={styles.basket}>
      <p className={styles.basket__description}>Корзина пуста</p>
      <button className={styles.basket__button}>Перейти в каталог</button>
    </div>
  );
}

export default Basket;
