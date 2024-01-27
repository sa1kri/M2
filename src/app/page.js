import Link from "next/link";
import styles from "./page.module.css";
import Menu from "@/components/Menu/Menu";

export const metadata ={
  title: 'Домашняя',
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.zagolovok}>
            <h1 className={styles.text_zagolovok}>
                Добро пожаловать
            </h1>
        </div>

      <div className={styles.description}>
        <Menu/>
        товар
      </div>
    </main>
  );
}
