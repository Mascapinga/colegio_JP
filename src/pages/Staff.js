import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import '../styles/Staff.css';
import { FaUserTie, FaChalkboardTeacher, FaBriefcase } from 'react-icons/fa';

function Staff() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <div className="staff">
      {/* Sección de Introducción */}
      <section className="intro-section" data-aos="fade-up">
        <h2>Nuestro Equipo</h2>
        <div className="intro-container">
          <p className="intro-text">
            Conoce a los profesionales que hacen posible nuestra excelencia educativa
          </p>
        </div>
      </section>

      {/* Sección de Categorías */}
      <section className="categories-section" data-aos="fade-up">
        <div className="categories-container">
          <div className="staff-categories">
            {/* 1. Equipo Directivo */}
            <Link to="/personal/directivos" className="staff-card directivo">
              <div className="card-icon-container">
                <FaUserTie className="card-icon" />
              </div>
              <h3>Equipo Directivo</h3>
              <p>Liderazgo y dirección de nuestra institución educativa</p>
              <span className="card-link">Ver detalles →</span>
            </Link>
            
            {/* 2. Cuerpo Docente */}
            <Link to="/personal/docentes" className="staff-card docente">
              <div className="card-icon-container">
                <FaChalkboardTeacher className="card-icon" />
              </div>
              <h3>Cuerpo Docente</h3>
              <p>Profesionales especializados en cada área del conocimiento</p>
              <span className="card-link">Conocer profesores →</span>
            </Link>
            
            {/* 3. Personal Administrativo */}
            <Link to="/personal/administrativos" className="staff-card administrativo">
              <div className="card-icon-container">
                <FaBriefcase className="card-icon" />
              </div>
              <h3>Personal Administrativo</h3>
              <p>Equipo que gestiona y apoya nuestras operaciones diarias</p>
              <span className="card-link">Ver equipo →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Staff;