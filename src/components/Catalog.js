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
          price={195}
          ingredients={
            "Лаваш, курица, салат весенний (капуста, морковь, болгарский перец, зелень), соус сметанный"
          }
        />
        <Doner
          image={
            "https://stoneforest.ru/wp-content/uploads/2021/11/dalnevostochnyi-fast-fud-shaurma-ne-tak-prosta-kak-kazhetsya-1.jpg"
          }
          name={"Шаурма Классическая стандартная, 450 гр."}
          ingredients={
            "Лаваш, курица, салат весенний (капуста, морковь, болгарский перец, зелень), соус сметанный"
          }
          price={225}
        />
        <Doner
          image={
            "https://stoneforest.ru/wp-content/uploads/2021/11/dalnevostochnyi-fast-fud-shaurma-ne-tak-prosta-kak-kazhetsya-1.jpg"
          }
          name={"Шаурма Классическая большая, 600 гр."}
          ingredients={
            "Лаваш, курица, салат весенний (капуста, морковь, болгарский перец, зелень), соус сметанный"
          }
          price={260}
        />
        <Doner
          image={
            "https://stoneforest.ru/wp-content/uploads/2021/11/dalnevostochnyi-fast-fud-shaurma-ne-tak-prosta-kak-kazhetsya-1.jpg"
          }
          name={"Шаурма Классическая мега, 800 гр."}
          ingredients={
            "Лаваш, курица, салат весенний (капуста, морковь, болгарский перец, зелень), соус сметанный"
          }
          price={305}
        />
      </div>
    );
  }
}

export default Catalog;
