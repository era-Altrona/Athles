export const MEDICAL_PACKAGES = [
  { num: '01', name: 'SPARK', namePl: 'Pierwsza iskra', hours: '1 godzina', price: 250, total: 250 },
  { num: '02', name: 'BASE', namePl: 'Fundament', hours: '3 godziny', price: 233, total: 699 },
  { num: '03', name: 'BUILD', namePl: 'Proces', hours: '7 godzin', price: 214, total: 1499 },
  { num: '04', name: 'PEAK', namePl: 'Szczyt', hours: '12 godzin', price: 200, total: 2400, recommended: true },
]

export const COACHING_PACKAGES = [
  { num: '01', name: 'SPARK', namePl: 'Pierwsza iskra', hours: '1 godzina', price: 220, total: 220 },
  { num: '02', name: 'BASE', namePl: 'Fundament', hours: '3 godziny', price: 203, total: 609 },
  { num: '03', name: 'BUILD', namePl: 'Proces', hours: '7 godzin', price: 186, total: 1299 },
  { num: '04', name: 'PEAK', namePl: 'Szczyt', hours: '12 godzin', price: 170, total: 2040, recommended: true },
]

export const PSYCHO_SERVICES = [
  { name: 'Pierwsza wizyta', desc: 'Wywiad, analiza nawyków, cele żywieniowe · 60 min', price: 280, unit: 'zł / sesja' },
  { name: 'Kolejna wizyta', desc: 'Konsultacja kontrolna, aktualizacja planu · 60 min', price: 220, unit: 'zł / sesja' },
  { name: 'Jadłospis miesięczny', desc: 'Indywidualny plan żywieniowy bez konsultacji', price: 200, unit: 'zł' },
  { name: 'Wizyta + jadłospis', desc: 'Konsultacja + indywidualny plan miesięczny', price: 420, unit: 'zł · oszczędzasz 60 zł', accent: true },
]

export const RABATY = [
  { name: 'Welcome', trigger: 'Pierwszy zakup pakietu (min. BASE) — jednorazowo dla każdego nowego klienta', val: '-15%' },
  { name: 'Loyalty upgrade', trigger: 'Przejście na wyższy pakiet — nagroda za decyzję o progresji', val: '-10%' },
  { name: 'Referral', trigger: 'Polecony znajomy kupuje min. BASE — Ty dostajesz godzinę gratis', val: '+1 godz.' },
  { name: 'Trainer path', trigger: 'Klient kierowany przez trenera ATHLES do fizjoterapii — stała stawka', val: '180 zł' },
]

export const SYSTEM_INCLUDES = [
  'Stały kontakt z zespołem',
  'Miesięczne podsumowanie postępów',
  'Plan żywieniowy',
  'Plan treningowy domowy',
  'Priorytet w rezerwacji',
  'Re-test diagnostyczny co 3 mies.',
]

export const DIAG_FEATURES = [
  'Analiza składu ciała',
  'ForceDecks — siła i moc',
  'Testy funkcjonalne',
  'VBT — profil prędkości',
  'Omówienie wyników',
  'Plan działania',
]
