import styles from "../css/Doner.module.css";

function Doner(props) {
  return (
    <div className={styles.doner__card}>
      <img className={styles.image} src={props.image} alt="" />
      <h4 className={styles.title}>{props.name}</h4>
      <p className={styles.ingredients}>{props.ingredients}</p>
      <div className={styles.wrapper}>
        <span className={styles.price}>{props.price}₽</span>
        <button className={styles.button}>+ в корзину</button>
      </div>
    </div>
  );
}

export default Doner;
