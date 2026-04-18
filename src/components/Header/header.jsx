import style from "./header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <h2>Athles</h2>
      <nav className={style.nav}>
        <a href="#home">Home</a>
        <a href="#services">Usługi</a>
        <a href="#contact">Kontakt</a>
      </nav>
    </header>
  );
}