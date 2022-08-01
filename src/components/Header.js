import styles from "../css/Header.module.css";

function Header() {
  return (
    <header>
      <nav className={styles.navbar}>
        <ul className={styles.header__list}>
          <li className={styles.header__element}>О нас</li>
          <li className={styles.header__element}>Каталог</li>
          <li className={styles.header__element}>Как заказать</li>
        </ul>
        <div className="contacts">+79138000000</div>
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
        <button className={styles.button__basket}>корзина</button>
      </div>
    </header>
  );
}

export default Header;
