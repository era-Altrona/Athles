import styles from './Nav.module.css'; 

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <h2>Athles</h2>
      <ul className={styles.links}>
        <li><a href="#diagnostyka">Diagnostyka</a></li>
        <li><a href="#medical">Medical Performance</a></li>
        <li><a href="#coaching">Athles Method</a></li>
        <li><a href="#system">System Pack</a></li>
        <li><a href="#dietetyk">Psychodietetyka</a></li>
        <li><a href="#kontakt" className={styles.cta}>Umów wizytę</a></li>
      </ul>
    </nav>
  )
}
