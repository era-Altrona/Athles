import style from './privacyPolicy.module.css';
import { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.contentCard}>
        <h1 className={style.mainTitle}>Polityka prywatności i przetwarzania danych osobowych</h1>

        <section className={style.section}>
          <h2>1. Administrator danych</h2>
          <p>
            Administratorem danych osobowych jest <strong>Studio Treningu Personalnego Mateusz Nastula</strong>, 
            z siedzibą przy ul. Janusza Kusocińskiego 1/32, 78-200 Białogard, NIP: 6722096751, REGON: 386735202.
            Kontakt в sprawach dotyczących danych osobowych jest możliwy pod adresem e-mail: 
            <a href="mailto:kontakt@athles.pl" className={style.link}> kontakt@athles.pl</a>.
          </p>
        </section>

        <section className={style.section}>
          <h2>2. Zakres przetwarzanych danych</h2>
          <p>W ramach formularza zapisu przetwarzane mogą być następujące dane osobowe:</p>
          <ul className={style.list}>
            <li>imię i nazwisko,</li>
            <li>adres e-mail,</li>
            <li>miejscowość (wskazana jako preferowane miejsce odbycia kursu).</li>
          </ul>
          <p>Podanie danych jest dobrowolne, jednak niezbędne do realizacji celu, o którym mowa poniżej.</p>
        </section>
<section className={style.section}>
          <h2>3. Cel i podstawa prawna przetwarzania danych</h2>
          <p>Dane osobowe przetwarzane są w celu:</p>
          <ul className={style.list}>
            <li>prowadzenia zapisów na listę zainteresowanych kursami organizowanymi przez Athles Studio,</li>
            <li>kontaktu z osobami zapisanymi, w tym przekazania informacji o dostępności kursów w danej lokalizacji.</li>
          </ul>
          <p>
            Podstawą prawną przetwarzania danych jest zgoda osoby, której dane dotyczą 
            <strong> (art. 6 ust. 1 lit. a RODO)</strong>.
          </p>
        </section>

        <section className={style.section}>
          <h2>4. Okres przechowywania danych</h2>
          <p>
            Dane będą przechowywane do momentu cofnięcia zgody przez osobę, której dane dotyczą, 
            lub do zakończenia działalności informacyjnej związanej z organizacją kursów Athles Studio 
            — w zależności od tego, co nastąpi wcześniej.
          </p>
        </section>

        <section className={style.section}>
          <h2>5. Odbiorcy danych</h2>
          <p>Dane mogą być powierzane podmiotom przetwarzającym je na zlecenie Administratora, w szczególności:</p>
          <ul className={style.list}>
            <li>dostawcy systemu mailingowego <strong>MailerLite</strong>, wykorzystywanego do obsługi zapisów i wysyłki wiadomości,</li>
            <li>podmiotom świadczącym usługi hostingowe i IT, w zakresie niezbędnym do realizacji celów wskazanych powyżej.</li>
          </ul>
          <p>Podmioty te przetwarzają dane wyłącznie na podstawie umowy powierzenia i zgodnie z obowiązującymi przepisami.</p>
        </section>

        <section className={style.section}>
          <h2>6. Prawa osób, których dane dotyczą</h2>
          <p>Osobom, których dane dotyczą, przysługuje prawo do:</p>
          <ul className={style.list}>
            <li>dostępu do swoich danych,</li>
            <li>sprostowania danych,</li>
            <li>usunięcia danych („prawo do bycia zapomnianym”),</li>
            <li>ograniczenia przetwarzania,</li>
            <li>przeniesienia danych do innego administratora,</li>
            <li>cofnięcia zgody w dowolnym momencie.</li>
          </ul>
          <p>
            W celu realizacji powyższych praw można skontaktować się з Administratorem pod adresem e-mail: 
            <a href="mailto:kontakt@athles.pl" className={style.link}> kontakt@athles.pl</a>.
          </p>
        </section>

        <section className={style.section}>
          <h2>7. Prawo do wniesienia skargi</h2>
          <p>
            Osobie, której dane dotyczą, przysługuje prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO), 
            jeśli uzna, że przetwarzanie jej danych narusza przepisy RODO.
          </p>
        </section>

        <section className={style.section}>
          <h2>8. Pliki cookies</h2>
          <p>
            Strona internetowa може korzystać z plików cookies w celu zapewnienia poprawnego działania formularza oraz analizy ruchu. 
            Korzystanie ze strony oznacza zgodę na używanie plików cookies zgodnie z ustawieniami przeglądarki użytkownika.
          </p>
        </section>

        <section className={style.section}>
          <h2>9. Dobrowolność podania danych</h2>
          <p>
            Podanie danych jest dobrowolne, jednak niezbędne do zapisania się na listę zainteresowanych kursami 
            Athles Studio oraz otrzymania informacji o ich dostępności.
          </p>
        </section>

        <section className={style.section}>
          <h2>10. Zmiany polityki prywatności</h2>
          <p>
            Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce prywatności. 
            Aktualna wersja polityki jest zawsze dostępna na stronie internetowej, na której znajduje się formularz zapisu.
          </p>
        </section>
      </div>
    </div>
  );
}