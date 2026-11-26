import { useState, useRef } from "react";
import "./TeamPricing.css";
const BOOKSY = "https://athlesstudio.booksy.com/a";
const people = [
  {
    "name": "Mateusz Nastula",
    "role": "Fizjoterapia ortopedyczna i przygotowanie motoryczne",
    "photo": "/Mateusz.jpeg",
    "tags": [
      "Kolano i ACL",
      "Kolarstwo · tenis · lekkoatletyka"
    ],
    "paragraphs": [
      "Pracuję z osobami po urazach i operacjach ortopedycznych oraz ze sportowcami, którzy chcą rozwijać swoje możliwości fizyczne. Specjalizuję się w pracy ze stawem kolanowym, szczególnie w rehabilitacji po rekonstrukcji ACL.",
      "Łączę fizjoterapię z treningiem przygotowania motorycznego, prowadząc podopiecznych od odbudowy sprawności po powrót do obciążeń treningowych i wymagań ich dyscypliny.",
      "Największe doświadczenie mam we współpracy z kolarzami, tenisistami i lekkoatletami, zarówno amatorami, jak i zawodnikami rywalizującymi na poziomie mistrzostw świata. W pracy skupiam się na ocenie aktualnych możliwości, doborze obciążeń i stopniowym rozwijaniu zdolności potrzebnych w sporcie."
    ],
    "cta": "Umów wizytę lub trening z Mateuszem"
  },
  {
    "name": "Karol Usarek",
    "role": "Przygotowanie motoryczne i trening medyczny",
    "photo": "/Karol.jpeg",
    "tags": [
      "Siatkówka",
      "Plecy i barki"
    ],
    "paragraphs": [
      "Pracuję z osobami, które chcą poprawić swoją sprawność, oraz ze sportowcami przygotowującymi się do wymagań swojej dyscypliny. Najbliższa jest mi siatkówka. Współpracuję zarówno z amatorami, jak i zawodnikami, skupiając się na przygotowaniu fizycznym do gry.",
      "W treningu medycznym pracuję przede wszystkim z osobami z bólem pleców i barków. Dobieram ćwiczenia i obciążenia do ich aktualnych możliwości, pomagając stopniowo wracać do regularnego treningu i codziennej aktywności."
    ],
    "cta": "Umów trening z Karolem"
  },
  {
    "name": "Iwo Kropkowski",
    "role": "Trening sylwetkowy i przygotowanie motoryczne do tenisa oraz padla",
    "photo": "/Iwo.jpeg",
    "tags": [
      "Hipertrofia",
      "Tenis i padel"
    ],
    "paragraphs": [
      "Pracuję z osobami, które chcą rozbudować masę mięśniową, poprawić sylwetkę i zwiększyć siłę. Skupiam się na treningu hipertroficznym, dobierając ćwiczenia i obciążenia do celu oraz doświadczenia osoby trenującej.",
      "Jako były tenisista znam tę dyscyplinę również z perspektywy zawodnika. Prowadzę przygotowanie motoryczne do tenisa i padla, pomagając rozwijać zdolności fizyczne potrzebne na korcie.",
      "W obu obszarach stawiam na uporządkowany trening, stopniową progresję i regularne sprawdzanie postępów."
    ],
    "cta": "Umów trening z Iwo"
  },
  {
    "name": "Wiktoria Nastula",
    "role": "Dietetyka kliniczna i psychodietetyka",
    "photo": "/Wiktoria.jpeg",
    "tags": [
      "Relacja z jedzeniem",
      "Nawyki żywieniowe"
    ],
    "paragraphs": [
      "Pomagam budować nawyki żywieniowe i poprawiać relację z jedzeniem. Łączę dietetykę kliniczną z psychodietetyką, uwzględniając stan zdrowia, potrzeby oraz codzienne możliwości osoby, z którą pracuję.",
      "Skupiam się na zmianach, które można utrzymać na co dzień. Wspólnie szukamy sposobu odżywiania dopasowanego do rytmu życia, preferencji i trudności pojawiających się wokół jedzenia.",
      "Zależy mi, żeby jedzenie wspierało zdrowie i samopoczucie, a dbanie o dietę nie wiązało się z ciągłą presją i poczuciem winy."
    ],
    "cta": "Umów konsultację z Wiktorią"
  }
];
function Reserve({ children, secondary = false }) {
  return <a className={`athles-reserve${secondary ? " athles-reserve-secondary" : ""}`} href={BOOKSY} target="_blank" rel="noopener noreferrer">{children}</a>;
}
export function TeamSection() {
  const [active, setActive] = useState(0);
  const controls = useRef([]);
  const person = active === null ? null : people[active];
  function selectPerson(index) {
    setActive(active === index ? null : index);
  }
  return <section id="zespol" className="section athles-team-pricing athles-team">
    <div className="container">
      <div className="athles-section-intro"><p className="athles-kicker">ZESPÓŁ ATHLES</p><h2>Poznaj nasz zespół.</h2><p>Różne specjalizacje. Wspólna praca nad Twoją sprawnością.</p></div>
      <div className="athles-team-grid">{people.map((member, index) => <article className={`athles-person${active === index ? " is-selected" : ""}`} key={member.name}>
        <img className="athles-person-photo" src={member.photo} alt={member.name} loading="lazy" width="600" height="750" />
        <h3>{member.name}</h3><p className="athles-person-role">{member.role}</p>
        <ul className="athles-tags">{member.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        <button ref={node => { controls.current[index] = node; }} id={`athles-person-${index}`} className="athles-profile-toggle" type="button" aria-expanded={active === index} aria-controls="athles-team-profile" onClick={() => selectPerson(index)}>{active === index ? "Zwiń opis" : "Poznaj mnie"}</button>
      </article>)}</div>
      {person && <div id="athles-team-profile" role="region" aria-labelledby={`athles-person-${active}`} className="athles-team-profile">
        <div className="athles-profile-heading"><p className="athles-kicker">{person.name}</p><h3>{person.role}</h3></div>
        <div className="athles-profile-copy">{person.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<div className="athles-profile-actions"><Reserve>{person.cta}</Reserve><button className="athles-profile-toggle" type="button" onClick={() => { const previous = active; setActive(null); controls.current[previous]?.focus(); }}>Zamknij opis</button></div></div>
      </div>}
    </div>
  </section>;
}
const tabs = ["Trenerzy", "Mateusz", "Dietetyka", "Normatec"];
const money = value => new Intl.NumberFormat("pl-PL").format(value) + " zł";
export function PricingSection() {
  const [tab, setTab] = useState(0);
  const tabRefs = useRef([]);
  function moveTab(event, index) {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") next = (index + tabs.length - 1) % tabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); setTab(next); tabRefs.current[next]?.focus(); }
  }
  return <section id="cennik" className="section athles-team-pricing athles-pricing"><div className="container">
    <div className="athles-section-intro"><p className="athles-kicker">CENNIK</p><h2>Zadbaj o swoją sprawność.</h2><p>Wybierz, jak chcesz zacząć.</p></div>
    <div className="athles-price-tabs" role="tablist" aria-label="Kategorie cennika">{tabs.map((label,index) => <button key={label} ref={node => { tabRefs.current[index] = node; }} type="button" role="tab" id={`athles-price-tab-${index}`} aria-selected={tab === index} aria-controls={`athles-price-panel-${index}`} tabIndex={tab === index ? 0 : -1} onKeyDown={event => moveTab(event,index)} onClick={() => setTab(index)}>{label}</button>)}</div>
    <div id={`athles-price-panel-${tab}`} role="tabpanel" tabIndex="0" aria-labelledby={`athles-price-tab-${tab}`}>
      {tab === 0 && <div className="athles-price-cards">
        <article className="athles-price-card"><p className="athles-kicker">NA POCZĄTEK</p><h3>Pojedynczy trening</h3><p className="athles-amount">200 zł</p><p>60 minut indywidualnej pracy z trenerem.</p><div className="athles-card-action"><Reserve secondary>Umów trening</Reserve></div></article>
        <article className="athles-price-card"><p className="athles-kicker">REGULARNA PRACA</p><h3>Regularne treningi</h3><dl className="athles-price-list"><div><dt>3 treningi</dt><dd>570 zł</dd></div><div><dt>7 treningów</dt><dd>1 260 zł</dd></div></dl><p>Każdy trening trwa 60 minut.</p><div className="athles-card-action"><Reserve secondary>Umów wizytę</Reserve></div></article>
        <article className="athles-price-card athles-featured"><p className="athles-kicker">TRENING + REGENERACJA + DIETETYKA</p><h3>Pakiet 12 treningów</h3><p className="athles-amount">2 160 zł</p><ul className="athles-benefits"><li>12 treningów indywidualnych po 60 min</li><li>12 sesji Normatec po 30 min, po każdym treningu, gratis</li><li>1 konsultacja dietetyczna gratis</li></ul><div className="athles-card-action"><Reserve>Wybieram pakiet</Reserve><p className="athles-small">25 usług w cenie pakietu</p></div></article>
      </div>}
      {tab === 1 && <div className="athles-price-cards athles-two-cards"><article className="athles-price-card"><p className="athles-kicker">MATEUSZ NASTULA</p><h3>Wizyta lub trening</h3><p className="athles-amount">210 zł</p><p>60 minut indywidualnej pracy.</p><div className="athles-card-action"><Reserve>Umów spotkanie</Reserve></div></article><article className="athles-price-card"><h3>Pakiety z Mateuszem</h3><p>Chcesz zaplanować regularną współpracę? Zapytaj nas o dostępny pakiet.</p><p>Pakiet 12 spotkań obejmuje również 12 sesji Normatec po 30 minut po każdym spotkaniu i jedną konsultację dietetyczną gratis.</p><div className="athles-card-action"><a className="athles-reserve athles-reserve-secondary" href="#kontakt">Zapytaj o pakiet</a></div></article></div>}
      {tab === 2 && <div className="athles-price-cards athles-one-card"><article className="athles-price-card"><p className="athles-kicker">WIKTORIA NASTULA</p><h3>Konsultacja dietetyczna</h3><p className="athles-amount">200 zł</p><p>60 minut. Konsultacja z analizą składu ciała.</p><div className="athles-card-action"><Reserve>Umów konsultację</Reserve></div></article></div>}
      {tab === 3 && <div className="athles-price-cards athles-two-cards"><article className="athles-price-card"><p className="athles-kicker">PRESOTERAPIA</p><h3>Pojedyncza sesja Normatec</h3><dl className="athles-price-list">{[["20 minut",39],["30 minut",59],["60 minut",99]].map(([name,price]) => <div key={name}><dt>{name}</dt><dd>{money(price)}</dd></div>)}</dl><div className="athles-card-action"><Reserve secondary>Umów sesję</Reserve></div></article><article className="athles-price-card"><p className="athles-kicker">REGULARNE SESJE</p><h3>Pakiety Normatec</h3><dl className="athles-price-list">{[["5 × 30 min",249],["10 × 30 min",449],["5 × 60 min",449],["10 × 60 min",799]].map(([name,price]) => <div key={name}><dt>{name}</dt><dd>{money(price)}</dd></div>)}</dl><div className="athles-card-action"><Reserve secondary>Wybierz pakiet</Reserve></div></article></div>}
    </div><p className="athles-price-help">Nie wiesz, od czego zacząć? <a href="#kontakt">Porozmawiaj z nami.</a></p>
  </div></section>;
}
