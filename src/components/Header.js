import styles from "../css/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul>
          <li>О нас</li>
          <li>Каталог</li>
          <li>Как заказать</li>
        </ul>
        <div className="contacts">+79138000000</div>
      </nav>
      <div className={styles.navbarsearch}>
        <h2>Donnermaster</h2>
        <input
          className={styles.input}
          type="text"
          placeholder="Поиск по сайту"
        />
        <button className={styles.button__search}></button>
        <button className={styles.button__basket}>корзина</button>
      </div>
    </header>
  );
}

export default Header;
