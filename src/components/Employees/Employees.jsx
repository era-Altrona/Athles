import React, { useState } from 'react';
import EmployeeModal from '../modal/EmployeeModal';
import styles from './employees.module.css';
import { EmployeesData } from './employees';

export default function Employees() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {EmployeesData.map((emp) => (
          <div key={emp.id} className={styles.card}>
            <div className={styles.imageContainer}>

              <img src={emp.photo} alt={emp.name} className={styles.photoCard} />
            </div>
            <div className={styles.containerInfo}>
            <h3 className={styles.name}>{emp.name}</h3>
            <div className={styles.accentLineSmall}></div>
            <p className={styles.role}>{emp.role}</p>
            <button 
              className={styles.button} 
              onClick={() => setSelectedEmployee(emp)}
            >
              Szczegółowo
            </button>
            </div>
          </div>
        ))}
      </div>

      <EmployeeModal 
        employee={selectedEmployee} 
        onClose={() => setSelectedEmployee(null)} 
      />
    </section>
  );
}