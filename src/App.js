import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./css/App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
