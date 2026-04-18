import styles from './PackageCard.module.css';

export default function PackageCard({ pkg }) {
  return (
    <div className={`${styles.card} ${pkg.recommended ? styles.recommended : ''}`}>
      <div className={styles.num}>{pkg.num}</div>
      <div className={styles.name}>{pkg.name}</div>
      <div className={styles.namePl}>{pkg.namePl}</div>
      <div className={styles.hours}>{pkg.hours}</div>
      <div className={styles.price}>{pkg.price}</div>
      <div className={styles.unit}>zł / godz.</div>
      <div className={styles.total}>
        Razem: {pkg.total?.toLocaleString('pl-PL')} zł
      </div>
      {pkg.recommended && (
        <div className={styles.badge}>REKOMENDOWANY</div>
      )}
    </div>
  );
}