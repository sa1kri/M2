import Menu from "@/components/Menu/Menu";
import styles from "./page.module.css";
import { Auth } from "./components/Auth";

export const metadata ={
  title: 'Кабинет',
}

export default function kabinet() {
  return (
      <main className={styles.main}>
        <div className={styles.description}>
          <Menu />
        
          <div className={styles.Chekin}>
            <Auth/>
          </div>
        
        </div>
      </main>
    
  )
       
}
