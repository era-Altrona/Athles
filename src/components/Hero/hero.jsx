import style from "./hero.module.css";

export default function Hero() {
  return (
    <section id="home">
      <div className={style.heroContainer}>
        <div className={style.heroContentContainer}>


        <h1 className={style.heroTitle}>
Pierwsze kroki
na siłowni?        </h1>

        <h2 className={style.heroContent}>
          Skorzystaj z opieki
trenerskiej!
        </h2>
</div>
        <a className={style.heroBtn} href="https://booksy.com/pl-pl/299736_mateusz-nastula-mn-centrum_fizjoterapia_22875_torun?do=invite&_branch_match_id=1565232334211428489&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FV90%2BvMMsJ8k4JiUqyrytKTUstKsrMS49PKsovL04tsnVNSU8FAGb8XsQ6AAAA">Zapisz się »</a>

        
      </div>
    </section>
  );
}