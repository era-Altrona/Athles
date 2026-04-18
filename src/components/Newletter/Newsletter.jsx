import style from './newsletter.module.css';

export default function Newsletter() {
  return (
    <section className={style.newsletterSection}>
      <div className={style.container}>
        <span className={style.hashtag}>#NOMERCY</span>
        
        <h2 className={style.title}>
          <span className={style.redLetter}>N</span>ewsletter
        </h2>
        
        <p className={style.subtitle}>
          Zapisz się i otrzymaj <span className={style.accent}>50 zł</span> zniżki na pierwsze zamówienie!
        </p>

        <form className={style.form} onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text" 
            placeholder="Miasto (opcjonalne)" 
            className={style.input} 
          />
          <input 
            type="email" 
            placeholder="Email" 
            className={style.input} 
            required 
          />
          
          <div className={style.checkboxContainer}>
            <input type="checkbox" id="privacy" className={style.checkbox} required />
            <label htmlFor="privacy" className={style.label}>
              Zapisując się, akceptujesz <a href="#">Politykę prywatności.</a>
            </label>
          </div>

          <button type="submit" className={style.submitBtn}>
            ZAPISZ SIĘ <span className={style.arrow}>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}