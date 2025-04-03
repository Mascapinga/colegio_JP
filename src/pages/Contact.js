import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Contact.css';

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="contact">
      {/* Sección de Introducción */}
      <section className="intro-section" data-aos="fade-up">
        <h2>Contacto</h2>
      </section>

      {/* Sección de Formulario */}
      <section className="form-section" data-aos="fade-up">
        <div className="form-container">
          <h3>Formulario de Contacto</h3>
          <form>
            <div className="form-group">
              <label htmlFor="topic">Tema:</label>
              <select name="topic" id="topic">
                <option value="consulta">Consulta General</option>
                <option value="admision">Admisión</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" placeholder="Nombre" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico:</label>
              <input type="email" id="email" placeholder="Correo Electrónico" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje:</label>
              <textarea id="message" placeholder="Mensaje" required></textarea>
            </div>
            <button type="submit" aria-label="Enviar formulario de contacto">Enviar</button>
          </form>
        </div>
      </section>

      {/* Sección de Mapa */}
      <section className="map-section" data-aos="fade-up">
        <div className="map-container">
          <h3>Ubicación</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627927975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1631234567890!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Mapa de ubicación del colegio"
          ></iframe>
        </div>
      </section>

      {/* Sección de Horarios */}
      <section className="hours-section" data-aos="fade-up">
        <div className="hours-container">
          <h3>Horarios de Atención</h3>
          <p>Lunes a Viernes: 8:00 AM - 5:00 PM</p>
          <p>Sábados: 9:00 AM - 1:00 PM</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;