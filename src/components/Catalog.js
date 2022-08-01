import React from "react";
import Doner from "./Doner";
import styles from "../css/Catalog.module.css";

class Catalog extends React.Component {
  render() {
    return (
      <div className={styles.catalog}>
        <Doner
          image={
            "https://papalavash.ru/wp-content/uploads/2020/11/doner.jpg-2.jpg"
          }
          name={"Шаурма Классическая маленькая, 300 гр."}
        />
      </div>
    );
  }
}

export default Catalog;
