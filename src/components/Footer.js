import styles from "../css/Footer.module.css";

function Footer() {
  return (
    <footer>
      <ul className={styles.list}>
        <h3>Навигация</h3>
        <li className={styles.element}>О компании</li>
        <li className={styles.element}>Каталог</li>
        <li className={styles.element}>Корзина</li>
        <li className={styles.element}>Статус заказа</li>
      </ul>
      <ul className={styles.list}>
        <h3>Социальные сети</h3>
        <li className={styles.element}>VK</li>
        <li className={styles.element}>Instagram</li>
      </ul>
      <ul className={styles.list}>
        <h3>Контакты</h3>
        <li className={styles.element}>г.Томск, ул.Усова 11А</li>
        <li className={styles.element}>+79138531000</li>
        <li className={styles.element}>donermstr@gmail.com</li>
      </ul>
    </footer>
  );
}

export default Footer;
