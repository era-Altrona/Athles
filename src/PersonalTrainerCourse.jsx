import { useEffect } from "react";
import { Link } from "react-router-dom";

export const PERSONAL_TRAINER_COURSE = {
  name: "Kurs Trenera Personalnego",
  path: "/sklep/kurs-trenera-personalnego",
  status: "published",
  checkoutUrl: "https://buy.stripe.com/14AbJ085V5LXfwE06Y7kc05",
  regularPrice: 4999,
  presalePrice: 3799,
  image: "/images/kurs-trenera-personalnego.png",
  startsAt: "2027-01-16",
  capacity: 10,
};

const model = "OCENA → DECYZJA → BODZIEC TRENINGOWY → ODPOWIEDŹ NA OBCIĄŻENIE → PROGRESJA LUB MODYFIKACJA";
const introduction = "Praktyczny kurs dla trenerów personalnych, łączący diagnostykę funkcjonalną, biomechanikę, trening siłowy, trening funkcjonalny, programowanie oraz trening medyczny.";
const modules = [
  {
    title: "Zjazd 1 - Diagnostyka funkcjonalna i biomechanika ruchu",
    topics: ["wywiad", "historia urazów i aktywności", "anatomia funkcjonalna", "biomechanika podstawowych wzorców", "obserwacja ruchu", "diagnostyka funkcjonalna", "dobór testów", "interpretacja wyników", "określanie możliwości i ograniczeń", "przełożenie wyników oceny na decyzje treningowe"],
  },
  {
    title: "Zjazd 2 - Trening siłowy",
    topics: ["podstawowe wzorce ruchowe", "nauczanie techniki", "dobór ćwiczeń", "regresje i progresje", "intensywność", "objętość", "częstotliwość", "RPE / RIR", "monitorowanie wysiłku", "dobór zakresów powtórzeń", "organizacja jednostki treningowej", "progresja obciążenia"],
  },
  {
    title: "Zjazd 3 - Trening funkcjonalny i programowanie",
    topics: ["analiza wymagań", "dobór środków treningowych", "rozwój zdolności ruchowych", "praca w różnych płaszczyznach", "trening unilateralny", "rotacja i przenoszenie siły", "integracja treningu siłowego i funkcjonalnego", "programowanie mikrocyklu", "progresja", "monitorowanie adaptacji", "modyfikacja programu"],
  },
  {
    title: "Zjazd 4 - Trening medyczny i kompleksowa praca z klientem",
    topics: ["podstawy rozumienia bólu", "zdolność do tolerowania obciążenia", "ekspozycja na bodziec", "modyfikowanie zakresu ruchu i parametrów treningu", "regresja i progresja", "powrót do obciążenia", "monitorowanie reakcji na trening", "granice kompetencji trenera", "współpraca z fizjoterapeutą i lekarzem", "analiza przypadków", "pełny proces od oceny do programu i jego modyfikacji"],
  },
];

const price = value => `${new Intl.NumberFormat("pl-PL", { useGrouping: "always" }).format(value)} zł`;

function CoursePrice() {
  return <>
    <p>Cena regularna: <del>{price(PERSONAL_TRAINER_COURSE.regularPrice)}</del></p>
    <p className="eyebrow">CENA W PRZEDSPRZEDAŻY</p>
    <div className="training-price">{price(PERSONAL_TRAINER_COURSE.presalePrice)}</div>
  </>;
}

function CourseBooking() {
  const { status, checkoutUrl } = PERSONAL_TRAINER_COURSE;
  if (status !== "published" || !checkoutUrl) {
    return <button type="button" className="button primary" disabled>Zapisy w przygotowaniu</button>;
  }
  return <a className="button primary" href={checkoutUrl}>Zapisz się na kurs</a>;
}

export function PersonalTrainerCourseCard() {
  return <article className="shop-card">
    <Link to={PERSONAL_TRAINER_COURSE.path}><img src={PERSONAL_TRAINER_COURSE.image} alt="Kurs Trenera Personalnego ATHLES, start 16 stycznia 2027 w Toruniu" loading="lazy" /></Link>
    <div className="shop-card-copy">
      <p className="eyebrow">SZKOLENIE STACJONARNE</p>
      <h2><Link to={PERSONAL_TRAINER_COURSE.path}>{PERSONAL_TRAINER_COURSE.name}</Link></h2>
      <p>16.01.2027 · Toruń</p>
      <p>4 zjazdy. 4 miesiące. Jeden spójny system pracy z klientem.</p>
      <p>{introduction}</p>
      <p>Cena regularna: <del>{price(PERSONAL_TRAINER_COURSE.regularPrice)}</del></p>
      <p>Przedsprzedaż</p>
      <div className="shop-card-bottom">
        <strong>{price(PERSONAL_TRAINER_COURSE.presalePrice)}</strong>
        <Link className="button primary" to={PERSONAL_TRAINER_COURSE.path}>Zobacz szkolenie</Link>
      </div>
    </div>
  </article>;
}

export default function PersonalTrainerCourse() {
  useEffect(() => {
    const previousTitle = document.title;
    let meta = document.querySelector('meta[name="description"]');
    const createdMeta = !meta;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    const previousDescription = meta.getAttribute("content");
    document.title = "Kurs Trenera Personalnego | ATHLES Studio Toruń";
    meta.setAttribute("content", "Kurs Trenera Personalnego w ATHLES Studio w Toruniu. Start 16 stycznia 2027. 4 zjazdy w 4 miesiące, 10 miejsc. Cena w przedsprzedaży: 3 799 zł.");
    return () => {
      document.title = previousTitle;
      if (createdMeta) meta.remove();
      else if (previousDescription === null) meta.removeAttribute("content");
      else meta.setAttribute("content", previousDescription);
    };
  }, []);

  return <article className="shop-page container">
    <Link className="shop-back" to="/sklep">← Wróć do sklepu</Link>
    <div className="training-grid">
      <img className="training-poster" src={PERSONAL_TRAINER_COURSE.image} alt="Kurs Trenera Personalnego ATHLES, start 16 stycznia 2027 w Toruniu" />
      <div>
        <p className="eyebrow">SZKOLENIE STACJONARNE · TORUŃ</p>
        <h1>{PERSONAL_TRAINER_COURSE.name}</h1>
        <p className="lead">4 zjazdy. 4 miesiące. Jeden spójny system pracy z klientem.</p>
        <p>{introduction}</p>
        <dl className="training-facts">
          <div><dt>Start</dt><dd><time dateTime={PERSONAL_TRAINER_COURSE.startsAt}>16 stycznia 2027</time></dd></div>
          <div><dt>Liczba zjazdów</dt><dd>4</dd></div>
          <div><dt>Czas trwania</dt><dd>4 miesiące</dd></div>
          <div><dt>Miejsce</dt><dd>ATHLES Studio · ul. Mazowiecka 70A, Toruń</dd></div>
          <div><dt>Liczba miejsc</dt><dd>{PERSONAL_TRAINER_COURSE.capacity}</dd></div>
        </dl>
        <CoursePrice />
        <CourseBooking />
        <p>Masz pytania? <a href="mailto:kontakt@athles.pl">Napisz do nas</a>.</p>
      </div>
    </div>

    <div className="training-description">
      <section><h2>OBOWIĄZKOWE PRAKTYKI</h2><p>Po każdym z czterech modułów uczestnik odbywa 10 godzin obowiązkowych praktyk w ATHLES Studio, łącznie 40 godzin, pod nadzorem naszego zespołu. Podczas praktyk uczestnicy obserwują pracę trenerów. Na zakończenie całych praktyk każdy samodzielnie prowadzi jeden trening pod naszym nadzorem. Odbycie praktyk po danym module jest warunkiem przystąpienia do kolejnego modułu.</p></section>
      <section className="training-introduction">
        <p>Program jest oparty na procesie:</p>
        <p><strong>{model}</strong></p>
        <p>Celem jest nauczenie trenera podejmowania świadomych decyzji treningowych, a nie korzystania wyłącznie z gotowych schematów i zestawów ćwiczeń.</p>
      </section>

      <section>
        <h2>O KURSIE</h2>
        <p>Kurs ma przygotować trenera do prowadzenia klienta w sposób oparty na ocenie, planowaniu obciążeń i świadomym podejmowaniu decyzji treningowych.</p>
        <p>Punktem wyjścia nie jest gotowy zestaw ćwiczeń, ale zebranie informacji o kliencie, określenie jego aktualnych możliwości oraz tolerancji na obciążenie, a następnie przełożenie tych danych na dobór środków treningowych.</p>
        <p>Program łączy:</p>
        <ul className="training-outcomes">
          <li>diagnostykę funkcjonalną,</li><li>anatomię funkcjonalną i biomechanikę,</li><li>trening siłowy,</li><li>trening funkcjonalny,</li><li>programowanie treningu,</li><li>trening medyczny,</li><li>monitorowanie odpowiedzi na obciążenie.</li>
        </ul>
      </section>

      <section>
        <h2>DLA KOGO</h2><p>Program jest przeznaczony dla:</p>
        <ul className="training-outcomes">
          <li>przyszłych trenerów personalnych,</li><li>trenerów rozpoczynających pracę zawodową,</li><li>trenerów, którzy chcą uporządkować proces oceny i programowania,</li><li>osób chcących rozwijać kompetencje w obszarze strength &amp; conditioning,</li><li>trenerów pracujących z klientami po urazach, z historią bólu lub ograniczoną tolerancją obciążenia.</li>
        </ul>
        <p>Nie wymagamy wykształcenia medycznego.</p>
        <p>Kurs nie przygotowuje do stawiania diagnozy medycznej ani prowadzenia leczenia.</p>
      </section>

      <section>
        <h2>MODEL PRACY</h2><p>Cały kurs opiera się na procesie:</p><p><strong>{model}</strong></p><p>Uczestnik uczy się:</p>
        <ul className="training-outcomes">
          <li>zbierać informacje,</li><li>oceniać możliwości klienta,</li><li>ustalać priorytety,</li><li>dobierać bodziec treningowy,</li><li>dobierać parametry obciążenia,</li><li>monitorować reakcję,</li><li>progresować lub regresować trening,</li><li>modyfikować program,</li><li>rozpoznawać sytuacje wymagające konsultacji z innym specjalistą.</li>
        </ul>
      </section>

      <section>
        <h2>PROGRAM KURSU</h2>
        <div className="training-accordions">
          {modules.map(module => <details className="training-details" key={module.title}>
            <summary><span className="training-block-label">{module.title}</span><span className="training-disclosure-icon" aria-hidden="true" /></summary>
            <div className="training-details-body"><p>Zakres:</p><ul className="training-outcomes">{module.topics.map(topic => <li key={topic}>{topic}</li>)}</ul></div>
          </details>)}
        </div>
      </section>

      <section>
        <h2>REZULTAT KURSU</h2>
        <p>Po ukończeniu kursu uczestnik powinien potrafić przejść od pytania:</p>
        <p>„Jakie ćwiczenie dać temu klientowi?”</p>
        <p>do procesu:</p>
        <p>„Jaki jest cel? Jakie są aktualne możliwości klienta? Jaki bodziec chcę zastosować? Jak go dozować? Jak ocenię odpowiedź i na jakiej podstawie podejmę kolejną decyzję?”</p>
      </section>

      <section>
        <h2>INFORMACJE ORGANIZACYJNE</h2>
        <p>Start: 16 stycznia 2027</p><p>4 zjazdy w ciągu 4 miesięcy.</p>
        <p>Miejsce:<br />ATHLES Studio<br />ul. Mazowiecka 70A<br />Toruń</p>
        <p>Liczba miejsc: 10</p><p>Cena regularna: 4 999 zł</p><p>Cena w przedsprzedaży: 3 799 zł</p>
      </section>

      <section className="training-registration">
        <h2>ZAPISY NA KURS</h2><p>{PERSONAL_TRAINER_COURSE.name}</p>
        <CoursePrice /><CourseBooking />
      </section>
    </div>
  </article>;
}
