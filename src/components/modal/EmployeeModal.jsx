import React, {useEffect} from 'react';
import styles from './EmployeeModal.module.css';

export default function EmployeeModal({ employee, onClose }) {

useEffect(() => {
  if (employee) {
    document.body.style.overflow = 'hidden'; 
  } else {
    document.body.style.overflow = 'auto'; 
  }

  return () => {
    document.body.style.overflow = 'auto'; 
  };
   }, [employee]);

  if (!employee) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>

        <div className={styles.modalBody}>
          {/* left side with photo */}
          <div className={styles.modalImageSide}>
            <img src={employee.photo} alt={employee.name} />
          </div>

          {/* Right side with text */}
          <div className={styles.modalContentSide}>
            <h2 className={styles.modalTitle}>{employee.name}</h2>
            <span className={styles.modalSubtitle}>{employee.role}</span>
            <div className={styles.divider}></div>
            <div className={styles.modalText}>
              {employee.details}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

