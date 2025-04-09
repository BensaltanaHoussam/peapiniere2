import Description from "../../components/Description";
import Header from "../../components/Header";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <Header text ="Im houssam header"/>
      <p>Hello jsx My names is houssam bensaltana</p>
      <p>My age is 22</p>
      <Description text ="Im houssam description"/>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
