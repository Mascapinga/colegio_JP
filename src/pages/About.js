import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import '../styles/About.css';
import { FaBook, FaEye } from 'react-icons/fa';

function About() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <div className="about">
      {/* Sección de Introducción */}
      <section className="intro-section" data-aos="fade-up">
        <h2>Nosotros</h2>
        <div className="intro-container">
          <p className="intro-text">
            Con más de 118 años formando generaciones bajo el lema <strong>"Estudio, trabajo y superación"</strong>, 
            la Institución Educativa Juan Jiménez Pimentel es un referente educativo en la región San Martín.
          </p>
        </div>
      </section>

      {/* Sección de Categorías */}
      <section className="categories-section" data-aos="fade-up">
        <div className="categories-container">
          <div className="about-categories">
            {/* Historia */}
            <Link to="/nosotros/historia" className="about-card history">
              <div className="card-icon-container">
                <FaBook className="card-icon" />
              </div>
              <h3>Historia</h3>
              <p>Conoce nuestro recorrido desde 1900 hasta hoy</p>
              <span className="card-link">Ver detalles →</span>
            </Link>
            
            {/* Misión, Visión y Valores */}
            <Link to="/nosotros/mision-vision" className="about-card mission-vision">
              <div className="card-icon-container">
                <FaEye className="card-icon" />
              </div>
              <h3>Misión, Visión y Valores</h3>
              <p>Nuestra razón de ser y metas a futuro</p>
              <span className="card-link">Explorar →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;