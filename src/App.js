import Header from "./components/Header";
import Footer from "./components/Footer";
import Catalog from "./components/Catalog";
import styles from "./css/App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
