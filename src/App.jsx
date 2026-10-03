import { useEffect, useState } from "react";
import {
  BrowserRouter,
  HashRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
const Router =
  window.location.protocol === "file:" ? HashRouter : BrowserRouter;
const BOOKSY = "https://athlesstudio.booksy.com/a";
const team = [
  {
    name: "Mateusz Nastula",
    role: "Fizjoterapeuta · trener przygotowania motorycznego",
    photo: "/Mateusz.jpeg",
    text: "Pracuje z osobami z bólem i po urazach. Łączy rehabilitację z treningiem medycznym oraz przygotowaniem do powrotu do sportu.",
  },
  {
    name: "Karol Usarek",
    role: "Trener medyczny",
    photo: "/Karol.jpeg",
    text: "Pomaga wrócić do aktywności i rozwijać sprawność. Prowadzi trening dostosowany do aktualnych możliwości i celu.",
  },
  {
    name: "Iwo Kropkowski",
    role: "Trener personalny",
    photo: "/Iwo.jpeg",
    text: "Prowadzi trening siłowy i funkcjonalny. Pracuje nad techniką, siłą i kondycją, także z osobami zaczynającymi po przerwie.",
  },
  {
    name: "Wiktoria Nastula",
    role: "Dietetyk kliniczny · psychodietetyk",
    photo: "/Wiktoria.jpeg",
    text: "Pomaga uporządkować sposób odżywiania. Dopasowuje zalecenia i jadłospis do celu, codziennych obowiązków oraz aktywności.",
  },
];
const services = [
  [
    "Fizjoterapia i rehabilitacja",
    "Powrót do sprawności",
    "Fizjoterapia w ATHLES obejmuje badanie i pracę z dolegliwościami układu ruchu, m.in. bólem pleców, szyi, kolana czy barku. Mateusz prowadzi rehabilitację ortopedyczną i sportową, również po kontuzji i operacji. Plan zależy od wyników badania i tego, do jakiej aktywności chcesz wrócić.",
    "200 zł / 60 min",
  ],
  [
    "Trening medyczny",
    "Od rehabilitacji do aktywności",
    "Trening medyczny łączy pracę nad siłą i sprawnością z uwzględnieniem bólu, ograniczeń ruchu lub przebytego urazu. Ćwiczenia i obciążenie dobieramy po ocenie Twoich możliwości. To forma współpracy dla osób wracających do aktywności i treningu po rehabilitacji.",
    "200 zł / 60 min",
  ],
  [
    "Trening personalny",
    "Siła · kondycja · sylwetka",
    "Trening personalny w Toruniu dla osób początkujących i tych, które już ćwiczą. Podczas spotkań 1 na 1 uczysz się techniki ćwiczeń siłowych i pracujesz nad siłą, kondycją lub sylwetką. Trener dobiera plan do Twojego poziomu i zmienia go wraz z postępami.",
    "180 zł z trenerem · 200 zł z Mateuszem / 60 min",
  ],
  [
    "Przygotowanie motoryczne",
    "Przygotowanie do sportu",
    "Przygotowanie motoryczne sportowców obejmuje trening siły, szybkości, mocy, skoczności i wydolności. Program dobieramy do dyscypliny, poziomu oraz etapu sezonu. Pracujemy nad przygotowaniem do zawodów i powrotem do sportu po przerwie.",
    "180 zł z trenerem · 200 zł z Mateuszem / 60 min",
  ],
  [
    "Terapia manualna",
    "Ruchomość i dolegliwości",
    "Terapia manualna to praca z mięśniami i stawami, którą fizjoterapeuta dobiera po badaniu. Może być częścią rehabilitacji przy bólu i ograniczeniu ruchomości. W zależności od sytuacji uzupełniamy ją ćwiczeniami i zaleceniami dotyczącymi aktywności.",
    "200 zł / 60 min",
  ],
  [
    "Dietetyka",
    "Odżywianie w Twojej codzienności",
    "Konsultacje dietetyczne i psychodietetyka z Wiktorią w naszym studiu w Toruniu. Omawiacie sposób odżywiania, codzienne nawyki i cel współpracy, np. redukcję masy ciała lub żywienie przy regularnym treningu. Możesz wybrać konsultację albo wizytę z planem żywieniowym.",
    "Pierwsza wizyta 200 zł · kolejna 180 zł · z jadłospisem 350 zł",
  ],
];
function Booking({
  children = "Umów darmową diagnostykę",
  className = "button primary",
}) {
  return (
    <a
      href={BOOKSY}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
function Scroll() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash)
      requestAnimationFrame(() =>
        document.getElementById(hash.slice(1))?.scrollIntoView(),
      );
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <Link
          to="/"
          className="brand"
          aria-label="ATHLES — strona główna"
          onClick={() => setOpen(false)}
        >
          <img src="/Athles_Sygnet_Color.svg" alt="" width="40" height="40" />
          <span>
            ATHLES<small>STUDIO · TORUŃ</small>
          </span>
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Zamknij" : "Menu"}{" "}
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        <nav
          id="main-navigation"
          aria-label="Menu główne"
          className={open ? "navigation open" : "navigation"}
        >
          {[
            ["O nas", "o-nas"],
            ["Zespół", "zespol"],
            ["Oferta", "oferta"],
            ["Kontakt", "kontakt"],
          ].map(([label, id]) => (
            <Link key={id} to={`/#${id}`} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Booking className="button primary nav-booking">
            Diagnostyka · 0 zł
          </Booking>
        </nav>
      </div>
    </header>
  );
}
function Home() {
  const [mapOpen, setMapOpen] = useState(false);
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">FIZJOTERAPIA I TRENING W TORUNIU</p>
            <h1>Fizjoterapia i trening personalny w Toruniu</h1>
            <p className="lead">
              W ATHLES pracujemy z osobami z bólem, po kontuzji i z tymi, które
              chcą zacząć trenować. Fizjoterapeuta, trenerzy i dietetyk
              przyjmują w jednym studiu przy Mazowieckiej 70a. Na darmowej
              diagnostyce sprawdzimy, od czego warto zacząć.
            </p>
            <Booking />
            <p className="booking-note">
              Pierwsze spotkanie: 55 minut · 0 zł
              <br />W Booksy wybierz „Diagnostyka systemem Athles Metod”.
            </p>
          </div>
          <figure className="hero-photo">
            <img
              src="/team-booksy.jpeg"
              alt="Zespół ATHLES: Karol, Mateusz, Wiktoria i Iwo"
              fetchPriority="high"
              width="1287"
              height="724"
            />
            <figcaption>
              <span>Twój zespół w ATHLES</span>
              <span>Mazowiecka 70a · Toruń</span>
            </figcaption>
          </figure>
        </div>
      </section>
      <div className="intro-strip">
        <div className="container">
          <span>Fizjoterapia</span>
          <span>Trening personalny</span>
          <span>Przygotowanie motoryczne</span>
          <span>Dietetyka</span>
        </div>
      </div>
      <section id="o-nas" className="section">
        <div className="container about-grid">
          <div>
            <p className="eyebrow">O NAS</p>
            <h2>Fizjoterapia, trening i dietetyka w jednym studiu</h2>
            <p className="lead">
              W ATHLES możesz rozpocząć od fizjoterapii, a kiedy pozwala na to
              Twój stan, kontynuować pracę z trenerem. Wszystkie spotkania
              odbywają się w naszym studiu w Toruniu.
            </p>
            <p>
              Pomagamy osobom wracającym do aktywności po urazie, zaczynającym
              trening siłowy i przygotowującym się do sportu. Plan opieramy na
              rozmowie, badaniu i Twoich możliwościach. Współpracę z dietetykiem
              możesz dołączyć wtedy, gdy potrzebujesz wsparcia w odżywianiu.
            </p>
            <Link className="text-link" to="/#zespol">
              Poznaj osoby, z którymi będziesz pracować{" "}
              <span aria-hidden="true">↓</span>
            </Link>
          </div>
          <div className="about-art" aria-hidden="true">
            <img src="/Athles_Sygnet_White_Burgundy.svg" alt="" />
            <span>
              ATHLES<span>STUDIO</span>
            </span>
          </div>
        </div>
      </section>
      <section className="section diagnostic">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">PIERWSZA WIZYTA</p>
              <h2>Jak wygląda pierwsza wizyta?</h2>
            </div>
            <p>
              Podczas darmowej diagnostyki rozmawiamy o Twoim problemie,
              oceniamy sprawność i omawiamy możliwe formy współpracy.
            </p>
          </div>
          <div className="steps">
            {[
              [
                "01",
                "Rozmowa",
                "Poznajemy Twój cel, historię dolegliwości i dotychczasową aktywność.",
              ],
              [
                "02",
                "Badanie",
                "Sprawdzamy ruchomość, siłę i sposób poruszania się, dobierając badanie do sytuacji.",
              ],
              [
                "03",
                "Dalszy plan",
                "Omawiamy wyniki i proponujemy kolejny krok: fizjoterapię, trening lub konsultację dietetyczną.",
              ],
            ].map(([n, title, text]) => (
              <article key={n}>
                <span className="step-number">{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <Booking />
          <span className="inline-note">55 minut · 0 zł</span>
        </div>
      </section>
      <section id="zespol" className="section team-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">ZESPÓŁ ATHLES</p>
              <h2>Poznaj nasz zespół.</h2>
            </div>
            <p>
              Różne specjalizacje.
              <br />
              Wspólna praca nad Twoim celem.
            </p>
          </div>
          <div className="team-grid">
            {team.map((person) => (
              <article className="person" key={person.name}>
                <img src={person.photo} alt={person.name} loading="lazy" />
                <div className="person-copy">
                  <h3>{person.name}</h3>
                  <p className="role">{person.role}</p>
                  <p>{person.text}</p>
                  <Booking className="text-link">
                    Sprawdź terminy w Booksy
                  </Booking>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="oferta" className="section offer-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">NASZA OFERTA</p>
              <h2>Usługi ATHLES w Toruniu</h2>
            </div>
            <p>
              Ceny i usługi według Booksy.
              <br />
              Aktualne terminy znajdziesz przy rezerwacji.
            </p>
          </div>
          <div className="services-grid">
            {services.map(([name, tag, text, price], index) => (
              <article className="service" key={name}>
                <div className="service-top">
                  <span className="service-number">0{index + 1}</span>
                  <span>{tag}</span>
                </div>
                <h3>{name}</h3>
                <p>{text}</p>
                <p className="price">{price}</p>
                <Booking className="text-link">Zarezerwuj w Booksy</Booking>
              </article>
            ))}
          </div>
          <details className="packages">
            <summary>
              Pakiety spotkań i treningów <span aria-hidden="true">+</span>
            </summary>
            <div className="package-grid">
              <div>
                <h3>Z Mateuszem</h3>
                <p>3 spotkania — 585 zł</p>
                <p>7 spotkań — 1 295 zł</p>
                <p>12 spotkań — 2 160 zł</p>
              </div>
              <div>
                <h3>Z trenerami</h3>
                <p>3 treningi — 510 zł</p>
                <p>7 treningów — 1 155 zł</p>
                <p>12 treningów — 1 920 zł</p>
              </div>
            </div>
            <Booking className="text-link">Sprawdź pakiety w Booksy</Booking>
          </details>
        </div>
      </section>
      <section id="dietetyka" className="section nutrition-section">
        <div className="container">
          <div className="nutrition-grid">
            <div className="nutrition-copy">
              <p className="eyebrow">DIETETYKA I PSYCHODIETETYKA</p>
              <h2>Konsultacje dietetyczne w Toruniu</h2>
              <p className="lead">
                Kiedy plan żywieniowy trudno utrzymać w codziennym życiu, warto
                przyjrzeć się temu, jak wygląda Twój dzień. Wiktoria pomaga
                dobrać zalecenia do pracy, treningów i posiłków, które
                rzeczywiście możesz przygotować.
              </p>
              <h3>Z czym możesz się zgłosić?</h3>
              <ul className="nutrition-needs">
                <li>
                  Chcesz zmniejszyć masę ciała i uporządkować sposób odżywiania.
                </li>
                <li>
                  Trenujesz i potrzebujesz dopasować posiłki do aktywności.
                </li>
                <li>
                  Masz za sobą kilka diet i trudno Ci utrzymać zalecenia przez
                  dłuższy czas.
                </li>
                <li>
                  Chcesz pracować nad nawykami żywieniowymi i relacją z
                  jedzeniem.
                </li>
              </ul>
              <h3>Jak wygląda współpraca?</h3>
              <p>
                Pierwsza konsultacja zaczyna się od wywiadu żywieniowego.
                Omawiacie Twój cel, dotychczasowy sposób odżywiania, aktywność
                oraz to, co sprawia trudność. Na tej podstawie ustalacie
                zalecenia i dalszy plan współpracy.
              </p>
              <p>
                Na wizytach kontrolnych sprawdzacie, co udało się wdrożyć i co
                wymaga zmiany. W psychodietetyce przyglądacie się również
                nawykom i okolicznościom, które wpływają na jedzenie, aby
                zalecenia były łatwiejsze do zastosowania na co dzień.
              </p>
              <p>
                Jeśli wolisz gotowy plan posiłków, możesz wybrać wizytę z
                jadłospisem. To konsultacja połączona z przygotowaniem planu
                żywieniowego dopasowanego do informacji z wywiadu.
              </p>
            </div>
            <aside className="nutrition-specialist">
              <img
                src="/Wiktoria.jpeg"
                alt="Wiktoria Nastula — dietetyk kliniczny i psychodietetyk w ATHLES"
                loading="lazy"
              />
              <div>
                <h3>Wiktoria Nastula</h3>
                <p>Dietetyk kliniczny · psychodietetyk</p>
                <Booking className="button primary">
                  Umów konsultację dietetyczną
                </Booking>
                <small>W Booksy wybierz kategorię „Dietetyka”.</small>
              </div>
            </aside>
          </div>
          <div className="nutrition-visits">
            <article>
              <h3>Pierwsza wizyta</h3>
              <p>
                Wywiad żywieniowy, rozmowa o celu i ustalenie dalszej
                współpracy.
              </p>
              <strong>200 zł · 60 minut</strong>
            </article>
            <article>
              <h3>Kolejna wizyta</h3>
              <p>
                Omówienie ostatnich tygodni i dopasowanie zaleceń do tego, co
                udało się wdrożyć.
              </p>
              <strong>180 zł · 60 minut</strong>
            </article>
            <article>
              <h3>Wizyta i jadłospis</h3>
              <p>
                Konsultacja dietetyczna połączona z przygotowaniem planu
                posiłków.
              </p>
              <strong>350 zł · konsultacja 60 minut</strong>
            </article>
          </div>
        </div>
      </section>
      <section className="section final-cta">
        <div className="container">
          <p className="eyebrow">ZAPISY PRZEZ BOOKSY</p>
          <h2>Umów darmową diagnostykę w ATHLES</h2>
          <Booking />
          <p className="booking-note">
            Darmowa diagnostyka · 55 minut · zapisy przez Booksy
          </p>
        </div>
      </section>
      <section className="section faq-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">PRZED PIERWSZĄ WIZYTĄ</p>
              <h2>Najczęstsze pytania</h2>
            </div>
          </div>
          <div className="faq-list">
            {[
              [
                "Jak zapisać się na darmową diagnostykę?",
                "Kliknij „Umów darmową diagnostykę”. Na profilu ATHLES w Booksy wybierz usługę „Diagnostyka systemem Athles Metod” i dostępny termin. Spotkanie trwa 55 minut i kosztuje 0 zł.",
              ],
              [
                "Czy mogę zacząć trening personalny, jeśli wcześniej nie ćwiczyłem?",
                "Tak. Trener poznaje Twoje doświadczenie i sprawdza, jakie ćwiczenia możesz obecnie wykonać. Od tego zaczyna dobór planu i obciążenia. Podczas treningu uczysz się techniki.",
              ],
              [
                "Czy w ATHLES mogę kontynuować trening po rehabilitacji?",
                "Tak. Fizjoterapia i trening odbywają się w jednym studiu. Gdy pozwala na to Twój stan, możesz kontynuować pracę nad siłą i sprawnością z trenerem. Sposób powrotu do aktywności ustalamy po ocenie Twoich możliwości.",
              ],
              [
                "Jak wygląda pierwsza konsultacja dietetyczna?",
                "Wiktoria pyta o Twój sposób odżywiania, cel, aktywność i codzienne obowiązki. Na tej podstawie ustalacie zalecenia i dalszą współpracę. W Booksy dostępne są konsultacje oraz wizyta z jadłospisem.",
              ],
            ].map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section id="kontakt" className="section contact">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">KONTAKT</p>
            <h2>ATHLES Studio — kontakt i dojazd</h2>
            <address>
              <strong>Mazowiecka 70a</strong>
              <br />
              87-100 Toruń
              <br />
              <a href="mailto:kontakt@athles.pl">kontakt@athles.pl</a>
            </address>
            <p className="company">
              ATHLES STUDIO Sp. z o.o.
              <br />
              NIP: 8792773749
            </p>
            <div className="contact-links">
              <a
                className="text-link"
                href="https://www.instagram.com/athlesstudio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram ↗
              </a>
              <Booking className="text-link">Zapisy w Booksy</Booking>
            </div>
          </div>
          <div className="map-panel">
            {mapOpen ? (
              <iframe
                title="Lokalizacja ATHLES Studio w Google Maps"
                src="https://maps.google.com/maps?q=53.0436947469459,18.629337099641475&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="map-placeholder">
                <img src="/Athles_Sygnet_Color.svg" alt="" width="60" />
                <h3>ATHLES Studio</h3>
                <p>Mazowiecka 70a, Toruń</p>
                <button
                  className="button secondary"
                  onClick={() => setMapOpen(true)}
                >
                  Pokaż mapę Google <span aria-hidden="true">↗</span>
                </button>
                <small>Po kliknięciu mapa połączy się z usługą Google.</small>
              </div>
            )}
            <a
              href="https://maps.google.com/maps?daddr=53.0436947469459,18.629337099641475"
              target="_blank"
              rel="noopener noreferrer"
              className="directions"
            >
              Wyznacz trasę w Google Maps ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
function Privacy() {
  return (
    <article className="container legal section">
      <p className="eyebrow">INFORMACJE O DANYCH OSOBOWYCH</p>
      <h1>Prywatność i RODO</h1>
      <h2>Administrator i kontakt</h2>
      <p>
        Administratorem danych jest ATHLES STUDIO Sp. z o.o., ul. Mazowiecka
        70a, 87-100 Toruń. Kontakt ze studiem:{" "}
        <a href="mailto:kontakt@athles.pl">kontakt@athles.pl</a>. Kontakt z
        Inspektorem Ochrony Danych:{" "}
        <a href="mailto:iod@netkompsecurity.pl">iod@netkompsecurity.pl</a>.
      </p>
      <h2>Klauzule informacyjne</h2>
      <p>
        Informacje dotyczące przetwarzania danych w związku z usługami studia,
        dokumentacją i rozliczeniami, a także praw osób, których dane dotyczą,
        znajdują się w poniższym dokumencie.
      </p>
      <a
        href="/dokumenty/klauzule-informacyjne.pdf"
        className="button primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Otwórz klauzule RODO (PDF) ↗
      </a>
      <h2>Rezerwacje wizyt</h2>
      <p>
        Zapisy odbywają się w zewnętrznym serwisie Booksy. Po przejściu do
        rezerwacji zapoznaj się również z informacjami o prywatności dostępnymi
        w Booksy.
      </p>
      <h2>Korzystanie ze strony</h2>
      <p>
        Strona nie zawiera formularza zbierającego dane ani narzędzi
        analitycznych lub reklamowych w swoim kodzie. Hosting może przetwarzać
        techniczne dane połączenia potrzebne do udostępnienia strony. Fonty
        pobierane są z Google Fonts i CDNFonts. Mapa Google ładuje się dopiero
        po kliknięciu przycisku „Pokaż mapę Google”. Otwieranie zewnętrznych
        usług powoduje połączenie z ich dostawcami.
      </p>
      <Link to="/" className="text-link">
        ← Wróć do strony głównej
      </Link>
    </article>
  );
}
function Terms() {
  return (
    <article className="container legal section">
      <p className="eyebrow">DOKUMENTY</p>
      <h1>Regulamin</h1>
      <p>
        Regulamin studia jest w przygotowaniu. Po ukończeniu będzie dostępny na
        tej stronie.
      </p>
      <p>
        Pytania dotyczące usług i rezerwacji możesz kierować na{" "}
        <a href="mailto:kontakt@athles.pl">kontakt@athles.pl</a>. Warunki
        rezerwacji dostępne są przy zapisie w Booksy.
      </p>
      <Link to="/" className="text-link">
        ← Wróć do strony głównej
      </Link>
    </article>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} ATHLES STUDIO</p>
        <nav aria-label="Dokumenty">
          <Link to="/privacy-policy">Prywatność i RODO</Link>
          <Link to="/regulamin">Regulamin</Link>
        </nav>
      </div>
    </footer>
  );
}
export default function App() {
  return (
    <Router>
      <Scroll />
      <a className="skip-link" href="#main">
        Przejdź do treści
      </a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/regulamin" element={<Terms />} />
          <Route path="/price" element={<Navigate to="/#oferta" replace />} />
          <Route
            path="*"
            element={
              <article className="container legal section">
                <h1>Nie znaleziono strony.</h1>
                <Link to="/">Wróć do ATHLES</Link>
              </article>
            }
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
