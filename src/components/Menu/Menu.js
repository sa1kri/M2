import Link from "next/link";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
      <ul className={styles.menu}>

        <div className={styles.osn_menu}>
            <li className={styles.link}>
                <Link href={'/'}>Домашняя</Link>
            </li>
            <li className={styles.link}>
                <Link href={'/kabinet'}>Кабинет</Link>
            </li>
            <li className={styles.link}>
                <Link href={'/contacts'}>Контакты</Link>
            </li>
        </div>

        
      </ul>
  );
}
