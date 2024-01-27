import Menu from "@/components/Menu/Menu";
import styles from "./page.module.css";

export const metadata ={
  title: 'Кабинет',
}

export default function kabinet() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Menu/>
        <div className={styles.blank}>
          <form>
            <input></input>
            <input></input>
            <button>Войти</button>
          </form>
        </div>
        
      </div>

      

    </main>
  );
}
