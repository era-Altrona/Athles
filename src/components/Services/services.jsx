import React from 'react';
import { Link } from 'react-router-dom';
import styles from './services.module.css';

export default function Services() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Zadbaj o swoje zdrowie i wróć do pełnej sprawności</h2>
        <p className={styles.subtitle}>
          Oferujemy kompleksową rehabilitację i fizjoterapię dopasowaną do Twoich potrzeb. 
          Sprawdź, jak możemy Ci pomóc i zapoznaj się z naszymi pakietami.
        </p>
        <Link to="/price" className={styles.button}>
          Poznaj usługi i cennik
        </Link>
      </div>
    </section>
  );
}