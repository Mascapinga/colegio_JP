import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Community.css';
import evento from '../assets/evento.jpg';
import evento2 from '../assets/evento2.jpg';

function Community() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="community">
      {/* Sección de Introducción */}
      <section className="intro-section" data-aos="fade-up">
        <h2>Comunidad</h2>
      </section>

      {/* Sección de Eventos */}
      <section className="events-section" data-aos="fade-up">
        <div className="events-container">
          <h3>Eventos</h3>
          <div className="gallery">
            <img 
              src={evento} 
              alt="Feria" 
              loading="lazy" 
              width="300"  // Añadido: coincide con el CSS
              height="200"  // Añadido: coincide con el CSS
            />
            <img 
              src={evento2} 
              alt="Olimpiadas" 
              loading="lazy" 
              width="300"  // Añadido: coincide con el CSS
              height="200"  // Añadido: coincide con el CSS
            />
          </div>
        </div>
      </section>

      {/* Sección de Blog */}
      <section className="blog-section" data-aos="fade-up">
        <div className="blog-container">
          <h3>Blog de Estudiantes</h3>
          <div className="blog-post">
            <h4>Mi Experiencia en la Feria de Ciencias</h4>
            <p>Escrito por: Ana López</p>
            <p>Participar en la feria fue increíble...</p>
          </div>
        </div>
      </section>

      {/* Sección de Padres */}
      <section className="parents-section" data-aos="fade-up">
        <div className="parents-container">
          <h3>Espacio para Padres</h3>
          <button className="platform-btn">Acceder a la Plataforma</button>
        </div>
      </section>
    </div>
  );
}

export default Community;