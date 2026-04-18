import React, { useState } from 'react';
import styles from './EmployeeModal.module.css';

const EmployeeCard = ({ employee }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Функція для перемикання модалки
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Картка співробітника */}
      <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', cursor: 'pointer' }} onClick={toggleModal}>
        <img src={employee.photo} alt={employee.name} style={{ width: '100px' }} />
        <h3>{employee.name}</h3>
      </div>

      {/* Модальне вікно (відображається лише якщо isOpen === true) */}
      {isOpen && (
        <div className={styles.overlay} onClick={toggleModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={toggleModal}>&times;</button>
            
            <div className={styles.content}>
              <img className={styles.photo} src={employee.photo} alt={employee.name} />
              <h2>{employee.name}</h2>
              <p><strong>Посада:</strong> {employee.position}</p>
              <p>{employee.details}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeCard;