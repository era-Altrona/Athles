import { useState } from "react";
import { PatternFormat } from "react-number-format";
import style from "./newsletter.module.css";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser"; 

export default function Newsletter() {
  const [name, setName] = useState(""); 
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();

    // check phone number length (after removing spaces)
    const rawPhone = phone.replace(/\s/g, "");
    if (rawPhone.length < 9) {
      alert("Proszę podać poprawny numer telefonu.");
      return;
    }

    setLoading(true);

   
    const templateParams = {
      user_name: name,
      user_phone: phone,
      preferred_time: time,
      project_name: "Athles",
    };

    emailjs
      .send(
        "service_187ff4p",   // Service ID
        "template_knwupcy",  // Template ID
        templateParams,
        "pCDz1MFup1okLcq_P"    // Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Dziękujemy! Skontaktujemy się z Tobą.");
          // clean form
          setName("");
          setPhone("");
          setTime("");
          setLoading(false);
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Coś poszło nie tak. Spróbuj ponownie пізніше.");
          setLoading(false);
        }
      );
  };

  return (
    <section className={style.section}>
      <div className={style.container}>
        <h2 className={style.title}>Napisz do nas!</h2>
        <p className={style.subtitle}>Zapisz się na darmową diagnostykę</p>

        <form className={style.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Imię i nazwisko"
            className={style.input}
            value={name} 
            onChange={(e) => setName(e.target.value)}
            required
          />

          <PatternFormat
            format="+48 ### ### ###"
            mask="_"
            placeholder="Nr telefonu"
            className={style.input}
            value={phone}
            onValueChange={(values) => {
              setPhone(values.value);
            }}
            required
          />

          <select
            className={style.select}
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="" disabled>
              Preferowana godzina kontaktu
            </option>
            <option value="09:00 - 12:00">09:00 - 12:00</option>
            <option value="12:00 - 15:00">12:00 - 15:00</option>
            <option value="15:00 - 18:00">15:00 - 18:00</option>
          </select>

          <div className={style.checkboxContainer}>
            <input
              type="checkbox"
              id="privacy"
              className={style.checkbox}
              required
            />
            <label htmlFor="privacy" className={style.label}>
              Zapisując się, akceptujesz <Link to="/privacy-policy">Politykę prywatności.</Link>
            </label>
          </div>

          <button 
            type="submit" 
            className={style.submitBtn} 
            disabled={loading} 
          >
            {loading ? "WYSYŁANIE..." : "ZAPISZ SIĘ"} <span className={style.arrow}>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}