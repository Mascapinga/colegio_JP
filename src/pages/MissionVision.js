import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/About.css'; // Reusamos los estilos de About.css

function MissionVision() {
  useEffect(() => {
    AOS.init({ 
      duration: 1200,
      once: true,
      mirror: false
    });
  }, []);

  return (
    <section className="about-container">
      <div className="about-header">
        <h1 data-aos="fade-down">Misión, Visión y Valores</h1>
      </div>

      {/* Misión, Visión y Valores */}
      <div className="mission-vision-section" data-aos="fade-up">
              
        <div className="mission-vision-container">
          <div className="mission-vision-card">
            <div className="card-icon">M</div>
            <h3>Misión</h3>
            <p>Brindar servicio educativo a la comunidad, promoviendo la formación integral de los estudiantes acorde al CNEB, enfoques transversales y la realidad sociocultural.</p>
          </div>
          
          <div className="mission-vision-card">
            <div className="card-icon">V</div>
            <h3>Visión 2028</h3>
            <p>Ser una institución inclusiva, reconocida por su formación integral y responsabilidad social.</p>
          </div>
          
          <div className="mission-vision-card">
            <div className="card-icon">V</div>
            <h3>Valores</h3>
            <ul className="values-list">
              <li>Respeto</li>
              <li>Honestidad</li>
              <li>Responsabilidad</li>
              <li>Solidaridad</li>
              <li>Superación</li>
              <li>Trabajo</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Compromiso y Futuro */}
      <div className="commitment-section" data-aos="fade-up">
        <div className="commitment-content">
          <h2>Compromiso y Futuro</h2>
          <p>Con 118 años de servicio, la Escuela "Juan Jiménez Pimentel" forma generaciones bajo el lema:</p>
          <div className="commitment-motto">
            "Estudio, trabajo y superación"
          </div>
          <p>Comprometidos con el desarrollo educativo de la región y el país.</p>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;