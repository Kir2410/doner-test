import React from "react";
import Doner from "./Doner";
import styles from "../css/Catalog.module.css";

class Catalog extends React.Component {
  state = { doners: [] };

  componentDidMount() {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((resp) => resp.json())
      .then((data) => this.setState({ doners: data }));
  }

  render() {
    return (
      <div className={styles.catalog}>
        <Doner
          image={
            "https://stoneforest.ru/wp-content/uploads/2021/11/dalnevostochnyi-fast-fud-shaurma-ne-tak-prosta-kak-kazhetsya-1.jpg"
          }
          name={"Шаурма Классическая маленькая, 300 гр."}
        />
        <Doner
          image={
            "https://stoneforest.ru/wp-content/uploads/2021/11/dalnevostochnyi-fast-fud-shaurma-ne-tak-prosta-kak-kazhetsya-1.jpg"
          }
          name={"Шаурма Классическая средняя, 450 гр."}
        />
        <Doner
          image={
            "https://stoneforest.ru/wp-content/uploads/2021/11/dalnevostochnyi-fast-fud-shaurma-ne-tak-prosta-kak-kazhetsya-1.jpg"
          }
          name={"Шаурма Классическая большая, 600 гр."}
        />
        <Doner
          image={
            "https://stoneforest.ru/wp-content/uploads/2021/11/dalnevostochnyi-fast-fud-shaurma-ne-tak-prosta-kak-kazhetsya-1.jpg"
          }
          name={"Шаурма Классическая огромная, 800 гр."}
        />
      </div>
    );
  }
}

export default Catalog;
