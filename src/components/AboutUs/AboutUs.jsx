import style from './aboutUs.module.css';

export default function AboutUs() {
  return (
      <div className={style.container}>
        
        <div className={style.aboutUsContainer}>
                    <h2 className={style.sectionTitle}>O nas</h2>
<p className={style.description}>
           ATHLES to premium studio performance i fizjoterapii w Toruniu — miejsce, gdzie diagnozujemy, zanim zaczniemy działać.

Każdy klient przechodzi przez indywidualną konsultację z fizjoterapeutą i diagnostem sportowym Mateuszem Nastulą. Na podstawie wyników (ForceDecks, VBT, testy funkcjonalne, analiza składu ciała Tanita) decydujemy wspólnie o dalszej ścieżce — fizjoterapia, trening personalny, psychodietetyka lub kombinacja wszystkich trzech.

W ATHLES nie ma przypadkowych decyzji. Każda sesja ma cel. Każdy plan ma dane za sobą.
          </p>

 </div>
          <img src="/image_athles.jpeg" 
         alt="image group" className={style.aboutUsImage}  />
       
      </div>
    
  );
}