import style from './footer.module.css';
import { FaInstagram, FaEnvelope } from 'react-icons/fa'; // Приклад іконок
import { SiReebok } from 'react-icons/si'; // Або інша схожа іконка

export default function Footer() {
  return (
    <footer id='contact' className={style.footer}>
      <div className={style.topDivider}></div>
      
      <div className={style.container}>
        {/* Ліва частина */}
        <div className={style.info}>
          <p className={style.copyright}>© 2025 Athles Studio</p>
          <p className={style.details}>Studio Treningu Personalnego Mateusz Nastula</p>
          <p className={style.details}>NIP 6722096751</p>
          <a href="mailto:kontakt@athles.pl" className={style.link}>kontakt@athles.pl</a>
          <a href="#" className={style.link}>Polityka prywatności</a>
        </div>

        {/* Права частина */}
        <div className={style.socialsBlock}>
          <span className={style.hashtag}># <span className={style.red}>N O M</span> E R C Y</span>
          
          <div className={style.iconContainer}>
            <a href="mailto:kontakt@athles.pl" className={style.socialIcon}><FaEnvelope /></a>
            <a href="https://www.instagram.com/athlesstudio/" className={style.socialIcon}><FaInstagram /></a>
        <a 
          href="https://booksy.com/pl-pl/dl/show-business/299736" 
          className={style.socialIcon} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <svg 
            viewBox="0 0 100 100" 
            width="22" /* Встановлюємо розмір самої іконки */
            height="22"
            fill="currentColor" /* Важливо: тепер він бере колір з вашого .socialIcon (чорний) */
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M74.1,25.2v39.6c0,11.2-9.1,20.3-20.3,20.3s-20.3-9.1-20.3-20.3s9.1-20.3,20.3-20.3c3.2,0,6.2,0.7,8.9,2.1V25.2 c0-1.4,1.1-2.5,2.5-2.5S74.1,23.8,74.1,25.2z M53.8,51.2c-7.6,0-13.8,6.2-13.8,13.8s6.2,13.8,13.8,13.8S67.6,72.6,67.6,65 S61.4,51.2,53.8,51.2z M27,82.6c-4.4,0-8.6-1.7-11.7-4.8c-3.1-3.1-4.8-7.3-4.8-11.7c0-4.4,1.7-8.6,4.8-11.7c3.1-3.1,7.3-4.8,11.7-4.8 c1.4,0,2.5,1.1,2.5,2.5s-1.1,2.5-2.5,2.5c-3.1,0-6,1.2-8.2,3.4c-2.2,2.2-3.4,5.1-3.4,8.2c0,3.1,1.2,6,3.4,8.2c2.2,2.2,5.1,3.4,8.2,3.4 c1.4,0,2.5,1.1,2.5,2.5S28.4,82.6,27,82.6z" />
          </svg>
        </a>
          </div>
        </div>
      </div>
    </footer>
  );
}