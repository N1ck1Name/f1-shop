import React from "react";
import "../styles/pages/contact.css";

function Contact() {
  return (
    <main className="contact-page">
      <div className="container">
        <h2 className="page-title">Контакти</h2>
        <p>Зв’яжись із нами: <a href="mailto:f1shop@gmail.com">f1shop@gmail.com</a></p>
        <p>Або заповни форму зворотного зв’язку (скоро з’явиться 😉)</p>
      </div>
    </main>
  );
}

export default Contact;
