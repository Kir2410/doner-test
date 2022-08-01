import styles from "../css/Doner.module.css";

function Doner(props) {
  return (
    <div className={styles.doner__card}>
      <img className={styles.image} src={props.image} alt="" />
      <h4 className={styles.title}>{props.name}</h4>
      <button className={styles.button}>+ в корзину</button>
    </div>
  );
}

export default Doner;
