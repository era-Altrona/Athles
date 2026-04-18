import Nav from './Nav'
import SectionDivider from './SectionDivider'
import PackageCard from './PackageCard'
import {
  MEDICAL_PACKAGES,
  COACHING_PACKAGES,
  PSYCHO_SERVICES,
  RABATY,
  SYSTEM_INCLUDES,
  DIAG_FEATURES,
} from './data/pricing.ts'
import styles from './price.module.css'

export default function Price() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLabel}>Cennik usług · 2026</div>
        <h1 className={styles.heroTitle}>
          Precyzja.<br />Nie <span>przypadek.</span>
        </h1>
        <p className={styles.heroDesc}>
          Każda usługa w ATHLES zaczyna się od diagnozy. Działamy na danych — nie na intuicji. Poniżej znajdziesz pełny cennik naszych usług.
        </p>
        <a href="#diagnostyka" className={styles.heroCta}>
          Zacznij od diagnostyki
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>

      <SectionDivider />

      {/* DIAGNOSTYKA */}
      <section className={styles.section} id="diagnostyka">
        <div className={styles.sectionHeader}>
          <div>
            <div className={styles.sectionLabel}>Punkt wejścia</div>
            <h2 className={styles.sectionTitle}>Sesja <span>diagnostyczna</span></h2>
          </div>
          <div className={styles.sectionNote}>ForceDecks · Tanita RD-545 · VBT · Testy funkcjonalne · 60–75 min</div>
        </div>

        <div className={styles.diagCard}>
          <div className={styles.diagLeft}>
            <div className={styles.diagBadge}>Cena otwarcia · limitowana · 90 dni</div>
            <div className={styles.diagTitle}>Kompleksowa ocena ruchowa</div>
            <div className={styles.diagSubtitle}>Każdy klient ATHLES zaczyna od diagnostyki. To punkt wyjścia dla całego planu.</div>
            <div className={styles.diagFeatures}>
              {DIAG_FEATURES.map((f) => (
                <span key={f} className={styles.diagFeature}>{f}</span>
              ))}
            </div>
          </div>
          <div className={styles.diagRight}>
            <div className={styles.diagOrig}>499 zł</div>
            <div className={styles.diagPrice}>149<span> zł</span></div>
            <div className={styles.diagUnit}>/ 60–75 min</div>
            <div className={styles.diagLimit}>⬤ Limitowana liczba miejsc</div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* MEDICAL PERFORMANCE */}
      <section className={styles.section} id="medical">
        <div className={styles.sectionHeader}>
          <div>
            <div className={styles.sectionLabel}>Mateusz Nastula · Fizjoterapeuta</div>
            <h2 className={styles.sectionTitle}>Medical <span>Performance</span></h2>
          </div>
          <div className={styles.sectionNote}>Fizjoterapia · Terapia manualna · Trening medyczny</div>
        </div>
        <p className={styles.serviceDesc}>
          Fizjoterapia i trening medyczny prowadzone przez Mateusza Nastulę. Każda sesja oparta na danych z diagnostyki — brak przypadkowych decyzji, każde działanie ma uzasadnienie kliniczne.
        </p>
        <div className={styles.packagesGrid}>
          {MEDICAL_PACKAGES.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </div>
        <div className={styles.eliteRow}>
          <div>
            <div className={styles.eliteName}>ELITE</div>
            <div className={styles.eliteSub}>15+ godz. · kluby sportowe · B2B · długoterminowa współpraca</div>
          </div>
          <div className={styles.elitePrice}>Wycena indywidualna →</div>
        </div>
      </section>

      <SectionDivider />

      {/* ATHLES METHOD COACHING */}
      <section className={styles.section} id="coaching">
        <div className={styles.sectionHeader}>
          <div>
            <div className={styles.sectionLabel}>Trenerzy ATHLES</div>
            <h2 className={styles.sectionTitle}>Athles Method <span>Coaching</span></h2>
          </div>
          <div className={styles.sectionNote}>Trening personalny · Trening funkcjonalny · Athles Method</div>
        </div>
        <p className={styles.serviceDesc}>
          Trening personalny oparty na autorskim protokole Athles Method. Każda sesja oparta na wynikach diagnostyki — periodyzacja, monitoring obciążeń, korekta wzorców ruchowych.
        </p>
        <div className={styles.packagesGrid}>
          {COACHING_PACKAGES.map((pkg) => (
            <PackageCard key={pkg.name + '_coaching'} pkg={pkg} />
          ))}
        </div>
        <div className={styles.eliteRow}>
          <div>
            <div className={styles.eliteName}>ELITE</div>
            <div className={styles.eliteSub}>15+ godz. · kluby sportowe · B2B · długoterminowa współpraca</div>
          </div>
          <div className={styles.elitePrice}>Wycena indywidualna →</div>
        </div>
      </section>

      <SectionDivider />

      {/* SYSTEM PACK */}
      <section className={styles.section} id="system">
        <div className={styles.sectionHeader}>
          <div>
            <div className={styles.sectionLabel}>Pakiet miesięczny · All-in-one</div>
            <h2 className={styles.sectionTitle}>System <span>Pack</span></h2>
          </div>
          <div className={styles.sectionNote}>Fizjoterapia + Trening + Psychodietetyka w jednym pakiecie</div>
        </div>

        <div className={styles.systemCard}>
          <div className={styles.systemInner}>
            <div className={styles.systemTop}>
              <div>
                <div className={styles.systemBadge}>NAJCZĘŚCIEJ WYBIERANY</div>
                <div className={styles.systemName}>SYSTEM</div>
                <div className={styles.systemTagline}>Kompleksowa opieka · stała miesięczna</div>
              </div>
              <div className={styles.systemPricing}>
                <div className={styles.systemPerDayLabel}>Koszt dzienny</div>
                <div className={styles.systemPerDay}>66<span> zł/dzień</span></div>
                <div className={styles.systemMonthly}>Razem <strong>1 990 zł</strong> / miesiąc</div>
              </div>
            </div>

            <div className={styles.systemServices}>
              {['FIZJO', 'TRENING', 'DIETETYK'].map((s, i) => (
                <div key={s} className={styles.systemService}>
                  <div className={styles.systemServiceDot} />
                  <div className={styles.systemServiceName}>{s}</div>
                  <div className={styles.systemServiceDesc}>
                    {['Fizjoterapia', 'Trening personalny', 'Psychodietetyka'][i]}<br />z puli 8 spotkań
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.systemPool}>
              <div>
                <div className={styles.systemPoolLabel}>Elastyczna pula</div>
                <div className={styles.systemPoolDesc}>
                  <strong>8 spotkań miesięcznie</strong> — dowolna kombinacja.<br />
                  Ty decydujesz co w danym miesiącu potrzebujesz.
                </div>
              </div>
              <div className={styles.systemPoolVal}>8<span>spotk. / mies.</span></div>
            </div>

            <div className={styles.systemIncludes}>
              {SYSTEM_INCLUDES.map((item) => (
                <div key={item} className={styles.systemInclude}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* PSYCHODIETETYKA */}
      <section className={styles.section} id="dietetyk">
        <div className={styles.sectionHeader}>
          <div>
            <div className={styles.sectionLabel}>Wiktoria · Psychodietetyk</div>
            <h2 className={styles.sectionTitle}>Psycho<span>dietetyka</span></h2>
          </div>
          <div className={styles.sectionNote}>Żywienie · Psychologia jedzenia · Plan miesięczny</div>
        </div>
        <p className={styles.serviceDesc}>
          Konsultacje prowadzone przez Wiktorię — specjalistkę łączącą żywienie z psychologią jedzenia. Idealne uzupełnienie ścieżki treningowej lub fizjoterapeutycznej.
        </p>
        <div className={styles.psychoGrid}>
          {PSYCHO_SERVICES.map((s) => (
            <div key={s.name} className={`${styles.psychoCard} ${s.accent ? styles.psychoAccent : ''}`}>
              <div className={styles.psychoName}>{s.name}</div>
              <div className={styles.psychoDesc}>{s.desc}</div>
              <div className={styles.psychoContainerPriceUnit}>{s.orig}
              <div className={styles.psychoPrice}>{s.price}</div>
              <div className={styles.psychoUnit}>{s.unit}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

     
      {/* CTA */}
      <section className={styles.ctaSection} id="kontakt">
        <h2 className={styles.ctaTitle}>Zacznij od <span>diagnostyki</span></h2>
        <p className={styles.ctaDesc}>
          Pierwsze zapytanie jest bezpłatne. Umów sesję diagnostyczną i dowiedz się gdzie jesteś — zanim zdecydujesz co dalej.
        </p>
        <div className={styles.ctaButtons}>
          <a  href="https://booksy.com/pl-pl/299736_mateusz-nastula-mn-centrum_fizjoterapia_22875_torun?do=invite&_branch_match_id=1565232334211428489&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FV90%2BvMMsJ8k4JiUqyrytKTUstKsrMS49PKsovL04tsnVNSU8FAGb8XsQ6AAAA"className={styles.btnPrimary}>
            Umów wizytę
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="tel:+48668335161" className={styles.btnSecondary}>Zadzwoń do nas</a>
        </div>
      </section>

    </>
  )
}
